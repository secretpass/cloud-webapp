import { type NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  // Redirect to home if the social network is unknown
  return NextResponse.redirect("/");
}
