import { useEffect, useState } from "react";
import PageNav from "../Components/PageNav";
import ProductCard from "../Components/ProductCard";
import ProductHeader from "../Components/ProductHeader";
import { useProduct } from "../Contexts/ProductContext";
import Spinner from "../Components/Spinner";
import styles from "./Products.module.css";
function Products() {
  const { fetchProduct, products, isLoading } = useProduct();

  const [optionValue, setOptionValue] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const filterProduct = products.filter((product) => {
    const matchesCategory =
      optionValue === "all" ? true : product.category === optionValue;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());

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
      </section>
    </>
  );
}

export default Products;
