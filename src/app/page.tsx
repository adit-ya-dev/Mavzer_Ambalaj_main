"use client";
import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import HeroSlider from "@/app/components/HeroSlider";
import CategoryCards from "@/app/components/CategoryCards";
import Reference from "@/app/components/ReferencesOnly";
import ContactFormOnly from "@/app/components/ContactFormOnly";
import FooterSection from "@/app/components/FooterSection";

// Separate component that uses useSearchParams - wrapped in Suspense
function ScrollHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  React.useEffect(() => {
    const scrollParam = searchParams.get("scroll");
    const elementId = scrollParam === "category" ? "category-cards" : scrollParam === "references" ? "references-section" : null;

    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          router.replace("/", { scroll: false }); // Prevent default scroll behavior
        }, 100); // Reduced timeout for faster response
      }
    }
  }, [searchParams, router]);

  return null; // This component doesn't render anything
}

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("restaurant");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Suspense with no visible fallback to avoid "rendering" flicker */}
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>

      {/* Main content */}
      <Header />
      <main>
        <HeroSlider />
        <CategoryCards
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Reference />
        <ContactFormOnly />
      </main>
      <FooterSection />
    </div>
  );
};

export default HomePage;