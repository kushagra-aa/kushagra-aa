import Socials from "@/components/Socials";
import styles from "./page.module.css";

function LinksPage() {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <p className={styles.sub}>
          Are you <span>Lost?</span>
        </p>
        <p className={styles.sub_sub}>Do you Want to</p>
        <h1>Contact Me</h1>
      </div>
      <section>
        <h2>Let&apos;s Connect</h2>
        <Socials className={styles.socials} />
      </section>
    </div>
  );
}

export default LinksPage;
