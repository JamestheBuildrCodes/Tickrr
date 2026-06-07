import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import { join } from "path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, username, country, timezone, tradingExperience } = body;

    // Store in JSON file for now (will be replaced with database later)
    const dataDir = join(process.cwd(), ".data");
    const filePath = join(dataDir, "onboarding.json");

    // Ensure .data directory exists
    try {
      await writeFile(filePath, JSON.stringify(body, null, 2));
    } catch (error) {
      // Directory doesn't exist, create it
      await writeFile(filePath, JSON.stringify(body, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
