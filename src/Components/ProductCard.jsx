import styles from "./ProductCard.module.css";
import { DollarSign, ShoppingCart } from "lucide-react";
import StarRating from "./StarRating";
// import ProductDetail from "./ProductDetail";
import { Link } from "react-router";

function ProductCard({ product }) {
  // const [selected, setSelected] = useState(false);
  const {
    id,
    name,
    category,
    price,
    image,
    description,
    stock,
    rating,
    onSale,
    originalPrice,
  } = product;

  const DiscountPer = onSale && ((originalPrice - price) / originalPrice) * 100;
  return (
    <>
      <div role="button" className={styles.card}>
        <Link to={`${id}`}>
          <div className={styles.img}>
            {onSale ? (
              <span className={styles.DiscountedCatagory}>
                {Math.floor(DiscountPer)}% Off
              </span>
            ) : (
              ""
            )}
            <span className={onSale ? styles.discount : styles.catagory}>
              {category}
            </span>
            <img src={image} loading="lazy" alt={name} />
          </div>
          <div className={styles["product-content"]}>
            <h4>{name}</h4>
            <p>{description}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  gap: "1px",
                  alignItems: "center",
                  fontSize: "14px",
                }}
              >
                <StarRating />
                <span>{rating}</span>
              </span>
              <p style={{ fontSize: "12px", color: "#555" }}>
                {stock} in stock
              </p>
            </div>
            <div className={styles.bottom}>
              <h4 style={{}}>
                <DollarSign size="20px" strokeWidth={3} />
                <strong
                  style={{
                    fontWeight: "900",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  {price}
                  {onSale && (
                    <p
                      style={{
                        textDecoration: "line-through",
                        fontSize: "14px",
                        color: "#555",
                        fontWeight: "lighter",
                      }}
                    >
                      ${originalPrice}
                    </p>
                  )}
                </strong>
              </h4>
              <span>
                <ShoppingCart size="18px" color="#fff" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
