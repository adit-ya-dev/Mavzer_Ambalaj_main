"use client"
import React from 'react';
import Header from "../components/Header";
import Content from "@/app/medical/content";
import ContactFormOnly from "@/app/components/ContactFormOnly"; // Capitalize the import
import FooterSection from "@/app/components/FooterSection";




const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Content />
      <ContactFormOnly />
      <FooterSection />

    </div>
  );
};

export default HomePage;