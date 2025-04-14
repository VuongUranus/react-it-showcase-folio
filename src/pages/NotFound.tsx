
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15
      }
    }
  };

  return (
    <div className="bg-darkbg-lighter min-h-screen flex flex-col">
      <Navbar />
      
      <motion.div 
        className="flex-1 flex items-center justify-center relative px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Large 404 watermark in background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <h1 className="text-[20rem] md:text-[30rem] font-bold text-white">404</h1>
        </div>
        
        <motion.div 
          className="max-w-2xl mx-auto text-center relative z-10"
          variants={containerVariants}
        >
          {/* Small decorative line */}
          <motion.div 
            variants={itemVariants}
            className="w-32 h-1 bg-primaryblue mx-auto mb-8"
          ></motion.div>
          
          {/* Main heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-8 gradient-text"
          >
            Page not found
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-xl text-lightgray mb-12"
          >
            It seems the page you're looking for no longer
            exists on this website.
          </motion.p>
          
          {/* Back to homepage button with animation */}
          <motion.div variants={itemVariants}>
            <Link 
              to="/"
              className="inline-flex items-center text-white border-b-2 border-primaryblue pb-1 text-lg font-medium hover:text-primaryblue transition-colors group"
            >
              Back to Homepage
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
