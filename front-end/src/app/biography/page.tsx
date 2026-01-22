import Image from "next/image";
import styles from "./page.module.css";
import { CodeIcon, FolderOpenIcon, IdCardIcon } from "@/components/Icons";
import LinksContainer from "@/components/linksRow/LinksContainer";
import LinkRow from "@/components/linksRow/LinkRow";
import Hobbies from "./Hobbies";

export default function Biography() {
  return (
    <div className={styles.main}>
      <h1>Who Am I?</h1>
      <p className={styles.sub_title}>
        Sit back, relax, It&apos;s gonna be a long one
      </p>
      <div className={styles.story}>
        <div className={styles.story_container}>
          <p className={styles.story_sub}>As Anansi would say...</p>
          <p className={styles.story_head}>Let me tell you a story</p>
          <p className={styles.story_para}>
            Once upon a time, there was a
            <span className={styles.story_highlight}>very curious kid.</span>.
            He discovered a strange machine — one that could
            <span className={styles.story_highlight}>
              {" "}
              play games, show movies,{" "}
            </span>
            and
            <span className={styles.story_highlight}>
              {" "}
              carry music inside it
            </span>
            . That machine was a
            <span className={styles.story_highlight}> computer</span> and to
            him, it felt less like a device and more like a doorway. A doorway
            to endless possibilities.
            <br />
            Years later, in school, he learned how to make a simple page that
            lived inside a
            <span className={styles.story_highlight}> Web Browser</span>.
            Curiosity took over. One page became two. Two became many. That was
            his
            <span className={styles.story_highlight}> first website</span>— and
            the moment the internet stopped being something he used and became
            something he built.
            <br />
            Time passed. The web grew. So did he
            <br />
            <span className={styles.story_highlight}> C++ </span>
            was my first language — my introduction to how computers really
            think.
            <span className={styles.story_highlight}> JavaScript </span>
            though, has my heart.
            <span className={styles.story_highlight}> Typescript </span>
            and
            <span className={styles.story_highlight}> Python </span>
            came along and felt like natural companions. Over time, I realized
            what I enjoy most is building
            <span className={styles.story_highlight}> Web Applications </span>—
            systems that people actually use, rely on, and sometimes don&apos;t
            even notice because they “just work”.
            <br />
            Today, I build full-stack applications, APIs, and developer tools. I
            care about clean code, thoughtful design, and systems that are easy
            to understand six months later — not just on launch day. Lately,
            I&apos;ve been branching out into mobile development as well,
            exploring React Native and the ideas that come with building for
            smaller screens and different constraints.{" "}
            <span className={styles.story_highlight}>
              The curiosity never really left. It just got better tools.
            </span>
          </p>
        </div>
        <div className={styles.story_ill}>
          <div>
            <Image src="/me-personal.png" alt="myself" fill sizes="100%" />
          </div>
        </div>
      </div>
      <div className={styles.hobbies}>
        <h3>Coding is great but, I also gotta have some other</h3>
        <h2>Hobbies</h2>
        <Hobbies />
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
      <p className={styles.closing_statement}>
        Still curious. Still learning. Still building. Still being Awesome!
      </p>
    </div>
  );
}
