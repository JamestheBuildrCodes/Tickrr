import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";

type Entry = { email: string; ts: string };

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function readEntries(): Promise<Entry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw) as Entry[];
  } catch {
    return [];
  }
}

async function writeEntries(entries: Entry[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf8");
}

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  try {
    const entries = await readEntries();
    if (entries.some((e) => e.email === email)) {
      return NextResponse.json({
        ok: true,
        message: "You're already on the list — see you in the hive!",
      });
    }
    entries.push({ email, ts: new Date().toISOString() });
    await writeEntries(entries);
  } catch {
    // Persistence is best-effort (e.g. read-only serverless FS); still succeed.
  }

  return NextResponse.json({
    ok: true,
    message: "You're on the list! We'll email your invite soon.",
  });
}

export async function GET() {
  const entries = await readEntries();
  return NextResponse.json({ ok: true, count: entries.length });
}
