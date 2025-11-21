import { useEffect, useState } from "react";
import CartItems from "../../ui/CartItems";
import PageNav from "../../ui/PageNav";
import Spinner from "../../ui/Spinner";

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
      <section className="h-screen overflow-x-hidden bg-zinc-100 py-[30px]">
        {/* <section className={styles.cartSection}> */}
        {isLoading ? <Spinner /> : <CartItems />}
      </section>
    </>
  );
}

export default Cart;
