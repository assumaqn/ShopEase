import Button from "./Button";
import styles from "./SignIn.module.css";
function SignIn() {
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
        <label>Email</label>
        <input type="text" id="#email" placeholder="your email..." />
      </div>
      <div className={styles.label}>
        <label>Password</label>
        <input type="password" id="#email" placeholder="your password..." />
      </div>
      <Button type="cta">Login</Button>
    </form>
  );
}
export default SignIn;
