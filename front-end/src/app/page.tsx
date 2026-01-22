import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/button/Button";
import { SendIcon, ThunderboltIcon } from "@/components/Icons";
import styles from "./page.module.css";
import FeaturedProjectsCards from "./FeaturedProjectsCards/FeaturedProjectsCards";

function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <h2>Hi, I&apos;m</h2>
      <h1>Kushagra Agnihotri</h1>
      <h2>
        Senior Full-Stack Engineer building production software with React,
        Node.js & TypeScript
      </h2>
      <p>
        I build scalable web platforms, APIs, and developer tools that solve
        real problems and ship to production.
      </p>
      <Button
        type="link"
        size="large"
        backgroundColor="accent-1"
        foregroundColor="dark-2"
      >
        <Link className={styles.hero_cta1} href="/#projects">
          Explore my work <ThunderboltIcon />
        </Link>
      </Button>
      <Button
        type="link"
        size="large"
        foregroundColor="accent-1"
        strokeColor="accent-1"
        stoke="stroke-1"
        className={styles.hero_cta2_outer}
      >
        <Link className={styles.hero_cta2} href="/contact">
          Let&rsquo;s work together <SendIcon />
        </Link>
      </Button>
      <div className={styles.arrow}>
        <Image src="/arrow.png" alt="telegram" fill sizes="100%" />
      </div>
      <div className={styles.hero_ill}>
        <Image src="/hero-image.png" alt="hero_image" fill sizes="100%" />
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projects_container}>
        <h3>Top Shelf Stuff!</h3>
        <h2>My Featured Work</h2>
        <p>
          A selection of production systems, side projects, and developer tools
          I&apos;ve built and maintain.
        </p>
        <div className={styles.projects_ill} />
        <FeaturedProjectsCards />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <h2>Let me introduce myself!</h2>
      <h3>
        I help teams ship features faster by crafting reliable code, clean APIs,
        and intuitive user interfaces.
      </h3>
      <p>
        I&rsquo;m a senior full-stack developer with 3.5+ years of experience
        building web products, APIs, and developer tooling used in production.
      </p>
      {/* <div className={styles.about_ill} /> */}
      <Image src="/HeartVector.png" alt="" fill sizes="100%" />
    </section>
  );
}

export default async function Home() {
  return (
    <div className={`${styles.main} main`}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
