import phone from "../assets/phone.jpeg";
function HeroImageContainer() {
  return (
    <div
      className="image-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100%",
        paddingLeft: "70px",
      }}
    >
      <img src={phone} alt="is hero image" style={{ maxWidth: "90%" }} />
    </div>
  );
}
export default HeroImageContainer;
