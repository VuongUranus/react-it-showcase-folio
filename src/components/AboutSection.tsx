
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
              👋 Hi, I'm a Backend & System Engineer
            </h3>
            <p className="text-lightgray mb-6">
              I'm a dedicated backend developer with nearly 3 years of experience building internal platforms, customer support tools, and infrastructure systems at scale. Currently working at Mobile World Group (TheGioiDiDong), I focus on backend architecture, WebSocket services, and internal tooling that powers daily operations for thousands of users.
            </p>

            <Tabs defaultValue="experience" className="mt-8">
              <TabsList className="bg-black/30 mb-6">
                <TabsTrigger value="experience" className="data-[state=active]:bg-primaryblue data-[state=active]:text-white">Experience</TabsTrigger>
                <TabsTrigger value="education" className="data-[state=active]:bg-primaryblue data-[state=active]:text-white">Education</TabsTrigger>
                {/* <TabsTrigger value="skills" className="data-[state=active]:bg-primaryblue data-[state=active]:text-white">Skills</TabsTrigger> */}
              </TabsList>

              <TabsContent value="experience" className="text-lightgray space-y-4">
                <div className="border-l-2 border-primaryblue pl-4 pb-4">
                  <h4 className="font-bold">Backend Developer — Mobile World Group (TheGioiDiDong)</h4>
                  <p className="text-sm text-primaryblue mb-1">Jul 2022 – Present</p>
                  <p>- Led backend development for real-time internal chat platform with thousands of concurrent users.</p>
                  <p>- Built scalable middleware for Zalo OA to enable automated support communication.</p>
                  <p>- Designed and implemented internal systems for remote VM access, real-time location tracking, and alert tools</p>
                  <p>- Worked with technologies like <strong>Golang</strong>, <strong>Python</strong>, <strong>ElasticSearch</strong>, <strong>WebSocket</strong>, <strong>Kafka</strong>, <strong>Hazelcast</strong>, <strong>Grafana</strong>, <strong>Graylog</strong>, and <strong>PostgreSQL</strong></p>
                </div>
                {/* <div className="border-l-2 border-gray-700 pl-4 pb-4">
                  <h4 className="font-bold">Full Stack Developer</h4>
                  <p className="text-sm text-primaryblue mb-1">2015 - 2019</p>
                  <p>Developed and maintained various applications using React, Node.js, and MongoDB.</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4 pb-4">
                  <h4 className="font-bold">Web Developer</h4>
                  <p className="text-sm text-primaryblue mb-1">2012 - 2015</p>
                  <p>Created responsive websites and e-commerce platforms for diverse clients.</p>
                </div> */}
              </TabsContent>

              <TabsContent value="education" className="text-lightgray space-y-4">
                <div className="border-l-2 border-primaryblue pl-4 pb-4">
                  <h4 className="font-bold">Bachelor's in Software Engineering</h4>
                  <p className="text-sm text-primaryblue mb-1">Aug 2019 - Oct 2024</p>
                  <p>SaiGon University, Vietnam</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4 pb-4">
                  <h4 className="font-bold">Programming with Golang</h4>
                  <p className="text-sm text-primaryblue mb-1">Apr 2025</p>
                  <p>Edureka, Coursera</p>
                </div>
                <div className="border-l-2 border-gray-700 pl-4 pb-4">
                  <h4 className="font-bold">Elasticsearch 8 and the Elastic Stack: In-Depth and Hands-On Specialization</h4>
                  <p className="text-sm text-primaryblue mb-1">Apr 2025</p>
                  <p>Packt, Coursera</p>
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
                <div className="text-4xl font-bold text-primaryblue mb-2">2+</div>
                <h4 className="text-xl font-medium mb-2">Years of<br />experience</h4>
                <p className="text-lightgray text-sm">
                  👨‍💻 Working with Golang and backend systems
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <div className="text-4xl font-bold text-primaryblue mb-2">10+</div>
                <h4 className="text-xl font-medium mb-2">Internal<br />projects</h4>
                <p className="text-lightgray text-sm">
                  Designed and deployed tools for enterprise use
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
