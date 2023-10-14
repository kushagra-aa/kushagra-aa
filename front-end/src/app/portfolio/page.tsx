"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import DropDown from "@/components/UI/dropDown/DropDown";
import Search from "@/components/UI/search/Search";
import ProjectCard from "@/components/postCard/ProjectCard";
import PROJECTS from "../../dummyData/projects.json";
import ProjectType from "@/models/Project";

type FiltersType = {
  tech?: string;
  tag?: string;
  search?: string;
  start?: number;
  end?: number;
};

const getProjectsAPI = async (params?: FiltersType) => {
  return PROJECTS.slice(params?.start || 0, (params?.end || 6) + 1);
};

const defaultFiltersValue: FiltersType = {};

export default function Portfolio() {
  const [filters, setFilters] = useState<FiltersType>(defaultFiltersValue);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const handleTechChange = (value: string): void => {
    setFilters((f) => ({ ...f, tech: value }));
  };
  const handleTagChange = (value: string): void => {
    setFilters((f) => ({ ...f, tag: value }));
  };
  const onSearch = (value?: string): void => {
    setFilters((f) => ({ ...f, search: value }));
  };

  const getProjects = async (params?: FiltersType) => {
    await getProjectsAPI(params).then((resp) => {
      setProjects(resp);
    });
  };

  useEffect(() => {
    getProjects(filters);
  }, [filters]);

  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1>Portfolio</h1>
        <p className={styles.sub}>
          Want to see my Creations
          <span>?</span>
        </p>
      </div>
      <div className={styles.filters}>
        <Search value={filters.search} onSearch={onSearch} />
        <div className={styles.filters_selects}>
          <p>filters:</p>
          <DropDown
            id="tech"
            name="tech"
            placeholder="Tech"
            className={styles.filter_dropdown}
            options={[
              { value: "css" },
              { value: "html" },
              { value: "js" },
              { value: "ts" },
              { value: "dart" },
            ]}
            backgroundColor="light-2"
            value={filters.tech}
            onChange={handleTechChange}
            search
            autoSearch
            multiple
          />
          <DropDown
            id="tag"
            name="tag"
            placeholder="Tag"
            className={styles.filter_dropdown}
            options={[
              { value: "game" },
              { value: "app" },
              { value: "android" },
              { value: "website" },
              { value: "desktop" },
            ]}
            backgroundColor="light-2"
            value={filters.tag}
            onChange={handleTagChange}
            search
            autoSearch
            multiple
          />
        </div>
      </div>
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
