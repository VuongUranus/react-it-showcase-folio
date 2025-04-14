
import React from 'react';
import { ArrowRight, Server, Database, Terminal, Cloud, GitBranch, HardDrive, Network, Smartphone, Globe } from 'lucide-react';
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

  // Define tech categories with their icons and technologies
  const techCategories = [
    {
      name: "Frontend",
      icon: <Terminal size={20} className="text-primaryblue" />,
      techs: ["React", "TypeScript", "Angular", "Tailwind CSS"]
    },
    {
      name: "Backend",
      icon: <Database size={20} className="text-primaryblue" />,
      techs: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      name: "DevOps",
      icon: <HardDrive size={20} className="text-primaryblue" />,
      techs: ["Docker", "Kubernetes", "AWS", "CI/CD"]
    },
    {
      name: "Mobile",
      icon: <Smartphone size={20} className="text-primaryblue" />,
      techs: ["React Native", "Flutter", "Swift", "Kotlin"]
    }
  ];

  const techImages = {
    "React": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "TypeScript": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    "Angular": "https://angular.io/assets/images/logos/angular/angular.svg",
    "Tailwind CSS": "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
    "Node.js": "https://nodejs.org/static/images/logo.svg",
    "Python": "https://www.python.org/static/community_logos/python-logo.png",
    "PostgreSQL": "https://www.postgresql.org/media/img/about/press/elephant.png",
    "MongoDB": "https://www.mongodb.com/assets/images/global/leaf.svg",
    "Docker": "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    "Kubernetes": "https://kubernetes.io/images/favicon.png",
    "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "CI/CD": "https://about.gitlab.com/images/ci/gitlab-ci-cd-logo_2x.png",
    "React Native": "https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/HEAD/images/react-native-logo.png",
    "Flutter": "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
    "Swift": "https://developer.apple.com/swift/images/swift-og.png",
    "Kotlin": "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png"
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
            viewport={{ once: true, margin: "-50px" }}
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
                {/* <TabsTrigger value="skills" className="data-[state=active]:bg-primaryblue data-[state=active]:text-white">Skills</TabsTrigger> */}
              </TabsList>

              <TabsContent value="experience" className="text-lightgray space-y-4">
                <motion.div
                  className="border-l-2 border-primaryblue pl-4 pb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="font-bold">Permanent employee at Mobile World Group (TheGioiDiDong)</h4>
                  <p className="text-sm text-primaryblue mb-1">Nov 2022 - Present</p>
                  <p>Led the development of scalable microservices with Golang and Kafka, improving system throughput by 40%.</p>
                </motion.div>
                <motion.div
                  className="border-l-2 border-gray-700 pl-4 pb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h4 className="font-bold">Fresher at Mobile World Group (TheGioiDiDong)</h4>
                  <p className="text-sm text-primaryblue mb-1">Jul 2022 - Nov 2022</p>
                  <p>Developed distributed data processing systems using PostgreSQL, ScyllaDB, and Elasticsearch.</p>
                </motion.div>
                {/* <motion.div 
                  className="border-l-2 border-gray-700 pl-4 pb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h4 className="font-bold">Junior DevOps Engineer</h4>
                  <p className="text-sm text-primaryblue mb-1">2020 - 2021</p>
                  <p>Implemented CI/CD pipelines and container orchestration for microservices architecture.</p>
                </motion.div> */}
              </TabsContent>

              <TabsContent value="education" className="text-lightgray space-y-4">
                <motion.div
                  className="border-l-2 border-primaryblue pl-4 pb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="font-bold">Bachelor's Degree in Software Engineering</h4>
                  <p className="text-sm text-primaryblue mb-1">Aug 2019 - Oct 2024</p>
                  <p>SaiGon University - SGU</p>
                </motion.div>
                {/* <motion.div 
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
                </motion.div> */}
              </TabsContent>

              {/* <TabsContent value="skills">
                <motion.div 
                  variants={containerVariants} 
                  initial="hidden" 
                  animate="visible"
                  className="grid grid-cols-2 gap-6"
                >
                  {techCategories.map((category, idx) => (
                    <motion.div 
                      key={category.name}
                      variants={itemVariants}
                      className="bg-black/20 p-4 rounded-lg border border-gray-800"
                    >
                      <h4 className="font-bold mb-3 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-primaryblue/20 flex items-center justify-center mr-2">
                          {category.icon}
                        </span>
                        {category.name}
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {category.techs.map((tech) => (
                          <motion.div
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="bg-black/30 rounded-md p-2 flex flex-col items-center hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all duration-300"
                          >
                            <div className="h-10 flex items-center justify-center mb-1">
                              <img 
                                src={techImages[tech as keyof typeof techImages]} 
                                alt={tech} 
                                className="h-8 w-auto object-contain"
                              />
                            </div>
                            <span className="text-xs font-medium">{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent> */}
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
              viewport={{ once: true, margin: "-50px" }}
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
                  <div className="text-3xl font-bold text-primaryblue">2+</div>
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
                  <div className="text-3xl font-bold text-primaryblue">10+</div>
                </div>
                <h4 className="text-xl font-medium mb-2">Company Project<br />Contributions</h4>
                <p className="text-lightgray text-sm">
                  Contributed to the development, maintenance, and optimization of internal company projects.
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
