import { useEffect, useState } from "react";
import PageNav from "../Components/PageNav";
import ProductCard from "../Components/ProductCard";
import ProductHeader from "../Components/ProductHeader";
import { useProduct } from "../Contexts/ProductContext";
import Spinner from "../Components/Spinner";
import styles from "./Products.module.css";

import Button from "../Components/Button";

function Products() {
  const { fetchProduct, products, isLoading, productPagination } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8; // products per page

  const [optionValue, setOptionValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchProduct(currentPage, limit);
  }, [currentPage, limit]);

  const filterProduct = (
    optionValue === "all" ? productPagination : products
  ).filter((product) => {
    const matchesCategory =
      optionValue === "all" ? true : product.category === optionValue;

    const matchesSearch = product.name
      .toLowerCase()
      .replace(" ", "") // handles multiple spaces
      .includes(searchValue.toLowerCase().replace(/\s/g, ""));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
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
