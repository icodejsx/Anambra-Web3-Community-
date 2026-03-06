import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSnippet from "@/components/sections/AboutSnippet";
import GallerySection from "@/components/sections/GallerySection";
import ConferenceHighlight from "@/components/sections/ConferenceHighlight";
import ProgramsSection from "@/components/sections/ProgramsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import UpcomingCTA from "@/components/sections/UpcomingCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSnippet />
      <GallerySection />
      <ConferenceHighlight />
      <ProgramsSection />
      <PartnersSection />
      <UpcomingCTA />
    </>
  );
}
