"use client"
import React from 'react';
import Header from "../components/Header";
import Corporate from "@/app/corporate/corporate";
import ContactFormOnly from "@/app/components/ContactFormOnly"; // Capitalize the import
import FooterSection from "@/app/components/FooterSection";




const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Corporate />
      <ContactFormOnly />
      <FooterSection />

    </div>
  );
};

export default HomePage;