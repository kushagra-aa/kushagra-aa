/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";
import CERTIFICATIONS from "@/dummyData/certifications.json";
import { CertificationType } from "@/models/Certification";

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const data: CertificationType[] = CERTIFICATIONS.sort(() => -1); // Sorting to newest first
    return NextResponse.json({
      message: "Certifications found",
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
