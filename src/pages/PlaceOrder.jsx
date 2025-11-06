import { Loader, SearchCheck } from "lucide-react";
import styles from "./PlaceOrder.module.css";
import PageNav from "../Components/PageNav";
import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";

function PlaceOrder() {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 1500);
  }, []);
  return (
    <>
      <PageNav />
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={styles.orderMessage}>
          <div className={styles.orderPlaced}>
            <span>
              <SearchCheck size={110} strokeWidth={2} />
            </span>
            <h1>Order placed successfully!</h1>
            <p>You’ll get a confirmation soon.</p>
          </div>
        </section>
      )}
    </>
  );
}

export default PlaceOrder;
