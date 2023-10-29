/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";
import SKILLS from "@/dummyData/skills.json";
import { SkillCategoryType } from "@/models/Skills";

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const data: SkillCategoryType[] = SKILLS;
    return NextResponse.json({
      message: "Skills found",
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
