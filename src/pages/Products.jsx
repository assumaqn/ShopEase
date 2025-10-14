import { useEffect, useState } from "react";
import PageNav from "../Components/PageNav";
import ProductCard from "../Components/ProductCard";
import ProductHeader from "../Components/ProductHeader";
import { useProduct } from "../Contexts/ProductContext";
import Spinner from "../Components/Spinner";
import styles from "./Products.module.css";
import Modal from "../Components/Modal";
import Button from "../Components/Button";

function Products() {
  const { fetchProduct, products, isLoading } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10); // products per page

  const [optionValue, setOptionValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchProduct(currentPage, limit);
  }, [currentPage, limit]);

  const filterProduct = products.filter((product) => {
    const matchesCategory =
      optionValue === "all" ? true : product.category === optionValue;
    const matchesSearch = product.name
      .toLowerCase()
      .replace(" ", "")
      .includes(searchValue.toLowerCase().replace(" ", ""));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Modal />
      <PageNav />
      <section className={styles.product}>
        <ProductHeader
          onOption={setOptionValue}
          filterLength={filterProduct.length}
          onSearch={setSearchValue}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styles.products}>
            {filterProduct.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
        <div
          className={styles.pagination}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <Button
            type="pagin"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </Button>

          <span>Page {currentPage}</span>

          <Button type="pagin" onClick={() => setCurrentPage((p) => p + 1)}>
            Next
          </Button>
        </div>
      </section>
    </>
  );
}

export default Products;
