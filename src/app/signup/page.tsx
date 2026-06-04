import Navbar from "@/components/Navbar";
import SignUpForm from "@/components/SignUpForm";
import Footer from "@/components/Footer";
import { HiveLogo } from "@/components/icons";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="th-container max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 font-semibold text-[var(--th-text)] mb-6">
              <span className="grid place-items-center w-10 h-10 rounded-xl glow-ring text-[var(--th-primary)]">
                <HiveLogo width={24} height={24} />
              </span>
              <span className="text-xl tracking-tight">Tick<span className="th-gradient-text">rr</span></span>
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
              Create your account
            </h1>
            <p className="text-[var(--th-muted)]">
              Join Tickrr and start trading with verified track records, global rankings, and AI-powered insights.
            </p>
          </div>

          <div className="th-card p-6 sm:p-8">
            <SignUpForm />
          </div>

          <p className="mt-6 text-center text-sm text-[var(--th-faint)]">
            Already have an account?{" "}
            <a href="/signin" className="text-[var(--th-primary)] hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
