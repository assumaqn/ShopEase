import { Store } from "lucide-react";
import { NavLink } from "react-router";
import homeLogo from "../assets/homeLogo.png";

function Logo() {
  return (
    <NavLink to="/">
      <img
        src={homeLogo}
        alt=""
        style={{
          maxWidth: "30%",
        }}
      />
    </NavLink>
  );
}

export default Logo;
