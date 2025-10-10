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

  useEffect(() => {
    fetchProduct();
  }, []);
  const filterProduct =
    optionValue === "all"
      ? products
      : products.filter((product) => product.category === optionValue);

  return (
    <>
      <PageNav />
      <section className={styles.product}>
        <ProductHeader onOption={setOptionValue} />
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
