
import React from 'react';
import { ArrowRight, Server, Database, Terminal, Cloud, GitBranch, HardDrive, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="aboutSection" className="section-padding bg-black/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#17141430_1px,transparent_1px),linear-gradient(to_bottom,#17141430_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-primaryblue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primaryblue/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="vertical-line text-lg font-bold mb-4">ABOUT ME</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              I build scalable backend systems
            </h3>
            <p className="text-lightgray mb-6">
              I'm a passionate backend developer with nearly 3 years of experience creating 
              reliable, high-performance distributed systems. My expertise spans technologies like Golang,
              PostgreSQL, Elasticsearch, message brokers, and containerization solutions.
            </p>
            
            <Tabs defaultValue="experience" className="mt-8">
              <TabsList className="bg-black/30 mb-6">
                <TabsTrigger value="experience" className="data-[state=active]:bg-primaryblue data-[state=active]:text-white">Experience</TabsTrigger>
                <TabsTrigger value="education" className="data-[state=active]:bg-primaryblue data-[state=active]:text-white">Education</TabsTrigger>
                <TabsTrigger value="skills" className="data-[state=active]:bg-primaryblue data-[state=active]:text-white">Skills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience" className="text-lightgray space-y-4">
                <motion.div 
                  className="border-l-2 border-primaryblue pl-4 pb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="font-bold">Senior Backend Developer</h4>
                  <p className="text-sm text-primaryblue mb-1">2022 - Present</p>
                  <p>Led the development of scalable microservices with Golang and Kafka, improving system throughput by 40%.</p>
                </motion.div>
                <motion.div 
                  className="border-l-2 border-gray-700 pl-4 pb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h4 className="font-bold">Backend Engineer</h4>
                  <p className="text-sm text-primaryblue mb-1">2021 - 2022</p>
                  <p>Developed distributed data processing systems using PostgreSQL, ScyllaDB, and Elasticsearch.</p>
                </motion.div>
                <motion.div 
                  className="border-l-2 border-gray-700 pl-4 pb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h4 className="font-bold">Junior DevOps Engineer</h4>
                  <p className="text-sm text-primaryblue mb-1">2020 - 2021</p>
                  <p>Implemented CI/CD pipelines and container orchestration for microservices architecture.</p>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="education" className="text-lightgray space-y-4">
                <motion.div 
                  className="border-l-2 border-primaryblue pl-4 pb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="font-bold">Master's in Computer Science</h4>
                  <p className="text-sm text-primaryblue mb-1">2018 - 2020</p>
                  <p>University of Technology, Specialization in Distributed Systems</p>
                </motion.div>
                <motion.div 
                  className="border-l-2 border-gray-700 pl-4 pb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h4 className="font-bold">Bachelor's in Software Engineering</h4>
                  <p className="text-sm text-primaryblue mb-1">2014 - 2018</p>
                  <p>State University, Focus on Software Development</p>
                </motion.div>
                <motion.div 
                  className="border-l-2 border-gray-700 pl-4 pb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h4 className="font-bold">Professional Certifications</h4>
                  <p className="text-sm text-primaryblue mb-1">2020 - Present</p>
                  <p>Golang Advanced Developer, Kubernetes Administrator, AWS Solutions Architect</p>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="skills">
                <motion.div 
                  variants={containerVariants} 
                  initial="hidden" 
                  animate="visible"
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <Terminal size={18} className="mr-2 text-primaryblue" /> 
                      <span>Languages & Core</span>
                    </h4>
                    <ul className="list-none space-y-2">
                      {["Golang", "SQL", "Bash/Shell", "Python", "REST APIs"].map((item, i) => (
                        <motion.li 
                          key={i} 
                          variants={itemVariants}
                          className="flex items-center text-lightgray p-2 hover:bg-black/20 rounded-md transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-primaryblue rounded-full mr-2"></div>
                          <span className="flex-grow">{item}</span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, j) => (
                              <div 
                                key={j} 
                                className={`h-1 w-4 rounded-full ${j < (5 - i % 2) ? 'bg-primaryblue/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <Database size={18} className="mr-2 text-primaryblue" /> 
                      <span>Data & Storage</span>
                    </h4>
                    <ul className="list-none space-y-2">
                      {["PostgreSQL", "ScyllaDB", "Elasticsearch", "Hazelcast", "Redis"].map((item, i) => (
                        <motion.li 
                          key={i} 
                          variants={itemVariants}
                          className="flex items-center text-lightgray p-2 hover:bg-black/20 rounded-md transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-primaryblue rounded-full mr-2"></div>
                          <span className="flex-grow">{item}</span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, j) => (
                              <div 
                                key={j} 
                                className={`h-1 w-4 rounded-full ${j < (5 - i % 2) ? 'bg-primaryblue/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold mb-2 flex items-center">
                      <HardDrive size={18} className="mr-2 text-primaryblue" /> 
                      <span>Infrastructure</span>
                    </h4>
                    <ul className="list-none space-y-2">
                      {["Docker", "Kubernetes", "Jenkins", "Linux", "Airflow"].map((item, i) => (
                        <motion.li 
                          key={i} 
                          variants={itemVariants}
                          className="flex items-center text-lightgray p-2 hover:bg-black/20 rounded-md transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-primaryblue rounded-full mr-2"></div>
                          <span className="flex-grow">{item}</span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, j) => (
                              <div 
                                key={j} 
                                className={`h-1 w-4 rounded-full ${j < (4 - i % 2) ? 'bg-primaryblue/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold mb-2 flex items-center">
                      <Network size={18} className="mr-2 text-primaryblue" /> 
                      <span>Messaging & Monitoring</span>
                    </h4>
                    <ul className="list-none space-y-2">
                      {["Kafka", "NATS", "Grafana", "Graylog", "Prometheus"].map((item, i) => (
                        <motion.li 
                          key={i} 
                          variants={itemVariants}
                          className="flex items-center text-lightgray p-2 hover:bg-black/20 rounded-md transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-primaryblue rounded-full mr-2"></div>
                          <span className="flex-grow">{item}</span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, j) => (
                              <div 
                                key={j} 
                                className={`h-1 w-4 rounded-full ${j < (4 - i % 2) ? 'bg-primaryblue/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
            
            <Button variant="link" className="group text-white px-0 py-0 hover:no-underline mt-6" asChild>
              <a href="/about" className="flex items-center">
                More about me 
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
          
          <div className="flex flex-col gap-8">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3"
              alt="Developer workspace with code"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-black/30 p-6 rounded-lg border border-gray-800 hover:border-primaryblue hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <Server className="text-primaryblue mr-3" size={24} />
                  <div className="text-3xl font-bold text-primaryblue">3+</div>
                </div>
                <h4 className="text-xl font-medium mb-2">Years of<br />experience</h4>
                <p className="text-lightgray text-sm">
                  Building scalable backend systems and distributed applications.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-black/30 p-6 rounded-lg border border-gray-800 hover:border-primaryblue hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <GitBranch className="text-primaryblue mr-3" size={24} />
                  <div className="text-3xl font-bold text-primaryblue">20+</div>
                </div>
                <h4 className="text-xl font-medium mb-2">Open Source<br />Contributions</h4>
                <p className="text-lightgray text-sm">
                  Active contributor to the Golang ecosystem and tools.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
