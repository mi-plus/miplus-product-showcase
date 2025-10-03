import { AboutSection } from "@/components/about-section";
import { FeaturedProducts } from "@/components/featured-products";
import { HeroSection } from "@/components/hero-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedProducts />
      </main>
    </div>
  );
}
