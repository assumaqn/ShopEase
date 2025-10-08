import styles from "./OrderSummary.module.css";
import Button from "./Button";
import { DollarSign } from "lucide-react";
const centerIcon = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
function OrderSummary() {
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
            545
          </p>
          <p style={{ justifySelf: "flex-end" }}>free</p>
          <p style={centerIcon}>
            <DollarSign size="14px" /> 5454
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
            2548
          </span>
        </strong>
      </span>
      <Button type="cart-hidden">Proceed to Checkout</Button>
      <Button type="cart">Continue Shopping</Button>
    </div>
  );
}

export default OrderSummary;
