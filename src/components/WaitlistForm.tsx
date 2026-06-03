"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "@/components/icons";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (res.ok && data.ok) {
        setStatus("success");
        setMessage(data.message ?? "You're on the list!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message ?? "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-[var(--th-primary)]/40 bg-[var(--th-primary)]/10 px-4 py-3.5">
        <span className="grid place-items-center w-7 h-7 rounded-full bg-[var(--th-primary)] text-[#04130d]">
          <Check width={16} height={16} />
        </span>
        <p className="text-sm text-[var(--th-text)]">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        className={`flex ${compact ? "flex-col sm:flex-row" : "flex-col sm:flex-row"} gap-2.5`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@trade.com"
          aria-label="Email address"
          className="flex-1 rounded-xl border border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] px-4 py-3.5 text-[var(--th-text)] placeholder:text-[var(--th-faint)] outline-none transition-colors focus:border-[var(--th-primary)]"
        />
        <button type="submit" disabled={status === "loading"} className="btn-primary justify-center">
          {status === "loading" ? "Joining…" : "Join the hive"}
          {status !== "loading" && <ArrowRight width={18} height={18} />}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm text-[var(--th-danger)]">{message}</p>
      )}
    </form>
  );
}
