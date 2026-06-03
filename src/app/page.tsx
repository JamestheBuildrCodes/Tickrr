import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Leaderboard from "@/components/Leaderboard";
import Heatmap from "@/components/Heatmap";
import Spotlight from "@/components/Spotlight";
import CreatorMonetization from "@/components/CreatorMonetization";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Leaderboard />
        <Spotlight />
        <Heatmap />
        <CreatorMonetization />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
