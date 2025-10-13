import { NavLink } from "react-router";
import { UserRound, ShoppingCart } from "lucide-react";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useProduct } from "../Contexts/ProductContext";
function PageNav() {
  const { cartedProduct } = useProduct();
  const itemNo = cartedProduct.length;
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <UserRound size="18px" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <ShoppingCart size="18px" style={{ position: "relative" }} />

            {!itemNo == 0 ? (
              <span
                style={{
                  position: "absolute",
                  fontSize: "8px",
                  padding: "7px",
                  clipPath: "circle()",
                  transform: "translateY(-50%)",
                  animation: " blink 1.5s infinite",
                }}
              >
                {itemNo === 0 ? null : itemNo}
              </span>
            ) : null}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
