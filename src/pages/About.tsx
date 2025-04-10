
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h1 className="heading-line text-5xl md:text-6xl font-bold mb-10">About Me</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-lightgray text-lg mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat, diam ac
                  sagittis tincidunt, magna sapien accumsan arcu, eu aliquet elit metus sit amet felis.
                  Vivamus ut justo eget neque ultricies ultricies in sit amet risus.
                </p>
                <p className="text-lightgray text-lg mb-6">  
                  Etiam et porta dui. Integer vitae bibendum ex, ut volutpat turpis. Praesent quis
                  consequat elit. Quisque consequat est ut nisl ultricies, eu lobortis arcu scelerisque.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="border-primaryblue text-white hover:bg-primaryblue">Download CV</Button>
                  <Button className="bg-primaryblue hover:bg-primaryblue/90">Contact Me</Button>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">My Skills</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Frontend Development</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-primaryblue h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Backend Development</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-primaryblue h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">UI/UX Design</span>
                      <span>70%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-primaryblue h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">DevOps</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-primaryblue h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience section */}
        <section className="section-padding bg-black/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">My Experience</h2>
            
            <div className="space-y-10">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                <div className="lg:w-1/3">
                  <h3 className="text-xl font-bold text-primaryblue mb-1">Senior Frontend Developer</h3>
                  <p className="text-lightgray">2020 - Present</p>
                </div>
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-bold mb-2">Company Ltd.</h4>
                  <p className="text-lightgray mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat, diam ac
                    sagittis tincidunt, magna sapien accumsan arcu, eu aliquet elit metus sit amet felis.
                    Vivamus ut justo eget neque ultricies ultricies in sit amet risus.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                <div className="lg:w-1/3">
                  <h3 className="text-xl font-bold text-primaryblue mb-1">Frontend Developer</h3>
                  <p className="text-lightgray">2017 - 2020</p>
                </div>
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-bold mb-2">Studio Inc.</h4>
                  <p className="text-lightgray mb-4">
                    Etiam et porta dui. Integer vitae bibendum ex, ut volutpat turpis. Praesent quis
                    consequat elit. Quisque consequat est ut nisl ultricies, eu lobortis arcu scelerisque.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                <div className="lg:w-1/3">
                  <h3 className="text-xl font-bold text-primaryblue mb-1">UI/UX Designer</h3>
                  <p className="text-lightgray">2015 - 2017</p>
                </div>
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-bold mb-2">Venture Agency</h4>
                  <p className="text-lightgray mb-4">
                    Maecenas feugiat ante ut neque feugiat, ac tempus nisi luctus. Nullam quis turpis
                    cursus nisi gravida semper a eget dolor. Mauris quis risus interdum, dapibus mauris
                    eget, convallis nisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
