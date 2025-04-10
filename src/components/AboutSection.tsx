
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutSection: React.FC = () => {
  return (
    <section id="aboutSection" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="vertical-line text-lg font-bold mb-4">ABOUT ME</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              I build amazing digital experiences
            </h3>
            <p className="text-lightgray mb-6">
              I'm a passionate full-stack developer with over 12 years of experience creating 
              powerful web applications. My expertise spans front-end technologies like React, 
              Angular, and Vue.js, as well as back-end technologies like Node.js, Python, and Ruby on Rails.
            </p>
            
            <Tabs defaultValue="experience" className="mt-8">
              <TabsList className="bg-black/30 mb-6">
                <TabsTrigger value="experience" className="data-[state=active]:bg-primaryblue data-[state=active]:text-white">Experience</TabsTrigger>
                <TabsTrigger value="education" className="data-[state=active]:bg-primaryblue data-[state=active]:text-white">Education</TabsTrigger>
                <TabsTrigger value="skills" className="data-[state=active]:bg-primaryblue data-[state=active]:text-white">Skills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience" className="text-lightgray space-y-4">
                <div className="border-l-2 border-primaryblue pl-4 pb-4">
                  <h4 className="font-bold">Senior Frontend Developer</h4>
                  <p className="text-sm text-primaryblue mb-1">2019 - Present</p>
                  <p>Led the development of various React-based web applications, improving performance by 40%.</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4 pb-4">
                  <h4 className="font-bold">Full Stack Developer</h4>
                  <p className="text-sm text-primaryblue mb-1">2015 - 2019</p>
                  <p>Developed and maintained various applications using React, Node.js, and MongoDB.</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4 pb-4">
                  <h4 className="font-bold">Web Developer</h4>
                  <p className="text-sm text-primaryblue mb-1">2012 - 2015</p>
                  <p>Created responsive websites and e-commerce platforms for diverse clients.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="education" className="text-lightgray space-y-4">
                <div className="border-l-2 border-primaryblue pl-4 pb-4">
                  <h4 className="font-bold">Master's in Computer Science</h4>
                  <p className="text-sm text-primaryblue mb-1">2010 - 2012</p>
                  <p>University of Technology, California</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4 pb-4">
                  <h4 className="font-bold">Bachelor's in Software Engineering</h4>
                  <p className="text-sm text-primaryblue mb-1">2006 - 2010</p>
                  <p>State University, California</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4 pb-4">
                  <h4 className="font-bold">Web Development Certification</h4>
                  <p className="text-sm text-primaryblue mb-1">2009</p>
                  <p>Advanced Web Technologies Institute</p>
                </div>
              </TabsContent>
              
              <TabsContent value="skills" className="text-lightgray">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Frontend</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>React / Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>Angular</li>
                      <li>Vue.js</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Backend</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Node.js</li>
                      <li>Python / Django</li>
                      <li>Ruby on Rails</li>
                      <li>PostgreSQL / MongoDB</li>
                      <li>GraphQL / REST</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <Button variant="link" className="group text-white px-0 py-0 hover:no-underline mt-6" asChild>
              <a href="/about" className="flex items-center">
                More about me 
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          <div className="flex flex-col gap-8">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3" 
              alt="Developer workspace"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 p-6 rounded-lg">
                <div className="text-4xl font-bold text-primaryblue mb-2">12</div>
                <h4 className="text-xl font-medium mb-2">Years of<br />experience</h4>
                <p className="text-lightgray text-sm">
                  Consistently delivering high-quality web applications and solutions.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <div className="text-4xl font-bold text-primaryblue mb-2">150+</div>
                <h4 className="text-xl font-medium mb-2">Successful<br />projects</h4>
                <p className="text-lightgray text-sm">
                  From small business websites to enterprise-level applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
