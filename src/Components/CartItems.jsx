import styles from "./CartItem.module.css";
import { Trash2 } from "lucide-react";
import Button from "../Components/Button";
import { DollarSign } from "lucide-react";
import OrderSummary from "./OrderSummary";
import { useProduct } from "../Contexts/ProductContext";
import EmptyCart from "./EmptyCart";

function CartItems() {
  const { cartedProduct, dispatch, quantity } = useProduct();
  console.log(cartedProduct);
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
            quantity={product.quantity}
          />
        ))}
      </div>
      <OrderSummary />
    </div>
  );
}

function CartItem({
  img,
  name,
  desc,
  price,
  id,
  dispatch,
  quantity,
  // totalItemPrice,
}) {
  return (
    <div className={styles.item}>
      <li className={styles.itemList}>
        <span className={styles.imageContainer}>
          <img src={img} alt={name} />
          <span className={styles.content}>
            <h4>{name}</h4>
            <p>{desc}</p>
            <span>
              <Button
                type="item-no"
                onClick={() => dispatch({ type: "item/decrease", payload: id })}
              >
                -
              </Button>
              <p style={{ color: "#222", fontWeight: "500" }}>{quantity}</p>
              <Button
                type="item-no"
                onClick={() => dispatch({ type: "item/increase", payload: id })}
              >
                +
              </Button>
            </span>
          </span>
        </span>

        <span className={styles.cartPrice}>
          <strong>
            <DollarSign size="16px" strokeWidth={3} />

            {price}
          </strong>
          <span className={styles.trash}>
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
