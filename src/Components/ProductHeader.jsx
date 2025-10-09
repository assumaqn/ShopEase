import styles from "./ProductHeader.module.css";

// import { useProduct } from "../Contexts/ProductContext";
// import { useEffect } from "react";
function ProductHeader() {
  // const { fetchProduct, products } = useProduct();

  // useEffect(() => {
  //   fetchProduct();
  // }, []);
  // const catagory = products.map((product) => product.catagory);
  // console.log(catagory); dynamicly list all the option

  return (
    <div className={styles.header}>
      <span>
        <h2>All Products</h2>
        <p>Browse our complete collection of 45 premium tech products</p>
      </span>
      <span className={styles.input}>
        <input type="search" placeholder="search for product...." />
        <select>
          <option>All Categories</option>
          <option>Laptops</option>
          <option>Smartphones</option>
          <option>Audio</option>
          <option>Tablets</option>
          <option>Wearables</option>
          <option>Cameras</option>
          <option>Monitors</option>
          <option>Gaming</option>
          <option>Smart Home</option>
          <option>Storage</option>
        </select>
      </span>
      <p>Showing 2 of 45 products</p>
    </div>
  );
}

export default ProductHeader;
