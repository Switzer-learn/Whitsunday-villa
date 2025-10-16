import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import DesignSection from "./components/DesignSection";
import LocationSection from "./components/LocationSection";
import AirSection from "./components/AirSection";
import AmenitiesSection from "./components/AmenitiesSection";
import GallerySection from "./components/GallerySection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <DesignSection />
      <LocationSection />
      <AirSection />
      <AmenitiesSection />
      <GallerySection />
      <CTASection />
    </main>
  );
}
