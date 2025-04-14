
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ThemeSwitcher from './ThemeSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-6 lg:px-24 flex justify-between items-center z-10">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-primaryblue text-2xl font-bold">&lt;/&gt;</span>
        <span className="text-xl font-semibold">Vuong Doan</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/" className="hover:text-primaryblue transition-colors">Home</Link>
        <Link to="/about" className="hover:text-primaryblue transition-colors">About</Link>
        <Link to="/blog" className="hover:text-primaryblue transition-colors">Blog</Link>
        <Link to="/portfolio" className="hover:text-primaryblue transition-colors">Portfolio</Link>
        <Link to="/contact" className="hover:text-primaryblue transition-colors">Contact</Link>
        <div className="relative group">
          <button className="hover:text-primaryblue transition-colors flex items-center gap-1">
            Pages
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8L3 5H9L6 8Z" fill="currentColor"/>
            </svg>
          </button>
          <div className="absolute hidden group-hover:block bg-darkbg border border-gray-800 rounded-md p-2 mt-2 min-w-[150px] z-10 dark:bg-gray-900">
            <Link to="#" className="block py-1 px-2 hover:text-primaryblue">Services</Link>
            <Link to="#" className="block py-1 px-2 hover:text-primaryblue">FAQ</Link>
          </div>
        </div>
        <ThemeSwitcher />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeSwitcher />
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-darkbg border-t border-gray-800 z-50 dark:bg-gray-900">
          <div className="flex flex-col p-4">
            <Link to="/" className="py-2 hover:text-primaryblue" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="py-2 hover:text-primaryblue" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/blog" className="py-2 hover:text-primaryblue" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/portfolio" className="py-2 hover:text-primaryblue" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link to="/contact" className="py-2 hover:text-primaryblue" onClick={() => setIsOpen(false)}>Contact</Link>
            <details className="py-2">
              <summary className="hover:text-primaryblue cursor-pointer">Pages</summary>
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link to="#" className="hover:text-primaryblue" onClick={() => setIsOpen(false)}>Services</Link>
                <Link to="#" className="hover:text-primaryblue" onClick={() => setIsOpen(false)}>FAQ</Link>
              </div>
            </details>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
