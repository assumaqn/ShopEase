import Bit from "./Bit";
import Button from "./Button";
import styles from "./HeroContent.module.css";
function HeroContent() {
  return (
    <div className={styles["hero-content"]}>
      <Bit>Welcome to ShopEase</Bit>
      <h1>
        Your Premium <span>Tech Store</span>
      </h1>
      <p>
        Cutting-edge technology meets unbeatable prices. Discover the latest
        gadgets, laptops, smartphones, and audio gear with exclusive deals up to
        50% off.
      </p>
      <div className={styles.detail}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <strong>500+</strong>
          <span> Products</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong>50K+</strong>
          <span> Customers</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong>4.8★</strong>
          <span> Rating</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button type="primary">Shop Now &#x2192;</Button>
        <Button>Browse Products</Button>
      </div>
    </div>
  );
}

export default HeroContent;
