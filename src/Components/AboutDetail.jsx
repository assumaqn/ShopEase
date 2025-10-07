function AboutDetail() {
  return (
    <section
      style={{
        backgroundColor: " #e7edf381",
        padding: "70px 0",
        borderTop: " 0.3px solid #3333",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <strong
        style={{ fontSize: "30px", fontWeight: "800", color: "#0867c7ff" }}
      >
        {stat}
      </strong>
      <p style={{ fontSize: "16px", color: "#555" }}>{desc}</p>
    </div>
  );
}
export default AboutDetail;
