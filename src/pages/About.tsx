import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorkSection from '@/components/WorkSection';
import TechLogoGrid from '@/components/TechLogoGrid';
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
  Instagram,
  Smartphone,
  Server,
  Cloud,
  HardDrive,
  Award,
  FacebookIcon,
  ServerIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import TestimonialsSection from '@/components/TestimonialsSection';
import CertificatesSection from '@/components/CertificatesSection';
import AwardsSection from '@/components/AwardsSection';

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

  const techCategories = [
    {
      name: "Backend Development",
      icon: <Database size={16} className="text-primaryblue" />,
      technologies: [
        {
          name: "Golang",
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg"
        },
        {
          name: "PostgreSQL",
          logo: "/lovable-uploads/Postgresql_elephant.svg.png"
        },
        {
          name: "Kafka",
          logo: "/lovable-uploads/kafka.png"
        },
        {
          name: "Elasticsearch",
          logo: "/lovable-uploads/elasticsearch.png"
        },
        {
          name: "NATS",
          logo: "/lovable-uploads/nats.png"
        },
        {
          name: "ScyllaDB",
          logo: "/lovable-uploads/scylladb.webp"
        }
      ]
    },
    {
      name: "DevOps & Infrastructure",
      icon: <Server size={16} className="text-primaryblue" />,
      technologies: [
        {
          name: "Docker",
          logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
        },
        {
          name: "Jenkins",
          logo: "https://jenkins.io/images/logos/jenkins/jenkins.svg"
        },
        {
          name: "Linux",
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
        },
        {
          name: "Marathon",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglg-AyDQWfXZYydp2_lf0fdUoI1nFJ_dovg&s"
        }
      ]
    },
    {
      name: "Monitoring & Logging",
      icon: <Smartphone size={16} className="text-primaryblue" />,
      technologies: [
        {
          name: "Graylog",
          logo: "/lovable-uploads/graylog.png"
        },
        {
          name: "Prometheus",
          logo: "/lovable-uploads/prometheus.png"
        },
        {
          name: "Grafana",
          logo: "https://blog.kakaocdn.net/dn/MzHBg/btsDAvHdxhj/cPBFBbGRDsLg0yCWKzDpFK/img.png"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero section with parallax effect */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: "url('/lovable-uploads/macbook.jpg')",
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
                  Software <span className="text-gradient">Engineer</span><br />
                  <span className="text-primaryblue">&amp; Architect</span>
                </h1>
                <p className="text-lightgray text-lg mb-10 leading-relaxed">
                  I create exceptional digital experiences through clean code and innovative design,
                  focusing on creating scalable applications with an emphasis on performance and user experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 mb-8">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <div className="flex items-center">
                      <div className="relative">
                        <span className="text-5xl font-bold text-primaryblue">2</span>
                        <span className="text-primaryblue text-2xl font-bold ml-2 absolute top-0 right-[-20px]">+</span>
                      </div>
                    </div>
                    <p className="text-sm text-lightgray mt-1">Years of<br />experience</p>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <div className="flex items-center">
                      <div className="relative">
                        <span className="text-5xl font-bold text-primaryblue">5</span>
                        <span className="text-primaryblue text-2xl font-bold ml-2 absolute top-0 right-[-20px]">+</span>
                      </div>
                    </div>
                    <p className="text-sm text-lightgray mt-1">Company<br />projects</p>
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="default" size="lg">
                    Get My Resume
                  </Button>

                  <Button variant="secondary" size="lg"
                    onClick={() => window.location.href = '/portfolio'}
                  >
                    My Portfolio
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

                  <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primaryblue/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <div className={`transition-opacity duration-1000 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                      <img
                        src="/lovable-uploads/cv.png"
                        alt="Developer Portrait"
                        className="w-80 h-96 object-cover"
                        onLoad={() => setIsImageLoaded(true)}
                      />
                    </div>
                  </div>

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

                  <motion.div
                    className="absolute -right-16 top-10 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 z-10"
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
                      <div className="text-sm font-medium">Golang</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -left-16 bottom-12 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 z-10"
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
                        <ServerIcon size={16} className="text-primaryblue" />
                      </div>
                      <div className="text-sm font-medium">Software Engineer</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About me section with skills showcase */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#17141430_1px,transparent_1px),linear-gradient(to_bottom,#17141430_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-2/5">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">ABOUT ME</div>
                  <h2 className="text-4xl font-bold mb-8 leading-tight">
                    Passionate Developer<br />
                    and Problem Solver
                  </h2>
                  <p className="text-lightgray mb-8 leading-relaxed">
                    I’m a Software Engineer with nearly 3 years of experience in building distributed systems and designing
                    microservice architectures for real-time chat platforms. I focus on stability, performance, and scalability, and I
                    work primarily with Golang, PostgreSQL, Elasticsearch, Hazelcast, Kafka, and NATS. With a foundational
                    understanding of CI/CD processes, I manage system operations through logging and monitoring. Driven by a
                    growth mindset and a passion for programming, I aim to create impactful technology solutions while
                    advancing my career.
                  </p>

                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                  </div> */}
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
                          <h3 className="text-2xl font-bold">Permanent employee</h3>
                          <p className="text-primaryblue">Mobile World Group (TheGioiDiDong)</p>
                        </div>
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">Nov 2022 - Present</Badge>
                      </div>
                      <ul className="list-disc list-inside text-lightgray space-y-2 ml-4">
                        <li>I led the development of internal chat and customer support systems, greatly enhancing
                          communication and productivity.</li>
                        <li>I designed a secure WebSocket-based layer for virtual machine access (SSH, RDP, VNC),
                          enabling seamless operations.</li>
                        <li>Additionally, I implemented monitoring solutions using Graylog and Grafana for rapid issue
                          resolution and collaborated with cross-functional teams to deliver large-scale solutions that
                          surpassed our organizational goals...</li>
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
                          <h3 className="text-2xl font-bold">Fresher Developer</h3>
                          <p className="text-primaryblue">Mobile World Group (TheGioiDiDong)</p>
                        </div>
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">Jul 2022 - Nov 2022</Badge>
                      </div>
                      <ul className="list-disc list-inside text-lightgray space-y-2 ml-4">
                        <li>Implemented minor backend features and contributed to bug fixes in existing systems.</li>
                        <li>Supported senior engineers in designing and testing scalable APIs.</li>
                        <li>Participated in code reviews and team discussions, gradually gaining confidence in clean code and system design.</li>
                        <li>Actively learned and applied best practices in backend development and system design through real-world tasks.</li>
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
                            <h3 className="text-2xl font-bold">Bachelor's Degree in Software Engineering</h3>
                            <p className="text-primaryblue">SaiGon University - SGU</p>
                          </div>
                        </div>
                        <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">Aug 2019 - Oct 2024</Badge>
                      </div>
                      <p className="text-lightgray mb-4 mt-4">Major in Information Technology.</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-white">GPA: 7.18/10</Badge>
                        {/* <Badge variant="outline" className="text-white">Research Assistant</Badge> */}
                        {/* <Badge variant="outline" className="text-white">Dean's List</Badge> */}
                      </div>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="skills">
                    <TechLogoGrid categories={techCategories} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio showcase section */}
        <WorkSection />

        {/* Awards Section */}
        <AwardsSection />

        {/* Certificates Section */}
        <CertificatesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

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
                      <p className="font-semibold">+84 767 129 183</p>
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
                      <p className="font-semibold">minhvuongday@gmail.com</p>
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
                      <p className="font-semibold">www.doanminhvuong.com</p>
                    </div>
                  </motion.div>
                </div>

                <div className="flex gap-4">
                  {[
                    { name: "facebook", icon: <FacebookIcon size={18} />, link: "https://www.facebook.com/uranus.georgium" },
                    { name: "github", icon: <Github size={18} />, link: "https://github.com/VuongUranus" },
                    { name: "twitter", icon: <Twitter size={18} />, link: "https://x.com/onMinhVng10" },
                    { name: "linkedin", icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/doan-minh-vuong/" },
                    { name: "instagram", icon: <Instagram size={18} />, link: "https://www.instagram.com/min_vuon/" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target='_blank'
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
