import { useEffect } from "react";
import { useProduct } from "../Contexts/ProductContext";
import ProductCard from "./ProductCard";
import { Flame } from "lucide-react";

function FeaturedProducts() {
  const { fetchProduct, products } = useProduct();

  useEffect(() => {
    fetchProduct();
  }, []);
  const featureProduct = products.filter((product) =>
    product.category.includes("iPhone")
  );

  return (
    <section
      className="section section--hidden"
      style={{
        backgroundColor: " #f1f3f579",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        padding: "60px 0",
      }}
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
      <div
        className="products"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",

          padding: "20px 50px",
        }}
      >
        {featureProduct.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
