import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, UserRound, ShoppingCart, X } from "lucide-react";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { useProduct } from "../Contexts/ProductContext";
export default function Navigation() {
  const { cartedProduct } = useProduct();
  const itemNo = cartedProduct.length;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <Logo />

      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? (
          <X size={24} color="#000" />
        ) : (
          <Menu size={24} color="#000" />
        )}
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" onClick={closeMenu}>
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" onClick={closeMenu}>
            <UserRound size="18px" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" onClick={closeMenu} className={styles.cart}>
            <ShoppingCart size="18px" />
            {itemNo > 0 && <span className={styles.badge}>{itemNo}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
