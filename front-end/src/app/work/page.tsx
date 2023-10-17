import Link from "next/link";
import Image from "next/image";
import LinksContainer from "@/components/linksRow/LinksContainer";
import styles from "./page.module.css";
import LinkRow from "@/components/linksRow/LinkRow";
import { FolderOpenIcon, IdCardIcon, SendIcon } from "@/components/Icons";
import { ExperienceType } from "@/models/Experience";
import ExperiencesData from "@/dummyData/experiences.json";
import SkillsCategoriesData from "@/dummyData/skills.json";
import { SkillCategoryType } from "@/models/Skills";

const getData = async () => {
  const skillCategories: SkillCategoryType[] = SkillsCategoriesData;
  const experiences: ExperienceType[] = ExperiencesData;
  return { skillCategories, experiences };
};

export default async function Work() {
  const { skillCategories, experiences } = await getData();

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
        <div className={styles.experiences_container}>
          {experiences.map((experience) => (
            <div key={experience.name} className={styles.experience_container}>
              <div className={styles.experience_details}>
                <h4>{experience.role}</h4>
                {experience.website ? (
                  <Link
                    className={styles.experience_org}
                    href={experience.website}
                    target="_blank"
                  >
                    {experience.name}
                  </Link>
                ) : (
                  <p className={styles.experience_org}>{experience.name}</p>
                )}
                <p className={styles.experience_type_location}>
                  <span className={styles.experience_type}>
                    {experience.type}
                  </span>{" "}
                  -{" "}
                  <span className={styles.experience_location}>
                    {experience.location}
                  </span>
                </p>
                <p className={styles.experience_duration}>
                  <span className={styles.experience_start}>
                    {experience.start}
                  </span>{" "}
                  -{" "}
                  <span className={styles.experience_end}>
                    {experience.end}
                  </span>
                </p>
              </div>
              <div className={styles.experience_projects_skills_outer}>
                <div className={styles.experience_projects_skills}>
                  <div className={styles.experience_projects}>
                    <h5>projects</h5>
                    <ul>
                      {experience.projects.map((project) => (
                        <li
                          className={styles.experience_project}
                          key={project.name}
                        >
                          {project.link ? (
                            <Link href={project.link} target="_blank">
                              {project.name}
                            </Link>
                          ) : (
                            <p>{project.name}</p>
                          )}
                          <ul className={styles.experience_project_points}>
                            {project.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.experience_skills}>
                    <h5>skills</h5>
                    <ul>
                      {experience.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
      <section className={styles.skills}>
        <p className={styles.sub_2}>Want some Action?</p>
        <h2>My Arsenal</h2>
        <div className={styles.skill_categories_container}>
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className={styles.skill_category_container}
            >
              <h3>{category.name}</h3>
              <ul>
                {category.list.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
