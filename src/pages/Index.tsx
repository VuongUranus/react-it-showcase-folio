
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import AwardsSection from '@/components/AwardsSection';
import CertificatesSection from '@/components/CertificatesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import WorkSection from '@/components/WorkSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-black"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <AwardsSection />
      <CertificatesSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <WorkSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
