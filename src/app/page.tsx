import { Navbar } from "@/components/navigation/navbar";
import { FeaturesSection } from "@/sections/features/features";
import { HeroSection } from "@/sections/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto">
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  );
}
