/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";
import PROJECTS from "@/dummyData/projects.json";
import getUniqueValues from "@/helpers/getUniqueValues";
import ProjectType from "@/models/Project";

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const data: string[] = getUniqueValues<ProjectType>(PROJECTS, "tags");
    return NextResponse.json({
      message: "Tags found",
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
