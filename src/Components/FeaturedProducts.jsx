import { useEffect } from "react";
import { useProduct } from "../Contexts/ProductContext";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import styles from "./FeaturedProducts.module.css";

function FeaturedProducts() {
  const { fetchProduct, featureProduct } = useProduct();
  const navigate = useNavigate();
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <section
      className={`section section--hidden  ${styles["featureProduct-section"]} `}
    >
      <div style={{ textAlign: "center" }}>
        <h2
          style={{ fontSize: "28px", fontWeight: "800", marginBottom: "10px" }}
        >
          Featured Products
        </h2>
        <p style={{ fontSize: "16px", color: "#555" }}>
          Check out our handpicked selection of premium tech
        </p>
      </div>
      <div className={styles["products-featured"]}>
        {featureProduct.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Button type="secondary" onClick={() => navigate("/products")}>
        View all products
      </Button>
    </section>
  );
}

export default FeaturedProducts;
