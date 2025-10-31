import styles from "./AboutValues.module.css";
import { UsersRound, ShieldCheck, Heart, Zap } from "lucide-react";
function AboutValues() {
  return (
    <section className={`section section--hidden ${styles.sectionValues}`}>
      <h2>Our Core Values</h2>
      <div className={styles.values}>
        <Value
          type="odd"
          icon={<UsersRound size="28px" />}
          header="Customer First"
          desc="Your satisfaction is our top priority. We go above and beyond to ensure every customer has an exceptional experience."
        />
        <Value
          type="even"
          icon={<ShieldCheck size="28px" />}
          header="Quality Products"
          desc="We carefully curate our selection to bring you only authentic, high-quality products from trusted brand"
        />
        <Value
          type="odd"
          icon={<Zap size="28px" />}
          header="Innovation"
          desc="We stay ahead of the curve, constantly updating our inventory with the latest tech innovations and trends."
        />

        <Value
          type="even"
          icon={<Heart size="28px" />}
          header="Community"
          desc="We're building more than a store—we're creating a community of tech lovers who share our passion."
        />
      </div>
    </section>
  );
}

function Value({ icon, header, desc, type }) {
  return (
    <div className={`${styles.value} ${styles[type]}`}>
      <span>{icon}</span>
      <h3>{header}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default AboutValues;
