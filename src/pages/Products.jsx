import { useEffect } from "react";
import PageNav from "../Components/PageNav";
import ProductCard from "../Components/ProductCard";
import ProductHeader from "../Components/ProductHeader";
import { useProduct } from "../Contexts/ProductContext";
import Spinner from "../Components/Spinner";
import styles from "./Products.module.css";
function Products() {
  const { fetchProduct, products, isLoading } = useProduct();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct, products]);
  return (
    <>
      <PageNav />
      <section className={styles.product}>
        <ProductHeader />
        {!isLoading && <Spinner />}
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
