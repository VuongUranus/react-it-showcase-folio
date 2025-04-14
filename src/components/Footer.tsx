
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowRight,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Code,
  Medal,
  Terminal,
  Globe,
  MonitorSmartphone,
  Database,
  Camera,
  PaintBucket,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Smartphone,
  Server,
  Cloud,
  HardDrive,
  Award,
  FacebookIcon,
  ServerIcon,
  Facebook,
} from 'lucide-react';

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
            <a href="https://www.facebook.com/uranus.georgium" target='_blank' className="text-white hover:text-primaryblue transition-colors">
              <Facebook />
            </a>
            <a href="https://x.com/onMinhVng10" target='_blank' className="text-white hover:text-primaryblue transition-colors">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/min_vuon/" target='_blank' className="text-white hover:text-primaryblue transition-colors">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/doan-minh-vuong/" target='_blank' className="text-white hover:text-primaryblue transition-colors">
              <Linkedin />
            </a>
            <a href="https://github.com/VuongUranus" target='_blank' className="text-white hover:text-primaryblue transition-colors">
              <Github />
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
