import { useEffect } from "react";
import AboutDetail from "./AboutDetail";
import AboutMission from "./AboutMission";
import AboutValues from "./AboutValues";
import PageNav from "../../ui/PageNav";
import aboutHero from "../../assets/aboutHero.jpg";
import styles from "./About.module.css";
import { sectionObserv } from "../../Hooks/Observer";

function About() {
  useEffect(() => {
    sectionObserv();
  }, []);

  return (
    <>
      <PageNav />
      <section className="bg-zinc-100">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-[30px] py-[70px] sm:flex-row">
          <AboutContent />
          <AboutImage />
        </div>
      </section>
      <AboutValues />
      <AboutDetail />
      <AboutMission />
    </>
  );
}

function AboutContent() {
  return (
    <div className={styles.aboutDetail}>
      <h1>
        About <span>ShopEase</span>
      </h1>
      <p className="text-lg text-stone-600">
        We're on a mission to make premium technology accessible to everyone.
        Since 2025, ShopEase has been the trusted destination for tech
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
      className="max-w-[95%] rounded-lg sm:max-w-[50%]"
      src={aboutHero}
      alt="aboutHero"
    />
  );
}
export default About;
