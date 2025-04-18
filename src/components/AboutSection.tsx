
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
              <p className="dark:text-lightgray text-[#4B5563] mb-8 leading-relaxed">
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
              <TabsList className="grid grid-cols-3 mb-12 dark:bg-black/20 bg-[#F3F4F6]">
                <TabsTrigger value="experience" className="text-lg font-medium dark:data-[state=active]:bg-primaryblue data-[state=active]:bg-[#2563EB] data-[state=active]:text-white text-[#6B7280]">
                  <Briefcase size={16} className="mr-2" /> Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="text-lg font-medium dark:data-[state=active]:bg-primaryblue data-[state=active]:bg-[#2563EB] data-[state=active]:text-white text-[#6B7280]">
                  <GraduationCap size={16} className="mr-2" /> Education
                </TabsTrigger>
                <TabsTrigger value="skills" className="text-lg font-medium dark:data-[state=active]:bg-primaryblue data-[state=active]:bg-[#2563EB] data-[state=active]:text-white text-[#6B7280]">
                  <Code size={16} className="mr-2" /> Skills
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 dark:bg-black/20 bg-[#F3F4F6] rounded-xl border border-[#E5E7EB] dark:border-gray-800 hover:border-primaryblue/50 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-4">
                      <div className='w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0'>
                        <svg viewBox="0 0 146 146" fill="none">
                          <circle cx="73" cy="73" r="69.4082" stroke="#FFF0C1" stroke-width="2"></circle>
                          <circle cx="72.9999" cy="72.9999" r="60.2245" stroke="#FFF0C1" stroke-width="2"></circle>
                          <g filter="url(#filter0_d_322_11595)">
                            <circle cx="72.9999" cy="72.9998" r="52.0408" fill="#FFF0C1"></circle>
                            <path d="M109.735 72.9998C109.735 93.2914 93.2756 109.735 73.0064 109.735C52.7113 109.735 36.2653 93.2914 36.2653 72.9998C36.2653 52.7083 52.7243 36.2651 73.0064 36.2651C93.2756 36.2781 109.735 52.7083 109.735 72.9998Z" fill="#FFD400"></path>
                            <path d="M90.1936 53.4619L88.3145 60.446H95.3128L97.1919 53.4619H90.1936Z" fill="#010100"></path>
                            <path d="M70.9346 60.4319H63.9492L62.0701 67.416H69.0554L70.9346 60.4319Z" fill="#010100"></path>
                            <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
                            <path d="M62.084 67.4016H55.0986L53.2324 74.3857H60.2178L62.084 67.4016Z" fill="#010100"></path>
                            <path d="M77.7623 67.418L79.6415 60.4338H72.6432L70.777 67.418H77.7623Z" fill="#010100"></path>
                            <path d="M77.4255 69.062H70.4271L68.5609 76.0461H75.5592L77.4255 69.062Z" fill="#010100"></path>
                            <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
                            <path d="M57.6625 84.6865H64.6478L66.514 77.7024H59.5287L57.6625 84.6865Z" fill="#010100"></path>
                            <path d="M83.9192 77.7024H76.9209L75.0547 84.6865H82.04L83.9192 77.7024Z" fill="#010100"></path>
                            <path d="M48.8125 91.659H55.7979L57.6641 84.6619H50.6917L48.8125 91.659Z" fill="#010100"></path>
                            <path d="M80.1504 91.659H87.1487L89.0149 84.6619H82.0296L80.1504 91.659Z" fill="#010100"></path>
                            <path d="M83.3092 53.0325C83.3092 56.2201 80.7173 58.8116 77.5162 58.8116C74.3281 58.8116 71.7361 56.2201 71.7361 53.0325C71.7361 49.832 74.3281 47.2405 77.5162 47.2405C80.7173 47.2405 83.3092 49.832 83.3092 53.0325Z" fill="#010100"></path>
                          </g>
                          <g filter="url(#filter1_f_322_11595)">
                            <circle cx="110.092" cy="23.1531" r="17.5" fill="#FFE07D" fill-opacity="0.7"></circle>
                          </g>
                          <g filter="url(#filter2_f_322_11595)">
                            <circle cx="100" cy="131.592" r="10" fill="#FFE07D" fill-opacity="0.7"></circle>
                          </g>
                          <g filter="url(#filter3_f_322_11595)">
                            <circle cx="26.5" cy="33.0918" r="7.5" fill="#FFE07D" fill-opacity="0.7"></circle>
                          </g>
                          <defs>
                            <filter id="filter0_d_322_11595" x="0.959106" y="0.958984" width="144.082" height="144.082" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                              <feOffset></feOffset>
                              <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.745098 0 0 0 0 0.105882 0 0 0 0.5 0"></feColorMatrix>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_322_11595"></feBlend>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_322_11595" result="shape"></feBlend>
                            </filter>
                            <filter id="filter1_f_322_11595" x="88.5918" y="1.65308" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
                            </filter>
                            <filter id="filter2_f_322_11595" x="86" y="117.592" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
                            </filter>
                            <filter id="filter3_f_322_11595" x="15" y="21.5918" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Permanent employee</h3>
                        <p className="text-primaryblue">Mobile World Group (TheGioiDiDong)</p>
                      </div>
                    </div>
                    <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">Nov 2022 - Present</Badge>
                  </div>
                  <ul className="list-disc list-inside dark:text-lightgray text-[#4B5563] space-y-2 ml-4">
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
                  className="p-8 dark:bg-black/20 bg-[#F3F4F6] rounded-xl border border-[#E5E7EB] dark:border-gray-800 hover:border-primaryblue/50 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-4">
                      <div className='w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0'>
                        <svg viewBox="0 0 146 146" fill="none">
                          <circle cx="73" cy="73" r="69.4082" stroke="#FFF0C1" stroke-width="2"></circle>
                          <circle cx="72.9999" cy="72.9999" r="60.2245" stroke="#FFF0C1" stroke-width="2"></circle>
                          <g filter="url(#filter0_d_322_11595)">
                            <circle cx="72.9999" cy="72.9998" r="52.0408" fill="#FFF0C1"></circle>
                            <path d="M109.735 72.9998C109.735 93.2914 93.2756 109.735 73.0064 109.735C52.7113 109.735 36.2653 93.2914 36.2653 72.9998C36.2653 52.7083 52.7243 36.2651 73.0064 36.2651C93.2756 36.2781 109.735 52.7083 109.735 72.9998Z" fill="#FFD400"></path>
                            <path d="M90.1936 53.4619L88.3145 60.446H95.3128L97.1919 53.4619H90.1936Z" fill="#010100"></path>
                            <path d="M70.9346 60.4319H63.9492L62.0701 67.416H69.0554L70.9346 60.4319Z" fill="#010100"></path>
                            <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
                            <path d="M62.084 67.4016H55.0986L53.2324 74.3857H60.2178L62.084 67.4016Z" fill="#010100"></path>
                            <path d="M77.7623 67.418L79.6415 60.4338H72.6432L70.777 67.418H77.7623Z" fill="#010100"></path>
                            <path d="M77.4255 69.062H70.4271L68.5609 76.0461H75.5592L77.4255 69.062Z" fill="#010100"></path>
                            <path d="M86.4619 67.416L88.3411 60.4319H81.3557L79.4766 67.416H86.4619Z" fill="#010100"></path>
                            <path d="M57.6625 84.6865H64.6478L66.514 77.7024H59.5287L57.6625 84.6865Z" fill="#010100"></path>
                            <path d="M83.9192 77.7024H76.9209L75.0547 84.6865H82.04L83.9192 77.7024Z" fill="#010100"></path>
                            <path d="M48.8125 91.659H55.7979L57.6641 84.6619H50.6917L48.8125 91.659Z" fill="#010100"></path>
                            <path d="M80.1504 91.659H87.1487L89.0149 84.6619H82.0296L80.1504 91.659Z" fill="#010100"></path>
                            <path d="M83.3092 53.0325C83.3092 56.2201 80.7173 58.8116 77.5162 58.8116C74.3281 58.8116 71.7361 56.2201 71.7361 53.0325C71.7361 49.832 74.3281 47.2405 77.5162 47.2405C80.7173 47.2405 83.3092 49.832 83.3092 53.0325Z" fill="#010100"></path>
                          </g>
                          <g filter="url(#filter1_f_322_11595)">
                            <circle cx="110.092" cy="23.1531" r="17.5" fill="#FFE07D" fill-opacity="0.7"></circle>
                          </g>
                          <g filter="url(#filter2_f_322_11595)">
                            <circle cx="100" cy="131.592" r="10" fill="#FFE07D" fill-opacity="0.7"></circle>
                          </g>
                          <g filter="url(#filter3_f_322_11595)">
                            <circle cx="26.5" cy="33.0918" r="7.5" fill="#FFE07D" fill-opacity="0.7"></circle>
                          </g>
                          <defs>
                            <filter id="filter0_d_322_11595" x="0.959106" y="0.958984" width="144.082" height="144.082" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                              <feOffset></feOffset>
                              <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.745098 0 0 0 0 0.105882 0 0 0 0.5 0"></feColorMatrix>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_322_11595"></feBlend>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_322_11595" result="shape"></feBlend>
                            </filter>
                            <filter id="filter1_f_322_11595" x="88.5918" y="1.65308" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
                            </filter>
                            <filter id="filter2_f_322_11595" x="86" y="117.592" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
                            </filter>
                            <filter id="filter3_f_322_11595" x="15" y="21.5918" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_322_11595"></feGaussianBlur>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Fresher Developer</h3>
                        <p className="text-primaryblue">Mobile World Group (TheGioiDiDong)</p>
                      </div>
                    </div>
                    <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">Jul 2022 - Nov 2022</Badge>
                  </div>
                  <ul className="list-disc list-inside dark:text-lightgray text-[#4B5563] space-y-2 ml-4">
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
                  className="p-8 dark:bg-black/20 bg-[#F3F4F6] rounded-xl border border-[#E5E7EB] dark:border-gray-800 hover:border-primaryblue/50 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                        <img src="https://ttnnth-tinhoc.sgu.edu.vn/wp-content/uploads/2018/11/SGU-LOGO.png" alt="SGU" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Bachelor's Degree in Software Engineering</h3>
                        <p className="text-primaryblue">SaiGon University - SGU</p>
                      </div>
                    </div>
                    <Badge className="bg-primaryblue/20 text-primaryblue hover:bg-primaryblue/30">Aug 2019 - Oct 2024</Badge>
                  </div>
                  <p className="dark:text-lightgray text-[#4B5563] mb-4 mt-4">Major in Information Technology.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="dark:text-white text-[#4B5563]">GPA: 7.18/10</Badge>
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
