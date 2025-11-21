import styles from "./CartItem.module.css";
import { Trash2 } from "lucide-react";
import Button from "./Button";
import { DollarSign } from "lucide-react";
import OrderSummary from "../features/cart/OrderSummary";
import { useProduct } from "../Contexts/ProductContext";
import EmptyCart from "../features/cart/EmptyCart";

function CartItems() {
  const { cartedProduct, dispatch } = useProduct();

  if (cartedProduct.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto flex max-w-[1000px] items-center justify-between gap-[60px] py-[30px]">
      {/* <div className={styles.shoping}> */}
      <div className={styles.items}>
        <h2 className="mb-[20px] text-4xl font-extrabold">Shopping Cart</h2>
        {cartedProduct.map((product) => (
          <CartItem
            img={product.image}
            name={product.name}
            desc={product.description}
            price={product.price}
            dispatch={dispatch}
            id={product.id}
            key={product.id}
            totalPrice={product.totalPrice}
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
  totalPrice,
}) {
  return (
    <div className="mb-[20px]">
      {/* <div className={styles.item}> */}
      <li className="grid border-spacing-7 grid-cols-[1fr_1fr] items-center justify-between gap-[10px] rounded-xl border-zinc-500 bg-white p-[8px]">
        {/* <li className={styles.itemList}> */}
        <span className="flex items-center justify-start gap-[20px]">
          {/* <span className={styles.imageContainer}> */}
          <img
            src={img}
            alt={name}
            className="h-[100px] w-[120px] shrink-0 rounded-2xl object-cover"
          />
          <span className="flex w-[200px] flex-col items-start justify-center gap-[8px]">
            {/* <span className={styles.content}> */}
            <h4 className="text-base text-neutral-700">{name}</h4>
            <p className="text-sm text-neutral-500">{desc}</p>
            <span className="flex items-center justify-between gap-[20px]">
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

        <span className="flex place-items-end items-center justify-between gap-[20px] justify-self-end p-[15px]">
          {/* <span className={styles.cartPrice}> */}
          <strong className="flex items-center justify-center font-extrabold text-blue-500">
            <DollarSign size="16px" strokeWidth={3} />

            {totalPrice ? totalPrice : price}
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
