"use client";

import { useEffect, useState } from "react";
import ProjectType from "@/models/Project";
import FeaturedProjectCard from "./FeaturedProjectCard";
import "./featured-projects-cards.css";

const getFeaturedProjectsAPI = async () => {
  const response = await fetch(`/api/projects?featured=true`).then(
    (resp) => resp,
  );
  let data;
  let projects: ProjectType[] = [];

  if (response.status === 200) data = await response.json().then((d) => d);
  if (data) {
    projects = data.data as unknown as ProjectType[];
  }

  console.log("projects", projects);

  return {
    projects,
  };
};

function FeaturedProjectsCards() {
  const [projects, setFeaturedProjects] = useState<ProjectType[]>([]);
  const getFeaturedProjects = async () => {
    await getFeaturedProjectsAPI().then((resp) => {
      setFeaturedProjects(resp.projects);
    });
  };

  useEffect(() => {
    getFeaturedProjects();
  }, []);

  return (
    <div className="projects_cards_container">
      <div className="projects_cards">
        {projects.map((project) => (
          <div key={project.slug} className="featured_project_card">
            <FeaturedProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjectsCards;
