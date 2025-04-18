import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Track window size for enhanced responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust text size based on screen width
  const get404Size = () => {
    if (windowWidth <= 640) return "text-[12rem]"; // Small screens
    if (windowWidth <= 1024) return "text-[20rem]"; // Medium screens
    return "text-[30rem]"; // Large screens
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Large 404 watermark in background - responsive sizing */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <h1 className={`${get404Size()} font-bold dark:text-white`}>404</h1>
        </div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10 py-12 md:py-16">
          {/* Small decorative line */}
          <div className="w-20 sm:w-32 h-1 dark:bg-white bg-black mx-auto mb-6 md:mb-8"></div>
          
          {/* Main heading - responsive text sizes */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8">
            Page not found
          </h1>
          
          {/* Description - responsive text and spacing */}
          <p className="text-lg sm:text-xl dark:text-gray-300 text-gray-600 mb-8 md:mb-12 px-4 sm:px-0">
            It seems the page you're looking for no longer
            exists on this website.
          </p>
          
          {/* Back to homepage button with animation */}
          <Link
            to="/"
            className="inline-flex items-center dark:text-white text-gray-600 border-b-2 border-primaryblue pb-1 text-base sm:text-lg font-medium hover:text-primaryblue transition-colors group"
          >
            Back to Homepage
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;