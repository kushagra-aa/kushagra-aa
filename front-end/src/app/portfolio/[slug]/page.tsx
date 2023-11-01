"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectType from "@/models/Project";
import NotFound from "./NotFound";
import styles from "./page.module.css";
import Button from "@/components/UI/button/Button";
import { CaretRightIcon, RightIcon } from "@/components/Icons";
import { formatDateStringToString } from "@/helpers/dateFormatter";

const getProjectAPI = async (slug?: string) => {
  if (!slug) return undefined;
  const url = `/api/projects/${slug}`;
  const response = await fetch(url).then((resp) => resp);
  let foundProject: ProjectType | undefined = undefined;
  if (response.status === 200)
    foundProject = await response.json().then((d) => d.data);
  return foundProject;
};

function Project({ params }: { params: { slug?: string } }) {
  const [project, setProject] = useState<ProjectType>();
  const { slug } = params;
  const projectDates = {
    start: formatDateStringToString(project?.started_at || "", {
      year: "numeric",
      month: "short",
    }),
    end: formatDateStringToString(project?.completed_at || "", {
      year: "numeric",
      month: "short",
    }),
  };

  const getProject = async () => {
    await getProjectAPI(slug).then((resp) => {
      setProject(resp);
    });
  };

  useEffect(() => {
    getProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!project) return <NotFound slug={slug} />;
  return (
    <div className={styles.main}>
      <div className={styles.project_container}>
        <div className={styles.project_thumbnail}>
          <Image src={project.picture} alt={project.name} fill sizes="100%" />
        </div>
        <h1>{project.name}</h1>
        <div className={styles.project_description_details}>
          <p>{project.description}</p>
          <div className={styles.project_details}>
            <Button className={styles.project_visit} size="medium" type="link">
              <Link target="_blank" href={project.link}>
                {project.tags.includes("game") ? (
                  <>
                    Play <CaretRightIcon />
                  </>
                ) : (
                  <>
                    Visit <RightIcon />
                  </>
                )}
              </Link>
            </Button>
            <Button className={styles.project_github} size="medium" type="link">
              <Link href={project.github}>GitHub</Link>
            </Button>
            <p className={styles.project_dates}>
              <span>{projectDates.start}</span>
              <span>-</span>
              <span>{projectDates.end}</span>
            </p>
            <div className={styles.project_tags_container}>
              <p>Tags:</p>
              <div className={styles.project_tags}>
                {project.tags.split(",").map((t) => (
                  <span className={styles.project_tag_card} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.project_tech_container}>
              <p>Tech:</p>
              <div className={styles.project_tech}>
                {project.tech.split(",").map((t) => (
                  <span className={styles.project_tag_card} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {project.with && (
              <div className={styles.project_with_container}>
                <p>With:</p>
                <Link
                  href={project.with?.link}
                  target="_blank"
                  className={styles.project_tag_card}
                >
                  {project.with?.name}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
