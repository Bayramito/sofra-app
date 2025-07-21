import { ResponsiveHeader } from "@/components/responsive-header";
import { AnimatedHero } from "@/components/animated-hero";
import { FastDelivery } from "@/components/fast-delivery";
import { FoodCategories } from "@/components/food-categories";
import { RegularMenu } from "@/components/regular-menu";
import { MapSection } from "@/components/map-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResponsiveHeader />
      <AnimatedHero />
      <FastDelivery />
      <FoodCategories />
      <RegularMenu />
      <MapSection />
      <Footer />
    </div>
  );
}
