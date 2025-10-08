import CartItems from "../Components/CartItems";
import PageNav from "../Components/PageNav";
import styles from "./Cart.module.css";

function Cart() {
  return (
    <>
      <PageNav />
      <section className={styles.cartSection}>
        <CartItems />
      </section>
    </>
  );
}

export default Cart;
