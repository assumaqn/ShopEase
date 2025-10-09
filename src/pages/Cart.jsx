import { useEffect, useState } from "react";
import CartItems from "../Components/CartItems";
import PageNav from "../Components/PageNav";
import Spinner from "../Components/Spinner";
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
