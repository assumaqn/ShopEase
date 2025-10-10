import { Store } from "lucide-react";
import { Link } from "react-router";
import homeLogo from "../assets/homeLogo.png";

function Logo() {
  return (
    <Link to="/">
      <img
        src={homeLogo}
        alt=""
        style={{
          maxWidth: "30%",
        }}
      />
    </Link>
  );
}

export default Logo;
