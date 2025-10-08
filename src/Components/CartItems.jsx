import styles from "./CartItem.module.css";
import { Trash2 } from "lucide-react";
import Button from "../Components/Button";
import { DollarSign } from "lucide-react";
const products = [
  {
    id: 1,
    name: "MacBook Pro M3",
    category: "Laptops",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    description: "14-inch, M3 chip, 16GB RAM",
    stock: 15,
    rating: 4.9,
  },

  {
    id: 13,
    name: "Bose QC Ultra",
    category: "Audio",
    price: 429,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80",
    description: "Spatial audio, premium comfort",
    stock: 18,
    rating: 4.6,
  },
  {
    id: 49,
    name: "iPhone 14 Pro",
    category: "iPhone",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1695578130348-a0b3a22edd6d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Dynamic Island,A16 Bionic.",
    stock: 18,
    rating: 4.8,
  },
];

function CartItems() {
  return (
    <div className={styles.items}>
      <h2>Shopping Cart</h2>
      {products.map((product) => (
        <CartItem
          img={product.image}
          name={product.name}
          desc={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}

function CartItem({ img, name, desc, price }) {
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
              <p>1</p>
              <Button type="item-no">+</Button>
            </span>
          </span>
        </span>

        <span className={styles.cartPrice}>
          <strong
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "900",
              color: "#0353a4bd",
            }}
          >
            <DollarSign size="16px" strokeWidth={3} />

            {price}
          </strong>
          <icon>
            <Trash2 size="18px" color="#f3120aff" />
          </icon>
        </span>
      </li>
    </div>
  );
}

export default CartItems;
