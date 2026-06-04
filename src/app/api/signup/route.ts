import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let name = "";
  let email = "";
  let password = "";
  try {
    const body = (await request.json()) as { name?: unknown; email?: unknown; password?: unknown };
    name = typeof body.name === "string" ? body.name.trim() : "";
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  if (!name || name.length < 2) {
    return NextResponse.json(
      { ok: false, message: "Please enter your full name." },
      { status: 422 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  if (!password || password.length < 8) {
    return NextResponse.json(
      { ok: false, message: "Password must be at least 8 characters." },
      { status: 422 },
    );
  }

  console.info("Signup request received", {
    email,
    name,
    submittedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: "Account created successfully! Welcome to Tickrr.",
  });
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
