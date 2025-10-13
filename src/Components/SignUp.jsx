import Button from "./Button";
import styles from "./SignUp.module.css";
function SignUp() {
  return (
    <form className={styles.form}>
      <div className={styles.label}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="your name..." required />
      </div>
      <div className={styles.label}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="your email..." required />
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
      <Button type="cta">Create Account</Button>
    </form>
  );
}
export default SignUp;
