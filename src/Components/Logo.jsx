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
        fontSize: "20px",
      }}
    >
      <Store size="24px" />
      <strong>ShopeEase</strong>
    </NavLink>
  );
}

export default Logo;
