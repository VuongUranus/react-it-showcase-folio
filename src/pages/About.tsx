import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorkSection from '@/components/WorkSection';
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
  Instagram
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-darkbg">
      <Navbar />

      <main className="flex-1">
        {/* Hero section with parallax effect */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: "url('/lovable-uploads/71300caa-9de8-491a-8d75-c7ee392c731e.png')",
                transform: "scale(1.1)"
              }}
            ></div>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-24 h-1 bg-primaryblue mb-10"></div>
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  Creative <span className="text-gradient">Developer</span><br />
                  <span className="text-primaryblue">&amp; Designer</span>
                </h1>
                <p className="text-lightgray text-lg mb-10 leading-relaxed">
                  I create exceptional digital experiences through clean code and innovative design,
                  focusing on creating scalable applications with an emphasis on performance and user experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 mb-8">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <div className="flex items-center">
                      <div className="relative">
                        <span className="text-5xl font-bold text-primaryblue">12</span>
                        <span className="text-primaryblue text-2xl font-bold ml-2 absolute top-0 right-[-20px]">+</span>
                      </div>
                    </div>
                    <p className="text-sm text-lightgray mt-1">Years of<br />experience</p>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <div className="flex items-center">
                      <div className="relative">
                        <span className="text-5xl font-bold text-primaryblue">150</span>
                        <span className="text-primaryblue text-2xl font-bold ml-2 absolute top-0 right-[-20px]">+</span>
                      </div>
                    </div>
                    <p className="text-sm text-lightgray mt-1">Successful<br />projects</p>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <div className="flex items-center">
                      <div className="relative">
                        <span className="text-5xl font-bold text-primaryblue">80</span>
                        <span className="text-primaryblue text-2xl font-bold ml-2 absolute top-0 right-[-20px]">+</span>
                      </div>
                    </div>
                    <p className="text-sm text-lightgray mt-1">Happy<br />clients</p>
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-primaryblue hover:bg-blue-600 transition-colors" size="lg">
                    Download Resume
                  </Button>

                  <Button variant="outline" className="border-white/30 hover:bg-white/10 transition-colors" size="lg">
                    My Portfolio <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="lg:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Decorative element - animated floating circles */}
                  <motion.div
                    className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primaryblue/10 z-0"
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  ></motion.div>

                  {/* Main image with fancy border */}
                  <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primaryblue/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <div className={`transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                      <img
                        src="/lovable-uploads/c5509d48-3a36-4a3f-a77b-bc350953e2b8.png"
                        alt="Developer Portrait"
                        className="w-80 h-96 object-cover"
                        onLoad={() => setIsImageLoaded(true)}
                      />
                    </div>
                  </div>

                  {/* Decorative element - animated floating circles */}
                  <motion.div
                    className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primaryblue/10 z-0"
                    animate={{
                      y: [0, 15, 0],
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  ></motion.div>

                  {/* Tech stack badges floating */}
                  <motion.div
                    className="absolute -right-16 top-10 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primaryblue/20 flex items-center justify-center">
                        <Code size={16} className="text-primaryblue" />
                      </div>
                      <div className="text-sm font-medium">React Dev</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -left-16 bottom-12 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10"
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primaryblue/20 flex items-center justify-center">
                        <PaintBucket size={16} className="text-primaryblue" />
                      </div>
                      <div className="text-sm font-medium">UI Designer</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About me section with skills showcase */}
        <section className="py-24 bg-black/30 relative overflow-hidden">
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#17141430_1px,transparent_1px),linear-gradient(to_bottom,#17141430_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-2/5">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">ABOUT ME</div>
                  <h2 className="text-4xl font-bold mb-8 leading-tight">
                    Passionate Developer<br />
                    and Problem Solver
                  </h2>
                  <p className="text-lightgray mb-8 leading-relaxed">
                    I'm a full-stack developer who loves turning complex problems into elegant solutions.
                    With expertise in modern front-end frameworks and robust back-end technologies,
                    I build scalable applications that provide exceptional user experiences while meeting business goals.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="bg-black/20 p-5 rounded-xl border border-gray-800 hover:border-primaryblue hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-primaryblue/20 flex items-center justify-center mb-4">
                        <Code size={20} className="text-primaryblue" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Frontend</h3>
                      <p className="text-lightgray text-sm">React, Angular, Vue, TypeScript, Tailwind CSS</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="bg-black/20 p-5 rounded-xl border border-gray-800 hover:border-primaryblue hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-primaryblue/20 flex items-center justify-center mb-4">
                        <Database size={20} className="text-primaryblue" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Backend</h3>
                      <p className="text-lightgray text-sm">Node.js, Python, PostgreSQL, MongoDB, GraphQL</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className="lg:w-3/5">
                <Tabs defaultValue="experience" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-12 bg-black/20">
                    <TabsTrigger value="experience" className="text-lg font-medium data-[state=active]:bg-primaryblue">
                      <Briefcase size={16} className="mr-2" /> Experience
                    </TabsTrigger>
                    <TabsTrigger value="education" className="text-lg font-medium data-[state=active]:bg-primaryblue">
                      <GraduationCap size={16} className="mr-2" /> Education
                    </TabsTrigger>
                    <TabsTrigger value="skills" className="text-lg font-medium data-[state=active]:bg-primaryblue">
                      <Code size={16} className="mr-2" /> Skills
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="experience" className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="p-8 bg-black/20 rounded-xl border border-gray-800 hover:border-primaryblue/50 transition-colors duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">Senior Frontend Developer</h3>
                          <p className="text-primaryblue">Venture Technologies</p>
                        </div>
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">2019 - Present</Badge>
                      </div>
                      <ul className="list-disc list-inside text-lightgray space-y-2 ml-4">
                        <li>Led a team of 5 developers to create responsive web applications</li>
                        <li>Improved application performance by 40% through code optimization</li>
                        <li>Implemented CI/CD pipelines that reduced deployment time by 60%</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="p-8 bg-black/20 rounded-xl border border-gray-800 hover:border-primaryblue/50 transition-colors duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                          <p className="text-primaryblue">React Innovation Labs</p>
                        </div>
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">2015 - 2019</Badge>
                      </div>
                      <ul className="list-disc list-inside text-lightgray space-y-2 ml-4">
                        <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
                        <li>Implemented RESTful APIs and GraphQL endpoints for better data fetching</li>
                        <li>Collaborated with designers to implement pixel-perfect UI components</li>
                        <li>Managed deployments and server configurations for multiple projects</li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="p-8 bg-black/20 rounded-xl border border-gray-800 hover:border-primaryblue/50 transition-colors duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">Web Developer</h3>
                          <p className="text-primaryblue">Digital Studio</p>
                        </div>
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">2012 - 2015</Badge>
                      </div>
                      <ul className="list-disc list-inside text-lightgray space-y-2 ml-4">
                        <li>Created responsive websites and e-commerce platforms for diverse clients</li>
                        <li>Optimized websites for SEO and performance</li>
                        <li>Implemented payment gateways and shopping cart functionality</li>
                        <li>Provided technical support and maintenance for client websites</li>
                      </ul>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="education" className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="p-8 bg-black/20 rounded-xl border border-gray-800 hover:border-primaryblue/50 transition-colors duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-xl bg-primaryblue/20 flex items-center justify-center flex-shrink-0">
                            <GraduationCap size={28} className="text-primaryblue" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">Master's in Computer Science</h3>
                            <p className="text-primaryblue">University of Technology</p>
                          </div>
                        </div>
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">2010 - 2012</Badge>
                      </div>
                      <p className="text-lightgray mb-4 mt-4">Specialized in Advanced Web Technologies and Machine Learning.</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-white">GPA: 3.9/4.0</Badge>
                        <Badge variant="outline" className="text-white">Research Assistant</Badge>
                        <Badge variant="outline" className="text-white">Dean's List</Badge>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="p-8 bg-black/20 rounded-xl border border-gray-800 hover:border-primaryblue/50 transition-colors duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-xl bg-primaryblue/20 flex items-center justify-center flex-shrink-0">
                            <GraduationCap size={28} className="text-primaryblue" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">Bachelor's in Software Engineering</h3>
                            <p className="text-primaryblue">State University</p>
                          </div>
                        </div>
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">2006 - 2010</Badge>
                      </div>
                      <p className="text-lightgray mb-4 mt-4">Focus on Software Development and Database Management.</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-white">GPA: 3.8/4.0</Badge>
                        <Badge variant="outline" className="text-white">Academic Scholarship</Badge>
                        <Badge variant="outline" className="text-white">Computer Science Club President</Badge>
                      </div>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="skills" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="p-8 bg-black/20 rounded-xl border border-gray-800 hover:border-primaryblue/50 transition-colors duration-300"
                    >
                      <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="inline-block w-8 h-8 rounded-full bg-primaryblue/20 flex items-center justify-center mr-3">
                          <Terminal size={16} className="text-primaryblue" />
                        </span>
                        Frontend Development
                      </h3>

                      <div className="space-y-6">
                        <div className="group transition-all duration-300 hover:bg-black/30 p-3 rounded-lg">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                              <Code size={12} className="text-blue-500" />
                            </div>
                            <span className="font-semibold">React / Next.js</span>
                          </div>
                          <div className="flex mt-2 gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className={`h-1.5 rounded-full flex-1 ${i < 5 ? 'bg-blue-500/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="group transition-all duration-300 hover:bg-black/30 p-3 rounded-lg">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                              <Terminal size={12} className="text-blue-500" />
                            </div>
                            <span className="font-semibold">TypeScript</span>
                          </div>
                          <div className="flex mt-2 gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className={`h-1.5 rounded-full flex-1 ${i < 5 ? 'bg-blue-500/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="group transition-all duration-300 hover:bg-black/30 p-3 rounded-lg">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                              <MonitorSmartphone size={12} className="text-blue-500" />
                            </div>
                            <span className="font-semibold">Angular</span>
                          </div>
                          <div className="flex mt-2 gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className={`h-1.5 rounded-full flex-1 ${i < 4 ? 'bg-blue-500/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="group transition-all duration-300 hover:bg-black/30 p-3 rounded-lg">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center">
                              <Globe size={12} className="text-blue-500" />
                            </div>
                            <span className="font-semibold">Tailwind CSS</span>
                          </div>
                          <div className="flex mt-2 gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className={`h-1.5 rounded-full flex-1 ${i < 5 ? 'bg-blue-500/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="p-8 bg-black/20 rounded-xl border border-gray-800 hover:border-primaryblue/50 transition-colors duration-300"
                    >
                      <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="inline-block w-8 h-8 rounded-full bg-primaryblue/20 flex items-center justify-center mr-3">
                          <Database size={16} className="text-primaryblue" />
                        </span>
                        Backend Development
                      </h3>

                      <div className="space-y-6">
                        <div className="group transition-all duration-300 hover:bg-black/30 p-3 rounded-lg">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center">
                              <Terminal size={12} className="text-green-500" />
                            </div>
                            <span className="font-semibold">Node.js</span>
                          </div>
                          <div className="flex mt-2 gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className={`h-1.5 rounded-full flex-1 ${i < 4 ? 'bg-green-500/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="group transition-all duration-300 hover:bg-black/30 p-3 rounded-lg">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center">
                              <Terminal size={12} className="text-green-500" />
                            </div>
                            <span className="font-semibold">Python / Django</span>
                          </div>
                          <div className="flex mt-2 gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className={`h-1.5 rounded-full flex-1 ${i < 4 ? 'bg-green-500/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="group transition-all duration-300 hover:bg-black/30 p-3 rounded-lg">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center">
                              <Database size={12} className="text-green-500" />
                            </div>
                            <span className="font-semibold">PostgreSQL / MongoDB</span>
                          </div>
                          <div className="flex mt-2 gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className={`h-1.5 rounded-full flex-1 ${i < 4 ? 'bg-green-500/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="group transition-all duration-300 hover:bg-black/30 p-3 rounded-lg">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="w-6 h-6 rounded-full bg-green-600/20 flex items-center justify-center">
                              <Globe size={12} className="text-green-500" />
                            </div>
                            <span className="font-semibold">Docker / Kubernetes</span>
                          </div>
                          <div className="flex mt-2 gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className={`h-1.5 rounded-full flex-1 ${i < 3 ? 'bg-green-500/40' : 'bg-gray-700'}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        
        {/* Work Experience Section */}
        <WorkSection />
        
        {/* Portfolio showcase section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">MY WORK</div>
              <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
              <p className="text-lightgray max-w-2xl mx-auto">
                A selection of my recent work across different industries and technologies.
                Each project represents unique challenges and innovative solutions.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeInUp}
                  className="group"
                >
                  <Card className="overflow-hidden border-gray-800 bg-black/30 transition-all duration-300 hover:border-primaryblue hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={`/lovable-uploads/49493ab1-737b-4e21-a11d-5c399fed5bfd.png`}
                        alt={`Project ${item}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6">
                          <div className="flex gap-2 mb-3">
                            <Badge className="bg-primaryblue">React</Badge>
                            <Badge className="bg-gray-700">TypeScript</Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-1">{`Project Title ${item}`}</h3>
                          <p className="text-lightgray text-sm">Web Application Design & Development</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{`Project Title ${item}`}</h3>
                      <p className="text-lightgray mb-4 text-sm">
                        A modern web application with advanced features and optimized performance.
                      </p>
                      <Button variant="link" className="group text-primaryblue px-0 hover:no-underline">
                        View Project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center mt-12">
              <Button asChild className="bg-transparent border border-white hover:bg-white/10">
                <a href="/portfolio">View All Projects <ArrowRight size={16} className="ml-2" /></a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-24 bg-black/30 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-primaryblue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primaryblue/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">TESTIMONIALS</div>
              <h2 className="text-4xl font-bold mb-6">Client Feedback</h2>
              <p className="text-lightgray max-w-2xl mx-auto">
                Here's what some of my clients have to say about working with me
                and the solutions I've delivered for their businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Marketing Director",
                  company: "TechVision",
                  quote: "John delivered our project on time and exceeded our expectations. His technical skills and attention to detail are impressive.",
                  avatar: "/lovable-uploads/3561bad0-99ed-4032-a5f6-d83e8406d5ec.png"
                },
                {
                  name: "Michael Chen",
                  role: "CEO",
                  company: "Startup Inc.",
                  quote: "Working with John was a pleasure. He understood our business needs and translated them into an exceptional web application.",
                  avatar: "/lovable-uploads/71300caa-9de8-491a-8d75-c7ee392c731e.png"
                },
                {
                  name: "Emily Rodriguez",
                  role: "Product Manager",
                  company: "Enterprise Solutions",
                  quote: "John's expertise in React and database optimization helped us reduce loading times by 60%. Our customers love the new experience.",
                  avatar: "/lovable-uploads/d165c27c-687a-4a1a-92f4-51428329364b.png"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-black/20 border-gray-800 h-full flex flex-col hover:border-primaryblue/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-primaryblue text-sm">{testimonial.role}</p>
                        </div>
                      </div>

                      <svg className="text-primaryblue mb-6 opacity-40" width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 7H7C5.89543 7 5 7.89543 5 9V11C5 12.1046 5.89543 13 7 13H9C10.1046 13 11 13.8954 11 15V17C11 18.1046 10.1046 19 9 19H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 7H18C16.8954 7 16 7.89543 16 9V11C16 12.1046 16.8954 13 18 13H20C21.1046 13 22 13.8954 22 15V17C22 18.1046 21.1046 19 20 19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      <p className="text-lightgray mb-8 italic">{testimonial.quote}</p>

                      <div className="flex items-center mt-auto">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm text-gray-400 ml-2">{testimonial.company}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">GET IN TOUCH</div>
                <h2 className="text-4xl font-bold mb-8">Let's work together on your next project</h2>
                <p className="text-lightgray mb-10">
                  I'm currently available for freelance work and new opportunities.
                  If you have a project that needs some creative thinking, I'd love to hear about it.
                </p>

                <div className="space-y-6 mb-8">
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primaryblue/20 flex items-center justify-center mr-4">
                      <Phone size={20} className="text-primaryblue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-semibold">+1 (555) 123-4567</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primaryblue/20 flex items-center justify-center mr-4">
                      <Mail size={20} className="text-primaryblue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold">contact@johndoe.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primaryblue/20 flex items-center justify-center mr-4">
                      <Globe size={20} className="text-primaryblue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Website</p>
                      <p className="font-semibold">www.johndoe.com</p>
                    </div>
                  </motion.div>
                </div>

                <div className="flex gap-4">
                  {[
                    { name: "github", icon: <Github size={18} /> },
                    { name: "twitter", icon: <Twitter size={18} /> },
                    { name: "linkedin", icon: <Linkedin size={18} /> },
                    { name: "instagram", icon: <Instagram size={18} /> }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-primaryblue"
                      whileHover={{ y: -5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/30 p-8 rounded-2xl border border-gray-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primaryblue/20 flex items-center justify-center mr-3">
                    <Mail size={16} className="text-primaryblue" />
                  </div>
                  Send me a message
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full p-3 bg-black/30 border border-gray-700 rounded-lg focus:border-primaryblue focus:ring-1 focus:ring-primaryblue outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full p-3 bg-black/30 border border-gray-700 rounded-lg focus:border-primaryblue focus:ring-1 focus:ring-primaryblue outline-none transition"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-black/30 border border-gray-700 rounded-lg focus:border-primaryblue focus:ring-1 focus:ring-primaryblue outline-none transition"
                      placeholder="Project discussion"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Message</label>
                    <textarea
                      className="w-full p-3 bg-black/30 border border-gray-700 rounded-lg focus:border-primaryblue focus:ring-1 focus:ring-primaryblue outline-none transition h-32 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="bg-primaryblue hover:bg-blue-600 w-full">Send Message</Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
