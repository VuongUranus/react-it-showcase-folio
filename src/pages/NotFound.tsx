
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-[#1A1F2C] min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center relative px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen">
        {/* Large 404 watermark in background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <h1 className="text-[30rem] font-bold text-white">404</h1>
        </div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* Small decorative line */}
          <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Page not found
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-300 mb-12">
            It seems the page you're looking for no longer
            exists on this website.
          </p>
          
          {/* Back to homepage button with animation */}
          <Link 
            to="/"
            className="inline-flex items-center text-white border-b-2 border-primaryblue pb-1 text-lg font-medium hover:text-primaryblue transition-colors group"
          >
            Back to Homepage
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
