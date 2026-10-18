/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";
import EXPERIENCES from "@/dummyData/experiences.json";
import { ExperienceType } from "@/models/Experience";

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const data: ExperienceType[] = EXPERIENCES.sort(() => -1); // Sorting to newest first
    return NextResponse.json({
      message: "Experiences found",
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
