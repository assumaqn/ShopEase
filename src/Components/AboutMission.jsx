function AboutMission() {
  return (
    <section
      className="mession"
      style={{
        padding: "90px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "700px",
          margin: "0 auto",
          gap: "20px",
        }}
      >
        <h2 style={{ fontSize: "30px", fontWeight: "800" }}>Our Mission</h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "17px",
            lineHeight: "1.6",
            color: "#555",
          }}
        >
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
