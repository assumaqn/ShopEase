import { Link, useParams } from "react-router";
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
} from "lucide-react";
import { useProduct } from "../Contexts/ProductContext";
import { useEffect } from "react";

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
      <section
        className={styles.productDetail}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          position: "relative",
        }}
      >
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
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
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
      <div
        className="all conte"
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "flex-start",
          justifyContent: "space-between",
          gap: "110px",
        }}
      >
        <div
          className="product-content"
          style={{
            alignSelf: "flex-start",
            justifySelf: "flex-start",
            display: "flex",
            flexDirection: "column",
            gap: "9px",
          }}
        >
          <span
            style={{
              padding: "4px",
              display: "inline-block",
              textAlign: "center",
              border: "0.5px solid #555",
              borderRadius: "9px",
              width: "35%",
              fontSize: "12px",
            }}
          >
            {product.category}
          </span>
          <h2 style={{ fontSize: "30px", fontWeight: "600px", color: "#222" }}>
            {product.name}
          </h2>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "2px",
            }}
          >
            <StarRating />
            <span>
              {product.rating}{" "}
              <span
                style={{ fontWeight: "500", color: "#555", fontSize: "12px" }}
              >
                ({product.reviews})
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontSize: "28px",
                fontWeight: "800",
                color: "#1684f1ff",
              }}
            >
              <DollarSign size="20px" />
              {product.price}
            </span>
            {product.onSale ? (
              <>
                <p
                  style={{
                    textDecoration: "line-through",
                    fontSize: "18px",
                    color: "#555",
                  }}
                >
                  ${product.originalPrice}
                </p>
                <span
                  style={{
                    padding: "5px 8px",
                    textAlign: "center",
                    background: "rgba(252, 13, 13, 0.99)",
                    color: "#fff",
                    fontSize: "15px",
                    borderRadius: "9px",
                  }}
                >
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
        </div>
        <div
          className="btn-container"
          style={{
            display: "flex",
            flexDirection: "column",

            width: "90%",
            gap: "8px",
          }}
        >
          <Button type="carted">
            <ShoppingCart size="16px" />
            Add to Cart
          </Button>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
function RelatedProducts({ RelatedProduct }) {
  return (
    <div
      style={{
        borderTop: "0.12px solid #5555",

        padding: "64px 0",
        textDecoration: "none",
      }}
    >
      <h2 style={{ marginBottom: "25px", fontSize: "30px", color: "#222" }}>
        Related Product
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {RelatedProduct.map((product) => (
          <Link to={`${product.id}`} style={{ textDecoration: "none" }}>
            <ProductCard product={product} key={product.id} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
