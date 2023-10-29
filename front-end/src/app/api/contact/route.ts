/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";
import { AddContactRequestType } from "@/types/addContactRequestType";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const contactBody: AddContactRequestType =
      reqBody as unknown as AddContactRequestType;
    if (!contactBody.name || contactBody.name.length <= 0)
      throw new Error("Please fill Name Field");
    if (!contactBody.email || contactBody.email.length <= 0)
      throw new Error("Please fill Email Field");
    if (!contactBody.subject || contactBody.subject.length <= 0)
      throw new Error("Please fill Subject Field");
    if (!contactBody.message || contactBody.message.length <= 0)
      throw new Error("Please fill Message Field");
    return NextResponse.json({
      message: "Message Sent Successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
