import Button from "./Button";
import styles from "./SignIn.module.css";

import { Link, useNavigate } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "250px",
      }}
    >
      <div className={styles.label}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="your email..." required />
      </div>
      <div className={styles.label}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="your password..."
          required
        />
      </div>

      <a
        href="#"
        style={{
          textAlign: "left",
          padding: "0px",
          fontSize: "14px",
          color: "#58a6f3ff",
          fontWeight: "400",
        }}
      >
        Forget password ?
      </a>

      <Button
        type="cta"
        onClick={() => {
          navigate("/user");
        }}
      >
        Login
      </Button>
    </form>
  );
}
export default SignIn;
