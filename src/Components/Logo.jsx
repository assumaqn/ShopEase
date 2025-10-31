import { Store } from "lucide-react";
import { Link } from "react-router";
import homeLogo from "../assets/homeLogo.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src={homeLogo} alt="logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
