import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import { join } from "path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { goals } = body;

    const dataDir = join(process.cwd(), ".data");
    const filePath = join(dataDir, "onboarding.json");

    let existingData = {};
    try {
      const fileContent = await readFile(filePath, "utf-8");
      existingData = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet
    }

    const updatedData = { ...existingData, goals };

    await writeFile(filePath, JSON.stringify(updatedData, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
