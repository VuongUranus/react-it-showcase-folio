
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

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
      
      <motion.div variants={sectionVariants}>
        <AboutSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <SkillsSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <AwardsSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <CertificatesSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <TestimonialsSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <BlogPreviewSection />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <WorkSection />
      </motion.div>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
