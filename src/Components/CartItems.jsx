import styles from "./CartItem.module.css";
import { Trash2 } from "lucide-react";
import Button from "../Components/Button";
import { DollarSign } from "lucide-react";
import OrderSummary from "./OrderSummary";
import { useProduct } from "../Contexts/ProductContext";
import EmptyCart from "./EmptyCart";

function CartItems() {
  const { cartedProduct, dispatch } = useProduct();

  if (cartedProduct.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className={styles.shoping}>
      <div className={styles.items}>
        <h2>Shopping Cart</h2>
        {cartedProduct.map((product) => (
          <CartItem
            img={product.image}
            name={product.name}
            desc={product.description}
            price={product.price}
            dispatch={dispatch}
            id={product.id}
            key={product.id}
          />
        ))}
      </div>
      <OrderSummary />
    </div>
  );
}

function CartItem({ img, name, desc, price, id, dispatch }) {
  return (
    <div className={styles.item}>
      <li className={styles.itemList}>
        <span className={styles.imageContainer}>
          <img src={img} alt={name} />
          <span className={styles.content}>
            <h4>{name}</h4>
            <p>{desc}</p>
            <span>
              <Button type="item-no">-</Button>
              <p style={{ color: "#222", fontWeight: "500" }}>1</p>
              <Button type="item-no">+</Button>
            </span>
          </span>
        </span>

        <span className={styles.cartPrice}>
          <strong>
            <DollarSign size="16px" strokeWidth={3} />

            {price}
          </strong>
          <span>
            <Trash2
              className={styles.icon}
              size="18px"
              color="#f3120aff"
              onClick={() => dispatch({ type: "cart/delete", payload: id })}
            />
          </span>
        </span>
      </li>
    </div>
  );
}

export default CartItems;
