import phone from "../assets/phone.jpeg";
import styles from "./HeroImageContainer.module.css";
function HeroImageContainer() {
  return (
    <div className={styles["image-container"]} style={{}}>
      <img src={phone} alt="is hero image" style={{ maxWidth: "90%" }} />
    </div>
  );
}
export default HeroImageContainer;
