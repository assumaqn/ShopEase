import AboutDetail from "../Components/AboutDetail";
import AboutValues from "../Components/AboutValues";
import PageNav from "../Components/PageNav";
import aboutHero from "../assets/aboutHero.jpg";
import styles from "./About.module.css";
function About() {
  return (
    <>
      <PageNav />
      <section className={styles.section}>
        <div className={styles["about-content"]}>
          <AboutContent />
          <AboutImage />
        </div>
      </section>
      <AboutValues />
      <AboutDetail />
    </>
  );
}

function AboutContent() {
  return (
    <div className={styles.aboutDetail}>
      <h1>
        About <span>ShopEase</span>
      </h1>
      <p>
        We're on a mission to make premium technology accessible to everyone.
        Since 2020, ShopEase has been the trusted destination for tech
        enthusiasts seeking quality products at competitive prices.
        <br />
        <br /> With over 50,000 satisfied customers and a 4.8-star rating, we've
        built our reputation on exceptional service, authentic products, and
        unbeatable deals.
      </p>
    </div>
  );
}
function AboutImage() {
  return (
    <img
      src={aboutHero}
      alt="aboutHero"
      style={{ maxWidth: "50%", borderRadius: "9px" }}
    />
  );
}
export default About;
