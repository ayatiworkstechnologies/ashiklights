"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProductFeatures } from "@/components/sections/ProductFeatures";
import { ShopBySpace } from "@/components/sections/ShopBySpace";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Expertise } from "@/components/sections/Expertise";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ShowroomVisit } from "@/components/sections/ShowroomVisit";
import { Testimonial } from "@/components/sections/Testimonial";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { useRouter } from "next/navigation";

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const scrollRef = useScrollReveal();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      city: formData.get("city"),
      project_type: formData.get("project_type"),
    };

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.ayatiworks.com/api/v1/public/ashik-lights/leads/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "8d6158982967e86fd9ff3219c057e7d62e0308f19984047ccefc55af06d1903f",
        },
        body: JSON.stringify({ data }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        router.push("/thank-you");
      } else {
        console.error("Failed to submit lead");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  return (
    <main className="bg-background text-foreground" ref={scrollRef}>
      <Header />
      <Hero 
        isSubmitted={isSubmitted} 
        isSubmitting={isSubmitting}
        onOpenModal={openModal} 
        onSubmit={handleFormSubmit}
        onResetSubmit={() => setIsSubmitted(false)}
      />
      <div className="reveal">
        <TrustStrip />
      </div>
      <div className="reveal">
        <ProductFeatures onOpenModal={openModal} />
      </div>
      <div className="reveal">
        <ShopBySpace onOpenModal={openModal} />
      </div>
      <div className="reveal">
        <FeaturedCollections onOpenModal={openModal} />
      </div>
      <div className="reveal">
        <BeforeAfter />
      </div>
      <div className="reveal">
        <Expertise />
      </div>
      <div className="reveal">
        <ProjectGallery 
          filter={filter} 
          setFilter={setFilter} 
          onOpenModal={openModal} 
        />
      </div>
      <div className="reveal">
        <ShowroomVisit onOpenModal={openModal} />
      </div>
      <div className="reveal">
        <Testimonial />
      </div>
      <div className="reveal">
        <FinalCTA onOpenModal={openModal} />
      </div>
      <Footer />
      
      <ConsultationModal 
        isOpen={isModalOpen}
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
      />
      
      <ScrollToTop />
    </main>
  );
}
