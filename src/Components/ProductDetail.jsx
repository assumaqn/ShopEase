import { Link, useNavigate, useParams } from "react-router";
import styles from "./ProductDetail.module.css";
import StarRating from "./StarRating";
import ProductCard from "./ProductCard";
import Button from "./Button";
import PageNav from "./PageNav";
import Spinner from "./Spinner";
import {
  DollarSign,
  ShoppingCart,
  RotateCcw,
  Truck,
  Shield,
  MoveLeft,
  Timer,
  User,
  Phone,
} from "lucide-react";
import { useProduct } from "../Contexts/ProductContext";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { fetchProductDetail, product, products, isLoading } = useProduct();
  const { id } = useParams();
  useEffect(() => {
    fetchProductDetail(id);
  }, [id]);
  const RelatedProduct = products
    .filter((el) => el.category === product?.category && el.id !== product?.id)
    .slice(0, 3);

  return (
    <>
      <PageNav />
      <section className={styles.productDetail}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <DetailProduct product={product} />
            <RelatedProducts RelatedProduct={RelatedProduct} />
          </>
        )}
      </section>
    </>
  );
}
function DetailProduct({ product }) {
  const { dispatch } = useProduct();
  const [adding, setAdding] = useState(false);
  function handleCart(e) {
    e.preventDefault();
    dispatch({ type: "cart/added", payload: product });
    setAdding(true);
  }
  useEffect(() => {
    setTimeout(() => setAdding(false), 1000);
  });

  return (
    <div className={styles["detail-product"]}>
      <Link className={styles.back} to="/products">
        <MoveLeft size="16px" />
        Back to product
      </Link>
      <div className={styles.img}>
        {product.onSale && product.originalPrice && product.price ? (
          <span className={styles.DiscountedCatagory}>
            {Math.floor(
              ((product.originalPrice - product.price) /
                product.originalPrice) *
                100
            )}
            % Off
          </span>
        ) : null}
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles["all-conte"]}>
        <div className={styles["product-content"]}>
          <span className={styles["catagory"]}>{product.category}</span>
          <h2>{product.name}</h2>
          <div className={styles["product-review"]}>
            <StarRating />
            <span>
              {product.rating}
              <span
                style={{ fontWeight: "500", color: "#555", fontSize: "12px" }}
              >
                ({product.reviews})
              </span>
            </span>
          </div>
          <div className={styles["product-price"]}>
            <span className={styles.price}>
              <DollarSign size="20px" />
              {product.price}
            </span>
            {product.onSale ? (
              <>
                <p>${product.originalPrice}</p>
                <span className={styles.save}>
                  Save ${product.originalPrice - product.price}
                </span>
              </>
            ) : (
              ""
            )}
          </div>
          <p style={{ fontSize: "14px", color: "#555" }}>
            {product.description}
          </p>
          <ul className={styles.list}>
            <li>
              <Truck size="16px" color="#4796e6ff" />
              Free shipping on orders over $100
            </li>
            <li>
              <Shield size="16px" color="#4796e6ff" />
              2-year warranty included
            </li>
            <li>
              <RotateCcw size="16px" color="#4796e6ff" />
              30-day return policy
            </li>
          </ul>
          <hr></hr>
          <div className={styles.seller}>
            <p>
              <Timer size="18px" color="#278df3ff" /> -
              <span>Posted {product.postedDate} ago</span>
            </p>
            <p>
              <User size="18px" color="#278df3ff" /> -
              <span>{product.seller}</span>
            </p>
            <p>
              <Phone size="18px" color="#278df3ff" /> -
              <span>{product.contact}</span>
            </p>
          </div>
        </div>
        <div className={styles["btn-container"]}>
          <Button type="cart-add" onClick={(e) => handleCart(e)}>
            <ShoppingCart size="16px" />
            {adding ? "Adding.." : "Add to Cart"}
          </Button>
          <Button type="cart-buy">Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
function RelatedProducts({ RelatedProduct }) {
  const navigate = useNavigate();

  return (
    <div className={styles["related-product"]}>
      <h2>Related Product</h2>
      <div className={styles["related-container"]}>
        {RelatedProduct.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
            style={{ cursor: "pointer" }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
