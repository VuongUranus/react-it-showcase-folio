
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between section-padding relative">
      <div className="lg:w-1/2 z-10">
        <h1 className="heading-line text-5xl md:text-6xl font-bold mb-6 text-white">
          I'm John, a<br />
          Web Developer
        </h1>
        <p className="text-lightgray text-lg mb-8 max-w-lg">
          Specialized in creating pixel-perfect web applications with beautiful interfaces.
          I help turn your ideas into digital reality.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primaryblue hover:bg-primaryblue/90 text-white">
            <a href="/portfolio" className="px-2">View My Work</a>
          </Button>
          <Button variant="outline" className="border-white hover:bg-white/10 text-white">
            <a href="/contact" className="px-2">Contact Me</a>
          </Button>
        </div>
        
        <Link
          to="aboutSection"
          smooth={true}
          duration={500}
          className="animate-bounce-slow cursor-pointer inline-block mt-16"
        >
          <div className="w-16 h-16 rounded-full bg-primaryblue flex items-center justify-center">
            <ArrowDown size={24} color="white" />
          </div>
        </Link>
      </div>

      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end lg:ml-8">
        <div className="rounded-full overflow-hidden w-80 h-80 border-4 border-primaryblue shadow-xl">
          <img 
            src="/lovable-uploads/7c19216a-b579-415d-bf90-f65d5887a2da.png" 
            alt="Developer Portrait" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right side information panels - adjusted position to avoid overlap */}
      <div className="hidden lg:flex flex-col gap-12 absolute right-12 top-1/2 -translate-y-1/2 max-w-xs">
        <div className="animate-fade-in opacity-0 bg-black/40 p-4 rounded-lg" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-bold text-lg mb-2 text-white">ABOUT ME</h3>
          <p className="text-lightgray mb-4">
            Passionate web developer with over 12 years of experience creating 
            modern web applications and user interfaces.
          </p>
          <a href="/about" className="text-primaryblue flex items-center group hover:text-white transition-colors">
            LEARN MORE 
            <span className="transform transition-transform group-hover:translate-x-1 ml-2">→</span>
          </a>
        </div>

        <div className="animate-fade-in opacity-0 bg-black/40 p-4 rounded-lg" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-bold text-lg mb-2 text-white">MY WORK</h3>
          <p className="text-lightgray mb-4">
            Explore my latest projects including e-commerce platforms, 
            dashboards, mobile apps and more.
          </p>
          <a href="/portfolio" className="text-primaryblue flex items-center group hover:text-white transition-colors">
            BROWSE PORTFOLIO
            <span className="transform transition-transform group-hover:translate-x-1 ml-2">→</span>
          </a>
        </div>

        <div className="animate-fade-in opacity-0 bg-black/40 p-4 rounded-lg" style={{ animationDelay: '0.9s' }}>
          <h3 className="font-bold text-lg mb-4 text-white">FOLLOW ME</h3>
          <div className="flex gap-4">
            <a href="#" className="text-lightgray hover:text-primaryblue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="text-lightgray hover:text-primaryblue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="text-lightgray hover:text-primaryblue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-lightgray hover:text-primaryblue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="text-lightgray hover:text-primaryblue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
