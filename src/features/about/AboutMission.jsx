import styles from "./AboutMission.module.css";
function AboutMission() {
  return (
    <section
      className={`section section--hidden ${styles["section-mission"]} `}
      style={{
        padding: "90px 0",
      }}
    >
      <div className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          At ShopEase, we believe that everyone deserves access to cutting-edge
          technology without breaking the bank. Our mission is to bridge the gap
          between premium quality and affordability. <br />
          <br />
          We work directly with manufacturers and authorized distributors to cut
          out middlemen, passing the savings directly to you. Every product
          comes with our satisfaction guarantee and comprehensive warranty
          coverage.
        </p>
      </div>
    </section>
  );
}

export default AboutMission;
