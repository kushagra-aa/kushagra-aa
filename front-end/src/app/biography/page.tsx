import Link from "next/link";
import Button from "@/components/UI/button/Button";
import styles from "./page.module.css";
import { CodeIcon, FolderOpenIcon, IdCardIcon } from "@/components/Icons";

function LinkRow({
  button,
  icon,
  subTitle,
  title,
  link,
}: {
  subTitle: string;
  title: string;
  link: string;
  button: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={styles.link_row}>
      <p className={styles.link_sub}>{subTitle}</p>
      <p className={styles.link_title}>{title}</p>
      <div className={styles.link_arrow}>
        <span>
          <i id="line" />
          <i id="arrow" />
        </span>
      </div>
      <Button
        className={styles.link_button}
        size="medium"
        type="link"
        theme="theme-2"
      >
        <Link href={link}>
          {button}
          {icon}
        </Link>
      </Button>
    </div>
  );
}

function LinksContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.links_container}>{children}</div>;
}

export default function Biography() {
  return (
    <div className={styles.main}>
      <h1>Who Am I?</h1>
      <div className={styles.story}>
        <div className={styles.story_container}>
          <p className={styles.story_sub}>As Anansi says</p>
          <p className={styles.story_head}>Let me tell you a story!</p>
          <p className={styles.story_para}>
            Once upon a time, there was a
            <span className={styles.story_highlight}> boy </span>, a very
            <span className={styles.story_highlight}> curious </span>
            one. He saw a piece of tech that was used to
            <span className={styles.story_highlight}>
              play games, watch movies,{" "}
            </span>
            and
            <span className={styles.story_highlight}> listen to songs</span>. He
            was amazed by the endless possibilities of a
            <span className={styles.story_highlight}> Computer</span>
            . <br />
            Some time passed, In school they taught him to make a page that can
            be viewed in a
            <span className={styles.story_highlight}> Web Browser</span>.
            Curiosity struck and he linked a bunch of pages together and made
            his
            <span className={styles.story_highlight}> First Website</span>.
            After some years, the
            <span className={styles.story_highlight}> Internet </span>
            emerged and from there he spread his wings. That boy was
            <span className={styles.story_highlight}> Me</span>
            , obviously. <br />
            <span className={styles.story_highlight}> C++ </span>
            was my first, and we have a very special connection.
            <span className={styles.story_highlight}> JavaScript </span>
            has my Heart but
            <span className={styles.story_highlight}> Typescript </span>
            and
            <span className={styles.story_highlight}> Python </span>
            are also lovely. I make
            <span className={styles.story_highlight}> Web Applications </span>
            and I love that. Now I am trying to branch out and learn
            <span className={styles.story_highlight}> Mobile Applications</span>
            . That&apos;s why at the moment I&apos;m focusing on learning
            <span className={styles.story_highlight}> Flutter </span>.
          </p>
        </div>
        <div className={styles.story_ill} />
      </div>
      <div className={styles.hobbies}>
        <h2>My Hobbies</h2>
        <ul>
          <li>photoshop</li>
          <li>reading</li>
          <li>illustrator</li>
          <li>premier pro</li>
          <li>music</li>
          <li>gaming</li>
        </ul>
      </div>
      <LinksContainer>
        <LinkRow
          button="Work Info"
          icon={<CodeIcon />}
          subTitle="Here for Professional Reasons?"
          title="Let's see my Professional Info"
          link="/work"
        />
        <LinkRow
          button="My Resume"
          icon={<IdCardIcon />}
          subTitle="Are you HR?"
          title="A Compressed Resume for you"
          link="/resume"
        />
        <LinkRow
          button="My Portfolio"
          icon={<FolderOpenIcon />}
          subTitle="Do you believe in Action?"
          title="Here's the list of my Projects"
          link="/portfolio"
        />
      </LinksContainer>
    </div>
  );
}
