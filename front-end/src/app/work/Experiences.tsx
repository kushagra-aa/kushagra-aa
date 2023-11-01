"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
  const getExperiences = async () => {
    await getExperiencesAPI().then((resp) => {
      setExperiences(resp);
    });
  };

  useEffect(() => {
    getExperiences();
  }, []);

  return (
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
              <span className={styles.experience_type}>{experience.type}</span>{" "}
              -{" "}
              <span className={styles.experience_location}>
                {experience.location}
              </span>
            </p>
            <p className={styles.experience_duration}>
              <span className={styles.experience_start}>
                {experience.start}
              </span>{" "}
              - <span className={styles.experience_end}>{experience.end}</span>
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
  );
}

export default Experiences;
