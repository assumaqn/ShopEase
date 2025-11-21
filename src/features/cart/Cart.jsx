import { useEffect, useState } from "react";
import CartItems from "../../ui/CartItems";
import PageNav from "../../ui/PageNav";
import Spinner from "../../ui/Spinner";
import styles from "./Cart.module.css";

function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <PageNav />
      <section className={styles.cartSection}>
        {isLoading ? <Spinner /> : <CartItems />}
      </section>
    </>
  );
}

export default Cart;
