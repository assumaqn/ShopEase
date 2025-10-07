import Button from "./Button";
import styles from "./SignUp.module.css";
function SignUp() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <div className={styles.label}>
        <label>Full Name</label>
        <input type="text" id="#email" placeholder="your name..." />
      </div>
      <div className={styles.label}>
        <label>Email</label>
        <input type="email" id="#email" placeholder="your email..." />
      </div>
      <div className={styles.label}>
        <label>Password</label>
        <input type="password" id="#email" placeholder="your password..." />
      </div>
      <Button>Create Account</Button>
    </form>
  );
}
export default SignUp;
