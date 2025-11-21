import { CreditCard, DollarSign, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import PageNav from "../../ui/PageNav";
import Spinner from "../../ui/Spinner";
import styles from "./CheckOut.module.css";
import { useProduct } from "../../Contexts/ProductContext";
import { Link } from "react-router";

const centerIcon = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
function CheckOut() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      <PageNav />
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={styles.section}>
          <div className={styles["checkOut"]}>
            <CheckoutDetail />
            <OrderSummaryInfo />
          </div>
        </section>
      )}
    </>
  );
}
///flex-1
function CheckoutDetail() {
  return (
    <div className={styles["checkOut-detail"]}>
      <h2>CheckOut</h2>
      <ShippingInfo />
      <PaymentInfo />
    </div>
  );
}

//flex-col-1
function ShippingInfo() {
  return (
    <div className={styles["shipping-info"]}>
      <h3>
        <Truck color="#0572df" />
        Shipping information
      </h3>
      <form>
        <div className={styles["form-el"]}>
          <div className={styles["col_1"]}>
            <span>
              <label>First Name</label>
              <input type="text" required />
            </span>
            <span>
              <label>Last Name</label>
              <input type="text" required />
            </span>
          </div>
        </div>

        <div className={styles["form-el"]}>
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className={styles["form-el"]}>
          <label>Address</label>
          <input type="text" required />
        </div>
        <div className={styles["form-el"]}>
          <div className={styles["col_1"]}>
            <span className={styles.special}>
              <label>City</label>
              <input type="text" required />
            </span>
            <span>
              <label>Zip Code</label>
              <input type="text" required />
            </span>
          </div>
        </div>
        <div className={styles["form-el"]}></div>
      </form>
    </div>
  );
}
//flex-col-2
function PaymentInfo() {
  const { total } = useProduct();

  return (
    <div className={styles["payment-info"]}>
      <h3>
        <CreditCard color="#0572df" /> Payment information
      </h3>
      <form>
        <div className={styles["form-el"]}>
          <label>Cardholder Name</label>
          <input type="text" required />
        </div>
        <div className={styles["form-el"]}>
          <label>Card Number</label>
          <input type="password" placeholder="1234 5678 9012 3456" required />
        </div>
        <div className={styles["form-el"]}>
          <div className={styles["col_1"]}>
            <span>
              <label>Expiry Date</label>
              <input type="date" />
            </span>
            <span>
              <label>CVV</label>
              <input type="password" placeholder="123" required />
            </span>
          </div>
        </div>
        <div className={styles["form-el"]}></div>
      </form>
      <Button type="checkout">
        <Link to="PlaceOrder">
          <p style={centerIcon}>
            Place Order
            <DollarSign size="14px" strokeWidth="3px" />
            {total === 0 ? "" : total}
          </p>
        </Link>
      </Button>
    </div>
  );
}

/////flex-2

function OrderSummaryInfo() {
  const { subTotal, tax, total, shipping, cartedProduct } = useProduct();
  function shortenName(name, maxLength) {
    if (name.length <= maxLength) return name;
    return name.slice(0, name.lastIndexOf(" ", maxLength)) + "...";
  }
  return (
    <div className={styles.summary}>
      <h3>Order Summary</h3>
      <hr></hr>
      <div className={styles.detail}>
        <span style={{ fontSize: "14px", color: "#555" }}>
          {cartedProduct.map((item) => (
            <p>{shortenName(item.name, 20)}</p>
          ))}
        </span>
        <span style={{ fontSize: "14px", color: "#000", fontWeight: "bolder" }}>
          {cartedProduct.map((item) => (
            <p style={centerIcon}>
              <DollarSign size="14px" />
              {item.price}
            </p>
          ))}
        </span>
      </div>
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
            {subTotal}
          </p>
          <p style={{ justifySelf: "flex-end" }}>{shipping === 0 && "free"}</p>
          <p style={centerIcon}>
            <DollarSign size="14px" /> {Math.round(tax).toLocaleString("en-US")}
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
            {total}
          </span>
        </strong>
      </span>
    </div>
  );
}

export default CheckOut;
