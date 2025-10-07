import styles from "./Bit.module.css";
function Bit({ children, type }) {
  return (
    <div>
      <input
        type="text"
        placeholder={`${children}`}
        disabled
        className={`${styles.input} ${styles[type]}`}
      />
    </div>
  );
}

export default Bit;
