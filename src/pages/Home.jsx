import styles from "./Home.module.css";
import PageNav from "../Components/PageNav";
import some from "../assets/herotech.jpg";
import HeroContent from "../Components/HeroContent";
import HeroImageContainer from "../Components/HeroImageContainer";
import Featured from "../Components/featured";
import FeaturedProducts from "../Components/FeaturedProducts";
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
        <FeaturedProducts />

        <Featured />
      </main>
    </>
  );
}

export default Home;
