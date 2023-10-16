import "./project-card.css";
import Image from "next/image";
import Link from "next/link";
import PROJECTS from "../../dummyData/projects.json";
import ProjectType from "@/models/Project";
import Button from "../UI/button/Button";

function ProjectCard({ project = PROJECTS[0] }: { project?: ProjectType }) {
  return (
    <div className="project_card">
      <div className="project_image">
        <Image src={project.picture} alt={project.name} fill sizes="100%" />
      </div>
      <div className="project_info">
        <h6>{project.name}</h6>
        <p>{project.short_description}</p>
        <div className="project_tags">
          <p>tags:</p>
          {project.tags.split(",").map((t, i, a) => (
            <span key={t}>
              {t}
              {i >= a.length - 1 ? "" : ","}
            </span>
          ))}
        </div>
        <div className="project_tech">
          <p>tech:</p>
          {project.tech.split(",").map((t, i, a) => (
            <span key={t}>
              {t}
              {i >= a.length - 1 ? "" : ","}
            </span>
          ))}
        </div>
        <Button className="visit" size="medium" type="link">
          <Link target="_blank" href={project.link}>
            {project.tags.includes("game") ? "play" : "visit"}
          </Link>
        </Button>
        <Button className="details" size="medium" type="link">
          <Link href={`/portfolio/${project.slug}`}>details</Link>
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;
