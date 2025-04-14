import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorkSection from '@/components/WorkSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CertificatesSection from '@/components/CertificatesSection';
import AwardsSection from '@/components/AwardsSection';
import MusicPlayer from '@/components/MusicPlayer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-black">
      <Navbar />
      <main className="flex-1">
        {/* Hero section with parallax effect */}
        <HeroSection />

        {/* About me section with skills showcase */}
        <AboutSection />

        {/* Portfolio showcase section */}
        <WorkSection />

        {/* Awards Section */}
        <AwardsSection />

        {/* Certificates Section */}
        <CertificatesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Blog preview section */}
        <BlogPreviewSection />

        {/* Contact section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
