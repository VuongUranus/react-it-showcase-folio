
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ThemeSwitcher from './ThemeSwitcher';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Kiểm tra route hiện tại để highlight navbar item
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Xử lý scroll để thay đổi style của navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "py-4 px-6 lg:px-24 flex justify-between items-center z-40 sticky top-0 transition-all duration-300",
      scrolled ? "glass-effect backdrop-blur-lg" : "bg-transparent"
    )}>
      <Link to="/" className="flex items-center gap-2">
        <span className="text-primaryblue text-2xl font-bold">&lt;/&gt;</span>
        <span className="text-xl font-semibold">Vuong Doan</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        <NavLink to="/" active={isActive("/")}>Home</NavLink>
        <NavLink to="/about" active={isActive("/about")}>About</NavLink>
        <NavLink to="/blog" active={isActive("/blog")}>Blog</NavLink>
        <NavLink to="/portfolio" active={isActive("/portfolio")}>Portfolio</NavLink>
        <NavLink to="/contact" active={isActive("/contact")}>Contact</NavLink>
        <div className="relative group">
          <button className="hover:text-primaryblue transition-colors flex items-center gap-1">
            Pages
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8L3 5H9L6 8Z" fill="currentColor"/>
            </svg>
          </button>
          <div className="absolute hidden group-hover:block bg-darkbg-lighter border border-gray-800 rounded-md p-2 mt-2 min-w-[150px] z-50 shadow-lg">
            <NavLink to="#" active={false} className="block py-1 px-2">Services</NavLink>
            <NavLink to="#" active={false} className="block py-1 px-2">FAQ</NavLink>
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
        <div className="md:hidden fixed top-16 right-0 left-0 bg-darkbg-lighter border-t border-gray-800 z-50 glass-effect">
          <div className="flex flex-col p-4">
            <NavLink to="/" active={isActive("/")} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" active={isActive("/about")} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/blog" active={isActive("/blog")} onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink to="/portfolio" active={isActive("/portfolio")} onClick={() => setIsOpen(false)}>Portfolio</NavLink>
            <NavLink to="/contact" active={isActive("/contact")} onClick={() => setIsOpen(false)}>Contact</NavLink>
            <details className="py-2">
              <summary className="hover:text-primaryblue cursor-pointer">Pages</summary>
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <NavLink to="#" active={false} onClick={() => setIsOpen(false)}>Services</NavLink>
                <NavLink to="#" active={false} onClick={() => setIsOpen(false)}>FAQ</NavLink>
              </div>
            </details>
          </div>
        </div>
      )}
    </nav>
  );
};

// Component NavLink tái sử dụng để đảm bảo style nhất quán
interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children, className, onClick }) => (
  <Link 
    to={to} 
    className={cn(
      "py-2 transition-colors relative",
      active 
        ? "text-primaryblue font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primaryblue" 
        : "hover:text-primaryblue",
      className
    )}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
