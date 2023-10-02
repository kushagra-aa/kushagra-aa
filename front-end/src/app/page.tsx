import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/button/Button";
import styles from "./page.module.css";
import {
  InfoIcon,
  RightIcon,
  SendIcon,
  ThunderboltIcon,
} from "@/components/Icons";
import Projects from "@/dummyData/projects.json";

function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <h2>Hi, I&apos;m</h2>
      <h1>Kushagra Agnihotri</h1>
      <h2>and I Make Applications</h2>
      <p>FullStack and Beyond 💫</p>
      <Button
        type="link"
        size="large"
        backgroundColor="accent-1"
        foregroundColor="dark-2"
      >
        <Link className={styles.hero_cta1} href="/portfolio">
          Checkout my work <ThunderboltIcon />
        </Link>
      </Button>
      <Button
        type="link"
        size="large"
        foregroundColor="accent-1"
        strokeColor="accent-1"
        stoke="stroke-1"
      >
        <Link className={styles.hero_cta2} href="/contact">
          Let&rsquo;s work together <SendIcon />
        </Link>
      </Button>
      <div className={styles.arrow}>
        <Image src="/arrow.png" alt="telegram" fill sizes="100%" />
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  project,
}: {
  project: (typeof Projects)[number];
}) {
  return (
    <div className={styles.project_card_content}>
      <Image src={project.picture} alt={project.name} fill sizes="100%" />
      <Button
        size="small"
        type="link"
        backgroundColor="dark-1"
        foregroundColor="accent-2"
      >
        <Link className={styles.project_card_link} href={project.link}>
          Visit <RightIcon />
        </Link>
      </Button>
      <Button
        size="small"
        type="link"
        backgroundColor="dark-2"
        foregroundColor="accent-1"
      >
        <Link
          className={styles.project_card_link}
          href={`portfolio/${project.slug}`}
        >
          Details <InfoIcon />
        </Link>
      </Button>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projects_container}>
        <h2>What I&apos;ve made recently?</h2>
        <div className={styles.projects_ill} />
        <div className={styles.projects_cards_container}>
          <div className={styles.projects_cards}>
            {Projects.map((project) => (
              <div key={project.slug} className={styles.project_card}>
                <FeaturedProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <h2>Let me introduce myself!</h2>
      <h3>Hello! My name is Kushagra and I love Programming</h3>
      <p>
        I help people bring their ideas to life. Powered by Designs, Code and
        coffee, A lot of code and coffee.
      </p>
      <div className={styles.about_ill} />
      <Image src="/HeartVector.png" alt="" fill sizes="100%" />
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
}
