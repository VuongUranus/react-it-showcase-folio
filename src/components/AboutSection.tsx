
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
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
  SquareActivity,
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
import { Badge } from '@/components/ui/badge';
import TechLogoGrid from '@/components/TechLogoGrid';

const AboutSection: React.FC = () => {
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
      icon: <SquareActivity size={16} className="text-primaryblue" />,
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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 "></div>

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
  )
};

export default AboutSection;
