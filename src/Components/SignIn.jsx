import Button from "./Button";
import styles from "./SignIn.module.css";

import { useNavigate } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();
  return (
    <form className={styles.form}>
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

      <a href="#" className={styles.link}>
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
