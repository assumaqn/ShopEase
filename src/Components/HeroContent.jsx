import Bit from "./Bit";
import Button from "./Button";
import styles from "./HeroContent.module.css";
import { useNavigate } from "react-router-dom";

function HeroContent() {
  const navigate = useNavigate();
  return (
    <div className={styles["hero-content"]}>
      <Bit>Welcome to ShopEase</Bit>

      <h1>
        Your Premium{" "}
        <span className={styles["hero-highlight"]}>Tech Store</span>
      </h1>
      <p>
        Cutting-edge technology meets unbeatable prices. Discover the latest
        gadgets, laptops, smartphones, and audio gear with exclusive deals up to
        50% off.
      </p>
      <div className={styles.detail}>
        <div className={styles["detail-product"]}>
          <strong>500+</strong>
          <span> Products</span>
        </div>
        <div className={styles["detail-customer"]}>
          <strong>50K+</strong>
          <span> Customers</span>
        </div>
        <div className={styles["detail-review"]}>
          <strong>4.8★</strong>
          <span> Rating</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button type="primary" onClick={() => navigate("/products")}>
          Shop Now &#x2192;
        </Button>
        <Button>Browse Products</Button>
      </div>
    </div>
  );
}

export default HeroContent;
