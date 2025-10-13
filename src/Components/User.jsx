import { LogOut } from "lucide-react";
import styles from "./User.module.css";
import Button from "./Button";
import PageNav from "./PageNav";
function User() {
  return (
    <>
      <PageNav />

      <section className={styles["user-section"]}>
        <UserInfo />
      </section>
    </>
  );
}

function UserInfo() {
  return (
    <div className={styles["user-container"]}>
      <div className={styles["user-header"]} style={{}}>
        <div>
          <h2>User Name</h2>
          <p>User@gmail.com</p>
        </div>

        <Button type="log-out">
          <LogOut size="18px" />
          <p>Logout</p>
        </Button>
      </div>
      <hr className={styles.hr}></hr>
      <div className={styles["acc-detail"]}>
        <h3>Account Details</h3>
        <form action="">
          <div className={styles["form-el"]}>
            <label>Name</label>
            <input type="text" placeholder="Demo User" disabled />
          </div>
          <div className={styles["form-el"]}>
            <label>Email</label>
            <input type="number" placeholder="User@gmail.com" disabled />
          </div>
          <div className={styles["form-el"]}>
            <label>Member Since</label>
            <input type="number" placeholder="December 2020" disabled />
          </div>
        </form>
      </div>
      <hr className={styles.hr}></hr>
      <div className={styles["order-history"]}>
        <h3>Order History</h3>
        <p>You haven't place order yet</p>
      </div>
    </div>
  );
}

export default User;
