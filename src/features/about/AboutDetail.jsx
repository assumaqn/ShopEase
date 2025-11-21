import styles from "./AboutDetail.module.css";

function AboutDetail() {
  return (
    <section
      className="section section--hidden"
      style={{
        backgroundColor: " #e7edf381",
        padding: "70px 0",
        borderTop: " 0.3px solid #3333",
        borderBottom: " 0.3px solid #3333",
      }}
    >
      <div className={styles.details}>
        <Detail stat="500+" desc="Premium Products" />
        <Detail stat="50K+" desc="Happy Customers" />
        <Detail stat="4.8★" desc="Average Rating" />
        <Detail stat="24/7" desc="Customer Support" />
      </div>
    </section>
  );
}

function Detail({ stat, desc }) {
  return (
    <div className={styles.detail}>
      <strong>{stat}</strong>
      <p>{desc}</p>
    </div>
  );
}
export default AboutDetail;
