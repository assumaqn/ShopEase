import styles from "./Home.module.css";
import PageNav from "../../ui/PageNav";
import HeroContent from "./HeroContent";
import HeroImageContainer from "./HeroImageContainer";
import Featured from "./featured";
import FeaturedProducts from "./FeaturedProducts";
import { useEffect } from "react";
import { sectionObserv } from "../../Hooks/Observer";

function Home() {
  useEffect(() => {
    sectionObserv();
  }, []);

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
