import styles from "./loader.module.css";

function Loader() {
  return (
    <div className={styles["dots-loader"]}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Loader;
