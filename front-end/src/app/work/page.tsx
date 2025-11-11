import Image from "next/image";
import LinksContainer from "@/components/linksRow/LinksContainer";
import styles from "./page.module.css";
import LinkRow from "@/components/linksRow/LinkRow";
import { FolderOpenIcon, IdCardIcon, SendIcon } from "@/components/Icons";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Certifications from "./Certifications";

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
          Hello Visitor, I am
          <span className={styles.para_highlight}> Kushagra Agnihotri </span>
          from
          <span className={styles.para_highlight}> Lucknow, India</span>. <br />
          Someone who loves Developing Applications. I make Full-stack,
          Front-end, Back-end, and UI/UX Designs. I have a passion for
          <span className={styles.para_highlight}> Learning </span>and
          <span className={styles.para_highlight}> Helping</span>. Solving
          problems is my main goal. Developing
          <span className={styles.para_highlight}> Applications </span>
          that help someone keeps me going. I use my
          <span className={styles.para_highlight}> Creative </span>side to
          design and my<span className={styles.para_highlight}> Logical </span>
          side to code.
        </p>
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
          title="Want to add your name to the list?"
          link="/work"
        />
        <LinkRow
          button="My Resume"
          icon={<IdCardIcon />}
          subTitle="Are you HR?"
          title="A Compressed Resume for you"
          link="/resume/full.pdf"
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
        <Skills />
      </section>
    </div>
  );
}
