import styles from "./Home.module.css";
import PageNav from "../Components/PageNav";
import some from "../assets/herotech.jpg";
import HeroContent from "../Components/HeroContent";
import HeroImageContainer from "../Components/HeroImageContainer";
import Featured from "../Components/featured";
function Home() {
  return (
    <>
      <header className={styles.header}>
        <PageNav />
        <div className={styles.hero}>
          <HeroContent />
          <HeroImageContainer />
        </div>
      </header>
      <main>
        <section style={{ padding: "0 300px" }}>
          <img src={some} alt="" style={{ maxWidth: "100%" }} />
        </section>
        <Featured />
      </main>
    </>
  );
}

export default Home;
