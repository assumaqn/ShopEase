import styles from "./ProductCard.module.css";
import { DollarSign, ShoppingCart } from "lucide-react";
import StarRating from "./StarRating";

import { Link } from "react-router";
import { useProduct } from "../Contexts/ProductContext";

function ProductCard({ product }) {
  const { dispatch } = useProduct();
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
    postedDate,
  } = product;

  function handleCart(e) {
    e.preventDefault();
    dispatch({ type: "cart/added", payload: product });
  }

  const DiscountPer = onSale && ((originalPrice - price) / originalPrice) * 100;
  return (
    <>
      <div role="button" className={styles.card}>
        <Link to={`${id}`} onClick={(e) => e.preventDefault()}>
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
            <div className={styles["product-details"]}>
              <h4>{name}</h4>
              <span>{postedDate} ago</span>
            </div>
            <p>{description}</p>
            <div className={styles["product-details-col-2"]}>
              <span>
                <StarRating />
                <span>{rating}</span>
              </span>
              <p>{stock} in stock</p>
            </div>
            <div className={styles.bottom}>
              <h4>
                <DollarSign size="20px" strokeWidth={3} />
                <strong>
                  {price}
                  {onSale && (
                    <p className={styles["original-price"]}>${originalPrice}</p>
                  )}
                </strong>
              </h4>
              <span
                onClick={(e) => {
                  handleCart(e);
                }}
              >
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
