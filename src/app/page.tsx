"use client";

import React, { useState } from "react";
import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustHighlights from "@/components/TrustHighlights";
import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Batches from "@/components/Batches";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedCourseForEnquiry, setSelectedCourseForEnquiry] = useState("");

  const handleOpenEnquiryModal = (courseTitle: string = "") => {
    setSelectedCourseForEnquiry(courseTitle);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
  };

  const handleSelectCourseForEnquiry = (courseTitle: string) => {
    // When a user clicks "Enquire" on a course card, open the enquiry modal pre-filled
    setSelectedCourseForEnquiry(courseTitle);
    setIsEnquiryModalOpen(true);

    // Also update the on-page form if they scroll down to contact
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      // Keep state synced
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* 1. Client Demo Presentation Banner */}
      <DemoBanner />

      {/* 2. Sticky Navbar */}
      <Navbar onOpenEnquiryModal={() => handleOpenEnquiryModal("")} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onOpenEnquiryModal={() => handleOpenEnquiryModal("")} />

        {/* 4. Trust Highlights (4 compact highlights) */}
        <TrustHighlights />

        {/* 5. About Section */}
        <About />

        {/* 6. Courses & Academic Support */}
        <Courses onSelectCourseForEnquiry={handleSelectCourseForEnquiry} />

        {/* 7. Why Students Choose Shree Classes (6 feature blocks) */}
        <WhyUs />

        {/* 8. How It Works (3-step process) */}
        <HowItWorks onOpenEnquiryModal={() => handleOpenEnquiryModal("")} />

        {/* 9. Flexible Learning Options (Batches) */}
        <Batches onOpenEnquiryModal={() => handleOpenEnquiryModal("")} />

        {/* 10. Student Experiences & Testimonials (Strict demo placeholders) */}
        <Testimonials />

        {/* 11. FAQ Section */}
        <FAQ />

        {/* 12. Conversion CTA ("Ready to Take the Next Step?") */}
        <ConversionCTA onOpenEnquiryModal={() => handleOpenEnquiryModal("")} />

        {/* 13. Contact Section (Direct info & Professional enquiry form) */}
        <Contact initialCourse={selectedCourseForEnquiry} />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Global Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiryModal}
        preSelectedCourse={selectedCourseForEnquiry}
      />
    </div>
  );
}
