import styles from "./OrderSummary.module.css";
import Button from "./Button";
import { Link } from "react-router";
import { DollarSign } from "lucide-react";
import { useProduct } from "../Contexts/ProductContext";
const centerIcon = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
function OrderSummary() {
  const { subTotal, tax, total, shipping } = useProduct();
  return (
    <div className={styles.summary}>
      <h3>Order Summary</h3>
      <hr></hr>
      <div className={styles.detail}>
        <span style={{ fontSize: "14px", color: "#555" }}>
          <p>Subtotal</p>
          <p>Shipping</p>
          <p>Tax</p>
        </span>
        <span style={{ fontSize: "14px", color: "#000", fontWeight: "bolder" }}>
          <p style={centerIcon}>
            <DollarSign size="14px" />
            {subTotal.toLocaleString("en-US")}
          </p>

          {shipping === 0 ? (
            <p style={{ justifySelf: "flex-end" }}>
              {shipping === 0 && "free"}
            </p>
          ) : (
            <p style={centerIcon}>
              <DollarSign size="14px" /> {shipping.toLocaleString("en-US")}
            </p>
          )}

          <p style={centerIcon}>
            <DollarSign size="14px" /> {tax.toLocaleString("en-US")}
          </p>
        </span>
      </div>
      <hr></hr>
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>Total</h4>
        <strong>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#3482cfff",
              fontSize: "20px",
            }}
          >
            <DollarSign size="16px" strokeWidth={3} color="#3482cfff" />
            {total.toLocaleString("en-US")}
          </span>
        </strong>
      </span>
      <Button type="cart-hidden">
        <Link to="checkout" style={{ textDecoration: "none", color: "#fff" }}>
          Proceed to Checkout
        </Link>
      </Button>
      <Button type="cart">Continue Shopping</Button>
    </div>
  );
}

export default OrderSummary;
