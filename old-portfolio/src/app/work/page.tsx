import Image from "next/image";
import LinksContainer from "@/components/linksRow/LinksContainer";
import styles from "./page.module.css";
import LinkRow from "@/components/linksRow/LinkRow";
import { FolderOpenIcon, IdCardIcon, SendIcon } from "@/components/Icons";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Builds from "./Builds";

export default function Work() {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <p className={styles.sub}>
          What can I do
          <span>?</span>
        </p>
        <h1>Professional Info</h1>
      </div>
      <section className={styles.info}>
        <div className={styles.info_ill}>
          <div>
            <Image src="/me-professional.png" alt="myself" fill sizes="100%" />
          </div>
        </div>
        <p className={styles.info_para}>
          I am
          <span className={styles.para_highlight}> Kushagra Agnihotri </span> —
          a
          <span className={styles.para_highlight}>
            {" "}
            Senior Full-Stack Engineer
          </span>
          . <br />I design and ship production-grade web applications, backend
          services, and developer tooling using modern frameworks like React,
          Node.js, and TypeScript. I&apos;ve worked with startups and growth
          teams to{" "}
          <span className={styles.para_highlight_md}>
            {" "}
            build real systems from concept to production
          </span>{" "}
          — including dashboards, APIs, integrations, and developer extensions.
        </p>
      </section>
      <section className={styles.exp}>
        <p className={styles.sub_2}>Bullet Points!</p>
        <h2>What I build</h2>
        <Builds />
      </section>
      <section className={styles.exp}>
        <p className={styles.sub_2}>History!</p>
        <h2>My Experiences</h2>
        <Experiences />
      </section>
      <section className={styles.exp}>
        <p className={styles.sub_2}>Powers I possess!</p>
        <h2>Certifications</h2>
        <Certifications />
      </section>
      <LinksContainer>
        <LinkRow
          button="Let's Connect"
          icon={<SendIcon />}
          subTitle="Impressed Yet?"
          title="Want to build something together?"
          link="/work"
        />
        <LinkRow
          button="My Resume"
          icon={<IdCardIcon />}
          subTitle="Are you Recruiting?"
          title="A Compressed Resume for you"
          link="/resume/one.pdf"
          target="_blank"
        />
        <LinkRow
          button="My Portfolio"
          icon={<FolderOpenIcon />}
          subTitle="Do you believe in Action?"
          title="Here's the list of my Projects"
          link="/portfolio"
        />
      </LinksContainer>
      <section className={styles.skills}>
        <p className={styles.sub_2}>Want some Action?</p>
        <h2>My Arsenal</h2>
        <p className={styles.para}>
          I care deeply about code quality, system reliability, and building
          things that are easy to reason about six months later.
        </p>
        <Skills />
      </section>
    </div>
  );
}
