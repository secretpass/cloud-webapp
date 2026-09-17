import { Navbar } from "@/components/navigation/navbar";
import { FAQSection } from "@/sections/faq";
import { FeaturesSection } from "@/sections/features/features";
import { HeroSection } from "@/sections/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto">
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
      </main>
    </div>
  );
}
