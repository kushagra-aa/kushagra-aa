/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";
import PROJECTS from "@/dummyData/projects.json";
import ProjectType from "@/models/Project";
import { PortfolioFiltersType } from "@/types/portfolioFiltersType";

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const params: PortfolioFiltersType & { featured: boolean } = {
      end: parseInt(url.searchParams.get("end") || "6", 10),
      start: parseInt(url.searchParams.get("start") || "0", 10),
      search: url.searchParams.get("search") || undefined,
      tags: url.searchParams.get("tags") || undefined,
      tech: url.searchParams.get("tech") || undefined,
      featured: url.searchParams.get("featured") === "true" || false,
    };
    const allProjects: ProjectType[] = PROJECTS;
    let projects: ProjectType[] = allProjects;
    if (params.featured) {
      projects = projects.filter((project) => project.featured);
    } else {
      if (params.tech) {
        const tech = params.tech.split(",");
        projects = projects.filter((project) => {
          const projectTech = project.tech.split(",");
          return tech.some((t) => projectTech.includes(t));
        });
      }
      if (params.tags) {
        const tags = params.tags.split(",");
        projects = projects.filter((project) => {
          const projectTags = project.tags.split(",");
          return tags.some((t) => projectTags.includes(t));
        });
      }
      if (params.search && params.search.length) {
        projects = projects.filter(
          (project) =>
            project.name
              .toLowerCase()
              .includes(params.search?.toLowerCase() || "") ||
            project.description
              .toLowerCase()
              .includes(params.search?.toLowerCase() || "") ||
            project.short_description
              .toLowerCase()
              .includes(params.search?.toLowerCase() || ""),
        );
      }
    }
    return NextResponse.json({
      message: "Projects found",
      data: projects.slice(params.start, params.end),
      total_data: projects.length,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
