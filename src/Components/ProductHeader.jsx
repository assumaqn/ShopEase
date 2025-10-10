import styles from "./ProductHeader.module.css";

import { useProduct } from "../Contexts/ProductContext";
import { useEffect } from "react";
function ProductHeader({ onOption, filterLength, onSearch }) {
  const { fetchProduct, products } = useProduct();

  useEffect(() => {
    fetchProduct();
  }, []);

  const options = products.reduce((arr, cur) => {
    if (!arr.includes(cur.category)) {
      arr.push(cur.category);
    }
    return arr;
  }, []);

  const totalProduct = products.length;
  return (
    <div className={styles.header}>
      <span>
        <h2>All Products</h2>
        <p>
          Browse our complete collection of {totalProduct} premium tech products
        </p>
      </span>
      <span className={styles.input}>
        <input
          type="search"
          placeholder="search for product...."
          onChange={(e) => onSearch(e.target.value)}
        />
        <select
          onChange={(e) => {
            onOption(e.target.value);
          }}
        >
          <option value="all">All Categories</option>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </span>
      <p style={{ marginTop: "10px" }}>
        Showing {filterLength === totalProduct ? "All" : filterLength} of{" "}
        {totalProduct} products
      </p>
    </div>
  );
}

export default ProductHeader;
