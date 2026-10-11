import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSnippet from "@/components/sections/AboutSnippet";
import GallerySection from "@/components/sections/GallerySection";
import ConferenceHighlight from "@/components/sections/ConferenceHighlight";
import ProgramsSection from "@/components/sections/ProgramsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import UpcomingCTA from "@/components/sections/UpcomingCTA";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} | ${SITE_TAGLINE}` },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    url: "/",
  },
};

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
