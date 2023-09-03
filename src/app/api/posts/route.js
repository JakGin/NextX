import { NextResponse } from "next/server";
import connect from "@/utils/db";

export async function GET(request) {
  try {
    // await connect();
    return new NextResponse("GET successful", { status: 200 });
  } catch (error) {
    return new NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
