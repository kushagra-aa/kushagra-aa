/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";
import SOCIALS from "@/dummyData/socials.json";
import { Socials } from "@/models/Social";

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const data: Socials = SOCIALS;
    return NextResponse.json({
      message: "Socials found",
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
