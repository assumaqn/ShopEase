import { NavLink } from "react-router";
import { UserRound, ShoppingCart } from "lucide-react";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
function PageNav() {
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
            <span
              style={{
                position: "absolute",

                padding: "8px",
                clipPath: "circle()",
                transform: "translateY(-50%)",
                animation: " blink 1.5s infinite",
              }}
            >
              1
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
