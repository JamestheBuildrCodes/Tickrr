import Navbar from "@/components/Navbar";
import { ArrowRight, CopyTrade, ChatBubbles, Journal } from "@/components/icons";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12">
        <div className="th-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[var(--th-text)] mb-2">
              Welcome to Tickrr
            </h1>
            <p className="text-[var(--th-muted)]">
              Your trading journey starts here. Connect with traders, share your analysis, and grow together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link href="/dashboard/feed" className="th-card th-card-hover p-6 group">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-[var(--th-primary)]/10 text-[var(--th-primary)] mb-4">
                <CopyTrade width={24} height={24} />
              </div>
              <h3 className="text-lg font-semibold text-[var(--th-text)] mb-2">Feed</h3>
              <p className="text-sm text-[var(--th-muted)]">See posts from traders you follow</p>
            </Link>

            <Link href="/dashboard/communities" className="th-card th-card-hover p-6 group">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-[var(--th-primary)]/10 text-[var(--th-primary)] mb-4">
                <ChatBubbles width={24} height={24} />
              </div>
              <h3 className="text-lg font-semibold text-[var(--th-text)] mb-2">Communities</h3>
              <p className="text-sm text-[var(--th-muted)]">Join trading communities</p>
            </Link>

            <Link href="/dashboard/messages" className="th-card th-card-hover p-6 group">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-[var(--th-primary)]/10 text-[var(--th-primary)] mb-4">
                <ChatBubbles width={24} height={24} />
              </div>
              <h3 className="text-lg font-semibold text-[var(--th-text)] mb-2">Messages</h3>
              <p className="text-sm text-[var(--th-muted)]">Chat with other traders</p>
            </Link>

            <Link href="/dashboard/journal" className="th-card th-card-hover p-6 group">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-[var(--th-primary)]/10 text-[var(--th-primary)] mb-4">
                <Journal width={24} height={24} />
              </div>
              <h3 className="text-lg font-semibold text-[var(--th-text)] mb-2">Journal</h3>
              <p className="text-sm text-[var(--th-muted)]">Track your trades</p>
            </Link>
          </div>

          <div className="th-card p-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--th-text)] mb-4">
              Dashboard Coming Soon
            </h2>
            <p className="text-[var(--th-muted)] mb-6">
              We're building the complete trading social experience. Stay tuned for updates.
            </p>
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              Back to Home
              <ArrowRight width={18} height={18} />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
