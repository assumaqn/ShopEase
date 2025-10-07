import { Store } from "lucide-react";
import { NavLink } from "react-router";

function Logo() {
  return (
    <NavLink
      to="/"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        color: "#024283",
        fontSize: "22px",
        fontWeight: "800",
      }}
    >
      <Store size="30px" color="#024283" />
      <strong>ShopeEase</strong>
    </NavLink>
  );
}

export default Logo;
