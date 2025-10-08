import { NavLink, Outlet } from "react-router";
import PageNav from "../Components/PageNav";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <>
      <PageNav />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "60px 0",
          background: "#f5f5f5a9",
        }}
      >
        <div
          className={styles["cta-container"]}
          style={{ padding: "50px 15px" }}
        >
          <h2>Welcome to ShopEase</h2>
          <p>Sign in to your account</p>
          <span>
            <NavLink to="signin">Login</NavLink>
            <NavLink to="signup">SignUp</NavLink>
          </span>
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Profile;
