import styles from "./ProductDetail.module.css";
function ProductDetail() {
  return (
    <section
      className={styles.productDetail}
      style={{ display: "flex", flexDirection: "column", gap: "25px" }}
    >
      <DetailProduct />
      <RelatedProduct />
    </section>
  );
}
function DetailProduct() {
  return <div>Product Detail</div>;
}
function RelatedProduct() {
  return <div>Related Product</div>;
}

export default ProductDetail;
