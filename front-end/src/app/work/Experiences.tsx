"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ExperiencesLoader from "@/components/loaders/ExperiencesLoader/ExperiencesLoader";
import { ExperienceType } from "@/models/Experience";
import styles from "./page.module.css";

const getExperiencesAPI = async () => {
  const response = await fetch(`/api/experiences`).then((resp) => resp);
  let experiences: ExperienceType[] = [];
  if (response.status === 200)
    experiences = await response.json().then((d) => d.data);
  return experiences || [];
};
function Experiences() {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getExperiences = async () => {
    setIsLoading(true);
    await getExperiencesAPI().then((resp) => {
      setExperiences(resp);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getExperiences();
  }, []);

  return (
    <div className={styles.experiences_container}>
      {isLoading ? (
        <ExperiencesLoader />
      ) : (
        experiences.map((experience) => (
          <div key={experience.name} className={styles.experience_container}>
            <div className={styles.experience_details}>
              <h3>{experience.role}</h3>
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
                <span className={styles.experience_end}>{experience.end}</span>
              </p>
            </div>
            <div className={styles.experience_projects_skills_outer}>
              <div className={styles.experience_projects_skills}>
                {experience.projects && experience.projects.length > 0 && (
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
                )}
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
        ))
      )}
      <div className={styles.work_ill}>
        <div>
          <Image src="/work.png" alt="work" fill sizes="100%" />
        </div>
      </div>
    </div>
  );
}

export default Experiences;
