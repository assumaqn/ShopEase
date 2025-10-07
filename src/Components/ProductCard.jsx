import styles from "./ProductCard.module.css";
import { Star, DollarSign, ShoppingCart } from "lucide-react";
function ProductCard({ product }) {
  const { name, category, price, image, description, stock, rating } = product;

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={image} alt={name} />
      </div>
      <div className={styles["product-content"]}>
        <h4>{name}</h4>
        <p>{description}</p>
        <span
          style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
          }}
        >
          <Star size="17px" color="#1b6cbdff" fill="#1b6cbdff" />
          <span style={{ fontSize: "14px" }}>{rating}</span>
        </span>
        <div className={styles.bottom}>
          <h4 style={{}}>
            <DollarSign size="20px" strokeWidth={3} />
            <strong style={{ fontWeight: "900", fontSize: "20px" }}>
              {price}
            </strong>
          </h4>
          <span>
            <ShoppingCart size="18px" color="#fff" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
