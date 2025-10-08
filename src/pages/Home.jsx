import styles from "./Home.module.css";
import PageNav from "../Components/PageNav";
import HeroContent from "../Components/HeroContent";
import HeroImageContainer from "../Components/HeroImageContainer";
import Featured from "../Components/featured";
import FeaturedProducts from "../Components/FeaturedProducts";
import { useEffect } from "react";
import { sectionObserv } from "../Hooks/Observer";
import Modal from "../Components/Modal";
function Home() {
  useEffect(() => {
    sectionObserv();
  }, []);

  return (
    <>
      <Modal />
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
