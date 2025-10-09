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
        <input type="text" id="#email" placeholder="your email..." required />
      </div>
      <div className={styles.label}>
        <label>Password</label>
        <input
          type="password"
          id="#email"
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

      <Button type="cta">Login</Button>
    </form>
  );
}
export default SignIn;
