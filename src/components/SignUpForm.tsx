"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Eye, EyeOff } from "@/components/icons";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (res.ok && data.ok) {
        setStatus("success");
        setMessage(data.message ?? "Account created successfully!");
        setFormData({ name: "", email: "", password: "" });
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
      <div className="flex flex-col items-center gap-4 text-center py-8">
        <span className="grid place-items-center w-16 h-16 rounded-full bg-[var(--th-primary)]/20 text-[var(--th-primary)]">
          <Check width={32} height={32} />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-[var(--th-text)] mb-2">Welcome to Tickrr!</h3>
          <p className="text-sm text-[var(--th-muted)]">{message}</p>
        </div>
        <Link href="/" className="btn-primary mt-4">
          Go to dashboard
          <ArrowRight width={18} height={18} />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--th-text)] mb-2">
          Full name
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="John Doe"
          aria-label="Full name"
          className="w-full rounded-xl border border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-[var(--th-text)] placeholder:text-[var(--th-faint)] outline-none transition-colors focus:border-[var(--th-primary)]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--th-text)] mb-2">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@trade.com"
          aria-label="Email address"
          className="w-full rounded-xl border border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-[var(--th-text)] placeholder:text-[var(--th-faint)] outline-none transition-colors focus:border-[var(--th-primary)]"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-[var(--th-text)] mb-2">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="••••••••"
            aria-label="Password"
            className="w-full rounded-xl border border-[var(--th-border-strong)] bg-[rgba(255,255,255,0.03)] px-4 py-3 pr-12 text-[var(--th-text)] placeholder:text-[var(--th-faint)] outline-none transition-colors focus:border-[var(--th-primary)]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--th-faint)] hover:text-[var(--th-text)] transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff width={20} height={20} /> : <Eye width={20} height={20} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center"
      >
        {status === "loading" ? "Creating account…" : "Create account"}
        {status !== "loading" && <ArrowRight width={18} height={18} />}
      </button>

      {status === "error" && (
        <p className="text-sm text-[var(--th-danger)] text-center">{message}</p>
      )}

      <p className="text-xs text-[var(--th-faint)] text-center">
        By creating an account, you agree to our{" "}
        <a href="#" className="text-[var(--th-primary)] hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-[var(--th-primary)] hover:underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}
