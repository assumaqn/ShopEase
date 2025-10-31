import styles from "./ProductCard.module.css";
import { DollarSign, Ellipsis, ShoppingCart } from "lucide-react";
import StarRating from "./StarRating";
import Loader from "./loader";

import { Link } from "react-router";
import { useProduct } from "../Contexts/ProductContext";
import { useEffect, useState } from "react";

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
  const [adding, setAdding] = useState(false);
  function handleCart(e) {
    e.preventDefault();
    setAdding(true);
    dispatch({ type: "cart/added", payload: product });
  }
  useEffect(() => {
    setTimeout(() => setAdding(false), 1000);
  });
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
                  e.preventDefault();
                  handleCart(e);
                }}
              >
                {adding ? (
                  <p
                    style={{
                      color: "#fff",
                      height: "20px",
                      width: "30px",
                      alignSelf: "center",
                      textAlign: "center",
                    }}
                  >
                    Adding..
                  </p>
                ) : (
                  <ShoppingCart size="18px" color="#fff" />
                )}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
