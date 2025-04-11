
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-darkbg">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section - redesigned with animation */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-24 h-1 bg-primaryblue mb-10"></div>
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  Creative Developer<br />
                  <span className="text-primaryblue">& Designer</span>
                </h1>
                <p className="text-lightgray text-lg mb-10 leading-relaxed">
                  Experienced full stack developer with over 12 years in the industry.
                  Specializing in creating beautiful, functional websites and applications
                  that deliver exceptional user experiences with clean code and innovative solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 mb-8">
                  <div>
                    <div className="flex items-center">
                      <span className="text-5xl font-bold text-primaryblue">12</span>
                      <span className="text-primaryblue text-2xl font-bold ml-2">+</span>
                    </div>
                    <p className="text-sm text-lightgray mt-1">Years of<br />experience</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center">
                      <span className="text-5xl font-bold text-primaryblue">150</span>
                      <span className="text-primaryblue text-2xl font-bold ml-2">+</span>
                    </div>
                    <p className="text-sm text-lightgray mt-1">Successful<br />projects</p>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <span className="text-5xl font-bold text-primaryblue">80</span>
                      <span className="text-primaryblue text-2xl font-bold ml-2">+</span>
                    </div>
                    <p className="text-sm text-lightgray mt-1">Happy<br />clients</p>
                  </div>
                </div>
                
                <Button className="bg-primaryblue hover:bg-blue-600 mt-4" size="lg">
                  Download Resume
                </Button>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Decorative element */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-primaryblue/10 z-0"></div>
                  
                  {/* Main image with fancy border */}
                  <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primaryblue/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <img 
                      src="/lovable-uploads/c5509d48-3a36-4a3f-a77b-bc350953e2b8.png"
                      alt="John Carter"
                      className="w-80 h-96 object-cover"
                    />
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-primaryblue/10 z-0"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* About me section with tabs - enhanced design */}
        <section className="py-24 bg-black/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-2/5">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="outline" className="text-primaryblue border-primaryblue px-4 py-1 mb-6">ABOUT ME</Badge>
                  <h2 className="text-4xl font-bold mb-8 leading-tight">
                    Passionate Developer<br />
                    and Problem Solver
                  </h2>
                  <p className="text-lightgray mb-8 leading-relaxed">
                    I'm a full-stack developer who loves turning complex problems into elegant solutions. 
                    With expertise in modern front-end frameworks and robust back-end technologies, 
                    I build scalable applications that provide exceptional user experiences while meeting business goals.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-black/20 p-5 rounded-xl border border-gray-800">
                      <h3 className="text-xl font-bold mb-2">Frontend</h3>
                      <p className="text-lightgray text-sm">React, Angular, Vue, TypeScript, Tailwind CSS</p>
                    </div>
                    <div className="bg-black/20 p-5 rounded-xl border border-gray-800">
                      <h3 className="text-xl font-bold mb-2">Backend</h3>
                      <p className="text-lightgray text-sm">Node.js, Python, PostgreSQL, MongoDB, GraphQL</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:w-3/5">
                <Tabs defaultValue="experience" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-12 bg-black/20">
                    <TabsTrigger value="experience" className="text-lg font-medium data-[state=active]:bg-primaryblue">Experience</TabsTrigger>
                    <TabsTrigger value="education" className="text-lg font-medium data-[state=active]:bg-primaryblue">Education</TabsTrigger>
                    <TabsTrigger value="skills" className="text-lg font-medium data-[state=active]:bg-primaryblue">Skills</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="experience" className="space-y-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="p-8 bg-black/20 rounded-xl border border-gray-800"
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
                      className="p-8 bg-black/20 rounded-xl border border-gray-800"
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
                      className="p-8 bg-black/20 rounded-xl border border-gray-800"
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
                      className="p-8 bg-black/20 rounded-xl border border-gray-800"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">Master's in Computer Science</h3>
                          <p className="text-primaryblue">University of Technology</p>
                        </div>
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">2010 - 2012</Badge>
                      </div>
                      <p className="text-lightgray mb-4">Specialized in Advanced Web Technologies and Machine Learning.</p>
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
                      className="p-8 bg-black/20 rounded-xl border border-gray-800"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">Bachelor's in Software Engineering</h3>
                          <p className="text-primaryblue">State University</p>
                        </div>
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">2006 - 2010</Badge>
                      </div>
                      <p className="text-lightgray mb-4">Focus on Software Development and Database Management.</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-white">GPA: 3.8/4.0</Badge>
                        <Badge variant="outline" className="text-white">Academic Scholarship</Badge>
                        <Badge variant="outline" className="text-white">Computer Science Club President</Badge>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="p-8 bg-black/20 rounded-xl border border-gray-800"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">Web Development Certification</h3>
                          <p className="text-primaryblue">Advanced Web Technologies Institute</p>
                        </div>
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">2009</Badge>
                      </div>
                      <p className="text-lightgray mb-4">Comprehensive training in modern web development technologies and practices.</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-white">Top Student Award</Badge>
                        <Badge variant="outline" className="text-white">Case Study Competition Winner</Badge>
                      </div>
                    </motion.div>
                  </TabsContent>
                  
                  <TabsContent value="skills" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="p-8 bg-black/20 rounded-xl border border-gray-800"
                    >
                      <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="inline-block w-8 h-8 rounded-full bg-primaryblue/20 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primaryblue">
                            <path d="m7 8 10 8"></path>
                            <path d="m7 16 10-8"></path>
                          </svg>
                        </span>
                        Frontend Development
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">React / Next.js</span>
                            <span>95%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-primaryblue h-2 rounded-full" style={{ width: "95%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">TypeScript</span>
                            <span>90%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-primaryblue h-2 rounded-full" style={{ width: "90%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">Angular</span>
                            <span>85%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-primaryblue h-2 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">Vue.js</span>
                            <span>80%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-primaryblue h-2 rounded-full" style={{ width: "80%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">Tailwind CSS</span>
                            <span>95%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-primaryblue h-2 rounded-full" style={{ width: "95%" }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="p-8 bg-black/20 rounded-xl border border-gray-800"
                    >
                      <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="inline-block w-8 h-8 rounded-full bg-primaryblue/20 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primaryblue">
                            <path d="M20 4v9"></path>
                            <path d="M4 14v1"></path>
                            <path d="M20 13v1"></path>
                            <path d="M4 19v-6"></path>
                            <path d="M20 16v3"></path>
                            <path d="M4 4v7"></path>
                          </svg>
                        </span>
                        Backend Development
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">Node.js</span>
                            <span>90%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-primaryblue h-2 rounded-full" style={{ width: "90%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">Python / Django</span>
                            <span>85%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-primaryblue h-2 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">PostgreSQL / MongoDB</span>
                            <span>85%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-primaryblue h-2 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">GraphQL / REST</span>
                            <span>90%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-primaryblue h-2 rounded-full" style={{ width: "90%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-semibold">Docker / Kubernetes</span>
                            <span>75%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-primaryblue h-2 rounded-full" style={{ width: "75%" }}></div>
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
              <Badge variant="outline" className="text-primaryblue border-primaryblue px-4 py-1 mb-4">MY WORK</Badge>
              <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
              <p className="text-lightgray max-w-2xl mx-auto">
                A selection of my recent work across different industries and technologies.
                Each project represents unique challenges and innovative solutions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  viewport={{ once: true }}
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
                          <p className="text-gray-300 text-sm">Web Application Design & Development</p>
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
            </div>
            
            <div className="flex justify-center mt-12">
              <Button asChild className="bg-transparent border border-white hover:bg-white/10">
                <a href="/portfolio">View All Projects <ArrowRight size={16} className="ml-2" /></a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Work experience section - reimagined */}
        <section className="py-24 bg-black/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="text-primaryblue border-primaryblue px-4 py-1 mb-4">CAREER PATH</Badge>
              <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                <h2 className="text-4xl font-bold mb-6 md:mb-0">Professional<br />Experience</h2>
                <p className="text-lightgray md:max-w-md">
                  A journey of continuous learning and growth through various roles and projects,
                  each contributing to my development as a software professional.
                </p>
              </div>
            </motion.div>
            
            <div className="relative pl-6 md:pl-12 border-l-2 border-gray-700">
              <div className="space-y-24">
                {[
                  {
                    title: "Head of Engineering",
                    company: "Venture Technologies",
                    period: "2019 - PRESENT",
                    description: "Leading the development team for enterprise-scale web applications and digital transformation initiatives. Responsible for technical architecture, team management, and project delivery."
                  },
                  {
                    title: "Lead Frontend Developer",
                    company: "React Innovation Labs",
                    period: "2015 - 2019",
                    description: "Managed front-end development for client projects, focusing on performance optimization, responsive design, and cross-browser compatibility. Created reusable component libraries."
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Digital Studio",
                    period: "2012 - 2015",
                    description: "Developed and maintained client websites and web applications. Created custom CMS solutions and e-commerce platforms with focus on user experience and performance."
                  }
                ].map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[3.25rem] md:-left-[3.75rem] w-6 h-6 bg-primaryblue rounded-full border-4 border-darkbg"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      <div className="md:col-span-3">
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30 mb-2">{exp.period}</Badge>
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <p className="text-primaryblue">{exp.company}</p>
                      </div>
                      <div className="md:col-span-9">
                        <p className="text-lightgray mb-6">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {["React", "Node.js", "TypeScript", "MongoDB", "CI/CD"].map((tag, i) => (
                            <Badge key={i} variant="outline" className="text-white">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-24 bg-gradient-to-b from-transparent to-black/40">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="text-primaryblue border-primaryblue px-4 py-1 mb-4">TESTIMONIALS</Badge>
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
                  quote: "John delivered our project on time and exceeded our expectations. His technical skills and attention to detail are impressive."
                },
                {
                  name: "Michael Chen",
                  role: "CEO",
                  company: "Startup Inc.",
                  quote: "Working with John was a pleasure. He understood our business needs and translated them into an exceptional web application."
                },
                {
                  name: "Emily Rodriguez",
                  role: "Product Manager",
                  company: "Enterprise Solutions",
                  quote: "John's expertise in React and database optimization helped us reduce loading times by 60%. Our customers love the new experience."
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/20 border-gray-800 h-full flex flex-col">
                    <div className="p-8">
                      <svg className="text-primaryblue mb-6" width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 7H7C5.89543 7 5 7.89543 5 9V11C5 12.1046 5.89543 13 7 13H9C10.1046 13 11 13.8954 11 15V17C11 18.1046 10.1046 19 9 19H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 7H18C16.8954 7 16 7.89543 16 9V11C16 12.1046 16.8954 13 18 13H20C21.1046 13 22 13.8954 22 15V17C22 18.1046 21.1046 19 20 19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-lightgray mb-8 italic">{testimonial.quote}</p>
                      <div className="mt-auto">
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-primaryblue">{testimonial.role}</p>
                        <p className="text-sm text-gray-400">{testimonial.company}</p>
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
                <Badge variant="outline" className="text-primaryblue border-primaryblue px-4 py-1 mb-4">GET IN TOUCH</Badge>
                <h2 className="text-4xl font-bold mb-8">Let's work together on your next project</h2>
                <p className="text-lightgray mb-10">
                  I'm currently available for freelance work and new opportunities.
                  If you have a project that needs some creative thinking, I'd love to hear about it.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primaryblue/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primaryblue">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-semibold">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primaryblue/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primaryblue">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold">contact@johndoe.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primaryblue/20 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primaryblue">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M2 12h20"></path>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Website</p>
                      <p className="font-semibold">www.johndoe.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {["github", "twitter", "linkedin", "dribbble"].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors hover:bg-primaryblue"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {social === "github" && (
                          <>
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </>
                        )}
                        {social === "twitter" && (
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        )}
                        {social === "linkedin" && (
                          <>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </>
                        )}
                        {social === "dribbble" && (
                          <>
                            <circle cx="12" cy="12" r="10" />
                            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                          </>
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/30 p-8 rounded-2xl border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
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
                  <Button className="bg-primaryblue hover:bg-blue-600 w-full">Send Message</Button>
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
