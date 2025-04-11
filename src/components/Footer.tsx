
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1F2C] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top Section with Profile and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-10">
          {/* Profile Section */}
          <div className="flex items-center gap-5">
            <Avatar className="h-24 w-24 border-2">
              <AvatarImage src="/lovable-uploads/7c19216a-b579-415d-bf90-f65d5887a2da.png" alt="Doan Minh Vuong" />
              <AvatarFallback>JC</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-bold">Doan Minh Vuong</h2>
              <p className="text-lightgray text-lg">Software Engineer</p>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="space-y-8">
            <div className="flex flex-col items-start">
              <h2 className="text-4xl font-bold flex items-center gap-3">
                Get in touch <ArrowRight className="text-primaryblue" />
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lightgray mb-2">EMAIL ME:</p>
                <a href="mailto:contact@john.com" className="text-white text-lg border-b border-gray-700 pb-1 flex items-center gap-2 hover:border-primaryblue transition-colors">
                  minhvuongday@gmail.com <ArrowRight size={16} />
                </a>
              </div>
              
              <div>
                <p className="text-lightgray mb-2">CALL ME:</p>
                <a href="tel:+84767129183" className="text-white text-lg border-b border-gray-700 pb-1 flex items-center gap-2 hover:border-primaryblue transition-colors">
                  +84 767 129 183 <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Icons */}
        <div className="mb-16">
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-primaryblue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-primaryblue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-primaryblue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-primaryblue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Separator */}
        <div className="h-px bg-gray-800 w-full mb-8"></div>
        
        {/* Bottom Navigation and Copyright */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-wrap gap-8">
            <Link to="/" className="hover:text-primaryblue transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primaryblue transition-colors">About</Link>
            <Link to="/portfolio" className="hover:text-primaryblue transition-colors">Portfolio</Link>
            <Link to="/blog" className="hover:text-primaryblue transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-primaryblue transition-colors">Contact</Link>
          </div>
          
          <div className="text-lightgray">
            Copyright © Doan Minh Vuong | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
