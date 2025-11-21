import styles from "./featured.module.css";
import { Truck, ShieldCheck, RotateCcw } from "lucide-react";

function Featured() {
  return (
    <section className={`section  section--hidden ${styles.featuredSection} `}>
      <div className={styles.features}>
        <div className={styles.feature}>
          <span>
            <Truck size="22px" color=" #fff" />
          </span>
          <h4>Free Shipping</h4>
          <p>On orders over $1000</p>
        </div>
        <div className={styles.feature}>
          <span>
            {" "}
            <ShieldCheck size="22px" color=" #fff" />
          </span>
          <h4>Secure Payment</h4>
          <p>100% secure transactions</p>
        </div>
        <div className={styles.feature}>
          <span>
            {" "}
            <RotateCcw size="22px" color=" #fff" />
          </span>
          <h4>Easy Returns</h4>
          <p>30-day return policy</p>
        </div>
      </div>
    </section>
  );
}

export default Featured;
