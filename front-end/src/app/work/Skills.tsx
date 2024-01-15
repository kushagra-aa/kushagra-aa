"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SkillCategoryType } from "@/models/Skills";
import styles from "./page.module.css";
import ListItemLoader from "@/components/loaders/ListItemLoader/ListItemLoader";

const getSkillsAPI = async () => {
  const response = await fetch(`/api/skills`).then((resp) => resp);
  let skills: SkillCategoryType[] = [];
  if (response.status === 200)
    skills = await response.json().then((d) => d.data);
  return skills || [];
};

function Skills() {
  const [skills, setSkills] = useState<SkillCategoryType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getSkills = async () => {
    setIsLoading(true);
    await getSkillsAPI().then((resp) => {
      setSkills(resp);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className={styles.skill_categories_container}>
      {isLoading ? (
        <div className={styles.skill_category_loader_container}>
          <ListItemLoader />
          <ul>{[1, 2]?.map((i) => <ListItemLoader key={i} />)}</ul>
        </div>
      ) : (
        skills.map((category) => (
          <div key={category.name} className={styles.skill_category_container}>
            <h3>{category.name}</h3>
            <ul>
              {category.list.map((skill) => (
                <li key={skill}>
                  <Link href={`/portfolio?tech=${skill}`}>{skill}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default Skills;
