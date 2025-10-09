const style = {
  border: "6px solid #f3f3f3",
  borderTop: "6px solid #024283",
  borderRadius: "50%",
  color: "#000",
  width: "50px",
  height: "50px",
  animation: "spin 1s linear infinite",
  margin: "50px auto",
};

function Spinner() {
  return <div style={style}></div>;
}

export default Spinner;
