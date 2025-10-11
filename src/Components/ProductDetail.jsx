import { useParams } from "react-router";
import styles from "./ProductDetail.module.css";
import StarRating from "./StarRating";
import ProductCard from "./ProductCard";
import Button from "./Button";
import {
  DollarSign,
  ShoppingCart,
  RotateCcw,
  Truck,
  Shield,
} from "lucide-react";

const RelatedProduct = [
  {
    id: 70,
    name: "Withings ScanWatch Horizon",
    category: "Wearables",
    price: 499,
    image:
      "https://i.pinimg.com/1200x/e8/45/43/e8454360d2c9f1c34f1222d8801b5870.jpg",
    description:
      "Hybrid smartwatch with medical-grade ECG, oxygen sensor, and diving design.",
    stock: 20,
    rating: 4.7,
    onSale: false,
  },
  {
    id: 27,
    name: "OnePlus 12",
    category: "Smartphones",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1636376138385-b41caa8e0ae0?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fast charging, Snapdragon 8 Gen 3",
    stock: 22,
    rating: 4.5,
    onSale: false,
  },
  {
    id: 53,
    name: "Realme Pad 2",
    category: "Tablets",
    price: 329,
    image:
      "https://i.pinimg.com/1200x/bf/8a/dc/bf8adc44514bfcdbe791db7bc7b83a94.jpg",
    description: "Affordable tablet with 2K display.",
    stock: 38,
    rating: 4.7,
    onSale: false,
  },
];
const product = {
  id: 73,
  name: "Noise ColorFit Pro 5",
  category: "Wearables",
  price: 12179,
  image:
    "https://i.pinimg.com/736x/87/29/18/8729189e3623a1bdf0f17622972527ae.jpg",
  description:
    "Affordable smartwatch with large display, health tracking, and Bluetooth calling.",
  stock: 80,
  rating: 4.8,
  onSale: true,
  originalPrice: 1399,
};

function ProductDetail() {
  return (
    <section
      className={styles.productDetail}
      style={{ display: "flex", flexDirection: "column", gap: "50px" }}
    >
      <DetailProduct />
      <RelatedProducts />
    </section>
  );
}
function DetailProduct() {
  const { id } = useParams();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        // gap: "50px",
      }}
    >
      <div className={styles.img}>
        <img src={product.image} alt={product.name} />
      </div>
      <div
        className="all conte"
        style={{
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
              width: "15%",
              fontSize: "12px",
            }}
          >
            {product.category}
          </span>
          <h2 style={{ fontSize: "30px", fontWeight: "600px", color: "#222" }}>
            {product.name}
          </h2>
          <p
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
            <span>{product.rating} (2854) </span>
          </p>
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

            width: "100%",
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
function RelatedProducts() {
  return (
    <div style={{ borderTop: "0.12px solid #5555", padding: "64px 0" }}>
      <h2 style={{ marginBottom: "25px", fontSize: "30px" }}>
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
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
