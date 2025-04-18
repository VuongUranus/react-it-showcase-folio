import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import AwardsSection from '@/components/AwardsSection';
import CertificatesSection from '@/components/CertificatesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import ContactSection from '@/components/ContactSection';

const About: React.FC = () => {
  const sections = [
    <AboutSection key="about" />,
    <PortfolioSection key="portfolio" />,
    <CertificatesSection key="certificates" />,
    <TestimonialsSection key="testimonials" />,
    <AwardsSection key="awards" />,
    <BlogPreviewSection key="blog" />,
    <ContactSection key="contact" />,
  ];

  const bgColors = ['dark:bg-[#21262e] bg-[#F9FAFB]', "dark:bg-[#1c2026] bg-[#ffffff]"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero section thường để riêng biệt */}
        <HeroSection />

        {sections.map((Section, index) => (
          <section key={index} className={`${bgColors[index % 2]} py-12`}>
            {Section}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default About;
