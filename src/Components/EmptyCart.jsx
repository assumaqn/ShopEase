import { ShoppingBag } from "lucide-react";

function EmptyCart() {
  return (
    <section
      style={{
        display: "flex",
        paddingTop: "100px",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <span>
          <ShoppingBag size="75px" color="#555" />
        </span>
        <h3
          style={{
            textTransform: "capitalize",
            marginTop: "10px",
            color: "#555",
          }}
        >
          Your cart is empty right now.
        </h3>
        <p
          style={{
            textTransform: "capitalize",
            color: "#555",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          Browse products to add your favorites!
        </p>
      </div>
    </section>
  );
}

export default EmptyCart;
