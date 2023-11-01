"use client";

import { useEffect, useState } from "react";
import { SkillCategoryType } from "@/models/Skills";
import styles from "./page.module.css";

const getSkillsAPI = async () => {
  const response = await fetch(`/api/skills`).then((resp) => resp);
  let skills: SkillCategoryType[] = [];
  if (response.status === 200)
    skills = await response.json().then((d) => d.data);
  return skills || [];
};

function Skills() {
  const [skills, setSkills] = useState<SkillCategoryType[]>([]);
  const getSkills = async () => {
    await getSkillsAPI().then((resp) => {
      setSkills(resp);
    });
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className={styles.skill_categories_container}>
      {skills.map((category) => (
        <div key={category.name} className={styles.skill_category_container}>
          <h3>{category.name}</h3>
          <ul>
            {category.list.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;
