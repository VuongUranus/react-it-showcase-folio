
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  return (
    <section id="aboutSection" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="vertical-line text-lg font-bold mb-4">ABOUT ME</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              I've been developing websites since 2010
            </h3>
            <p className="text-lightgray mb-6">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum aute irure dolor
              in reprehenderit in voluptate velit esse cilum dolore eu fugiat.
            </p>
            <Button variant="link" className="group text-white px-0 py-0 hover:no-underline" asChild>
              <a href="/about" className="flex items-center">
                More about me 
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="text-6xl font-bold text-primaryblue mb-2">12</div>
              <h4 className="text-xl font-medium mb-6">Years of<br />experience</h4>
              <p className="text-lightgray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div className="flex-1">
              <div className="text-6xl font-bold text-primaryblue mb-2">150</div>
              <h4 className="text-xl font-medium mb-6">Successful<br />projects</h4>
              <p className="text-lightgray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
