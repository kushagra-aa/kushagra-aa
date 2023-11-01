/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";
import HOBBIES from "@/dummyData/hobbies.json";

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const data: string[] = HOBBIES;
    return NextResponse.json({
      message: "Hobbies found",
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
