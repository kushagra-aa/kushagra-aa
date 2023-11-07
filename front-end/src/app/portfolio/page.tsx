"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import DropDown from "@/components/UI/dropDown/DropDown";
import Search from "@/components/UI/search/Search";
import ProjectCard from "@/components/postCard/ProjectCard";
import ProjectType from "@/models/Project";
import Button from "@/components/UI/button/Button";
import { PortfolioFiltersType } from "@/types/portfolioFiltersType";
import makeURLParams from "@/helpers/makeURLParams";
import makeOptions from "@/helpers/makeOptions";
import useFilters from "@/hooks/useFilters";

const getProjectsAPI = async (params: PortfolioFiltersType) => {
  const response = await fetch(`/api/projects?${makeURLParams(params)}`).then(
    (resp) => resp,
  );
  let data;
  let projects: ProjectType[] = [];
  let totalData = 0;

  if (response.status === 200) data = await response.json().then((d) => d);
  if (data) {
    projects = data.data as unknown as ProjectType[];
    totalData = data.total_data;
  }

  return {
    projects: projects.slice(params.start, params.end),
    total_data: totalData,
  };
};
const getTechTagsAPI = async () => {
  const responseTech = await fetch(`/api/tech`).then((resp) => resp);
  const responseTags = await fetch(`/api/tags`).then((resp) => resp);
  let dataTech;
  let dataTags;
  let tech: string[] = [];
  let tags: string[] = [];

  if (responseTech.status === 200)
    dataTech = await responseTech.json().then((d) => d);
  if (dataTech) {
    tech = dataTech.data;
  }
  if (responseTags.status === 200)
    dataTags = await responseTags.json().then((d) => d);
  if (dataTags) {
    tags = dataTags.data;
  }

  return {
    tech,
    tags,
  };
};

const defaultFiltersValue: PortfolioFiltersType = {
  start: 0,
  end: 6,
};

export default function Portfolio() {
  const [techOptions, setTechOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);
  const [tagOptions, setTagOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [total, setTotal] = useState(0);

  const { filters, changeFilters } = useFilters<PortfolioFiltersType>({
    filtersConfig: [
      {
        name: "start",
        isSearchParam: false,
      },
      {
        name: "end",
        isSearchParam: false,
      },
      {
        name: "search",
        getter: (val) => {
          return val;
        },
        setter: (val) => {
          return val;
        },
        isSearchParam: true,
      },
      {
        name: "tags",
        getter: (val) => {
          return val;
        },
        setter: (val) => {
          return val;
        },
        isSearchParam: true,
      },
      {
        name: "tech",
        getter: (val) => {
          return val;
        },
        setter: (val) => {
          return val;
        },
        isSearchParam: true,
      },
    ],
    defaultFilters: defaultFiltersValue,
    refresh: () => {},
  });

  const handleTechChange = (value: string): void => {
    if (value === "") changeFilters.delete("tech");
    else changeFilters.set("tech", value);
  };
  const handleTagChange = (value: string): void => {
    if (value === "") changeFilters.delete("tags");
    else changeFilters.set("tags", value);
  };
  const onSearch = (value?: string): void => {
    if (value === "" && filters.search) changeFilters.delete("search");
    else if (value) changeFilters.set("search", value);
  };

  const getProjects = async (params: PortfolioFiltersType) => {
    await getProjectsAPI(params).then((resp) => {
      setProjects(resp.projects);
      setTotal(resp.total_data);
    });
  };
  const getTechTags = async () => {
    await getTechTagsAPI().then((resp) => {
      setTechOptions(makeOptions(resp.tech));
      setTagOptions(makeOptions(resp.tags));
    });
  };

  const handleLoadMore = () => {
    changeFilters.set("end", filters.end + 6);
  };

  useEffect(() => {
    getTechTags();
  }, []);
  useEffect(() => {
    getProjects(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <div style={{ display: "block" }}>
          <button
            type="button"
            onClick={() => {
              changeFilters.set("search", "hola");
            }}
          >
            search
          </button>
          <button
            type="button"
            onClick={() => {
              changeFilters.set("tech", "hola");
            }}
          >
            tech
          </button>
          <button
            type="button"
            onClick={() => {
              changeFilters.set("tags", "hola");
            }}
          >
            tags
          </button>
          <button
            type="button"
            onClick={() => {
              changeFilters.set("search", "hola");
              changeFilters.set("tech", "hola");
              changeFilters.set("tags", "hola");
            }}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => {
              changeFilters.clear();
            }}
          >
            Clear
          </button>
        </div>
        <h1>Portfolio</h1>
        <p className={styles.sub}>
          Want to see my Creations
          <span>?</span>
        </p>
      </div>
      <div className={styles.filters}>
        <Search
          className={styles.filters_search}
          value={filters.search}
          onSearch={onSearch}
          searchFor="Project Name, Description"
          debounceTimeout={1000}
        />
        <div className={styles.filters_selects}>
          <p>filters:</p>
          <DropDown
            id="tech"
            name="tech"
            placeholder="Tech"
            className={styles.filter_dropdown}
            options={techOptions}
            backgroundColor="light-2"
            value={filters.tech}
            onChange={handleTechChange}
            debounceTimeout={1000}
            search
            autoSearch
            multiple
          />
          <DropDown
            id="tag"
            name="tag"
            placeholder="Tag"
            className={styles.filter_dropdown}
            options={tagOptions}
            backgroundColor="light-2"
            value={filters.tags}
            onChange={handleTagChange}
            debounceTimeout={1000}
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
        {projects.length !== total ? (
          <Button
            type="button"
            size="large"
            theme="theme-2"
            className={styles.load_button}
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        ) : null}
      </div>
    </div>
  );
}
