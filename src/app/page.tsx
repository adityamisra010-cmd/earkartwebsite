import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import {
  Hero,
  EmpathyBridge,
  Pathways,
  TrustBar,
  StoryPreview,
  Services,
  HearingCheckBanner,
  BlogPreview,
  ClinicFinder,
} from "@/components/home/sections";

export default function Home() {
  return (
    <>
      <Header />
      {/* pb on mobile so content clears the persistent bottom CTA bar */}
      <main id="main" className="flex-1 pb-20 lg:pb-0">
        <Hero />
        <EmpathyBridge />
        <Pathways />
        <TrustBar />
        <StoryPreview />
        <Services />
        <HearingCheckBanner />
        <BlogPreview />
        <ClinicFinder />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
