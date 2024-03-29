"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectType from "@/models/Project";
import NotFound from "./NotFound/NotFound";
import styles from "./page.module.css";
import Button from "@/components/UI/button/Button";
import { CaretRightIcon, RightIcon } from "@/components/Icons";
import { formatDateStringToString } from "@/helpers/dateFormatter";
import Loader from "./Loader/Loader";

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
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = params;
  const projectDates = {
    start:
      project?.started_at === "N/A"
        ? "N/A"
        : formatDateStringToString(project?.started_at || "", {
            year: "numeric",
            month: "short",
          }),
    end:
      project?.completed_at === "N/A"
        ? "N/A"
        : formatDateStringToString(project?.completed_at || "", {
            year: "numeric",
            month: "short",
          }),
  };

  const getProject = async () => {
    setIsLoading(true);
    await getProjectAPI(slug).then((resp) => {
      setProject(resp);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loader />;
  if (!project) return <NotFound slug={slug} />;
  return (
    <div className={styles.main}>
      <div className={styles.project_container}>
        <div className={styles.project_thumbnail}>
          <Image src={project.picture} alt={project.name} fill sizes="100%" />
        </div>
        <h1>{project.name}</h1>
        <div className={styles.project_description_details}>
          {/* eslint-disable-next-line react/no-danger */}
          <p dangerouslySetInnerHTML={{ __html: project.description }} />
          <div className={styles.project_details}>
            {project.link ? (
              <Button
                className={styles.project_visit}
                size="medium"
                type="link"
              >
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
            ) : null}
            {project.github ? (
              <Button
                className={styles.project_github}
                size="medium"
                type="link"
              >
                <Link href={project.github}>GitHub</Link>
              </Button>
            ) : null}
            <p className={styles.project_dates}>
              <span>{projectDates.start}</span>
              <span>-</span>
              <span>{projectDates.end}</span>
            </p>
            <div className={styles.project_tags_container}>
              <p>Tags:</p>
              <div className={styles.project_tags}>
                {project.tags.split(",").map((t) => (
                  <Link
                    className={styles.project_tag_card}
                    href={`/portfolio?tags=${t}`}
                    key={t}
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.project_tech_container}>
              <p>Tech:</p>
              <div className={styles.project_tech}>
                {project.tech.split(",").map((t) => (
                  <Link
                    className={styles.project_tag_card}
                    href={`/portfolio?tech=${t}`}
                    key={t}
                  >
                    {t}
                  </Link>
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
