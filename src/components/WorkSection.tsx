
import React from 'react';
import { 
  Building, 
  Server, 
  Database, 
  Search, 
  MessageSquare, 
  Terminal, 
  Package, 
  GitBranch,
  Cloud,
  Cpu,
  HardDrive,
  Network,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';

const CompanyLogo: React.FC<{ 
  name: string;
  icon: string;
  description: string;
  period: string;
  technologies: string[];
}> = ({ name, icon, description, period, technologies }) => {
  let IconComponent;
  
  switch(icon) {
    case "building":
      IconComponent = Building;
      break;
    case "server":
      IconComponent = Server;
      break;
    case "database":
      IconComponent = Database;
      break;
    case "search":
      IconComponent = Search;
      break;
    case "message-square":
      IconComponent = MessageSquare;
      break;
    case "terminal":
      IconComponent = Terminal;
      break;
    case "package":
      IconComponent = Package;
      break;
    case "git-branch":
      IconComponent = GitBranch;
      break;
    case "cloud":
      IconComponent = Cloud;
      break;
    case "cpu":
      IconComponent = Cpu;
      break;
    case "hard-drive":
      IconComponent = HardDrive;
      break;
    case "network":
      IconComponent = Network;
      break;
    case "settings":
      IconComponent = Settings;
      break;
    default:
      IconComponent = Building;
  }
  
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-black/20 border border-gray-800 rounded-lg p-6 hover:border-primaryblue hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 
            }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-full bg-primaryblue/20 flex items-center justify-center mr-4"
          >
            <IconComponent size={24} className="text-primaryblue" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-primaryblue">{period}</p>
          </motion.div>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lightgray text-sm mt-2 mb-4"
        >
          {description}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-auto"
        >
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(59,130,246,0.3)" }}
                className="inline-block bg-primaryblue/10 text-primaryblue text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const WorkSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
  return (
    <section className="py-24 bg-black/20 relative overflow-hidden">
      {/* Animated decorative background elements */}
      <motion.div 
        animate={floatingAnimation} 
        className="absolute top-0 right-0 w-96 h-96 bg-primaryblue/5 rounded-full blur-[100px] -z-10"
      ></motion.div>
      <motion.div 
        animate={{
          y: [0, 15, 0],
          transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }
        }} 
        className="absolute bottom-0 left-0 w-80 h-80 bg-primaryblue/5 rounded-full blur-[100px] -z-10"
      ></motion.div>
      
      {/* Grid pattern background with slight animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#17141430_1px,transparent_1px),linear-gradient(to_bottom,#17141430_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            viewport={{ once: true }}
            className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm"
          >
            MY EXPERIENCE
          </motion.div>
          <h2 className="text-4xl font-bold mb-6">Professional Journey</h2>
          <p className="text-lightgray max-w-2xl mx-auto">
            My career as a backend engineer focusing on building scalable, high-performance systems using Golang and modern technologies.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Cloud Infrastructure Services" 
              icon="server"
              description="Led development of scalable microservices architecture with Golang, handling high-volume data processing pipelines and API integrations."
              period="2022 - Present"
              technologies={["Golang", "Kafka", "PostgreSQL", "Docker", "Kubernetes"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Data Systems Inc" 
              icon="database" 
              description="Developed and optimized database solutions for enterprise clients, implementing sharding strategies and performance tuning for large-scale systems."
              period="2021 - 2022"
              technologies={["PostgreSQL", "ScyllaDB", "Elasticsearch", "Hazelcast"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="DevOps Solutions" 
              icon="terminal" 
              description="Implemented monitoring and logging solutions for cloud-based applications. Built automation tools for infrastructure deployment."
              period="2020 - 2021"
              technologies={["Golang", "Linux", "Grafana", "Graylog", "Jenkins"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Real-time Analytics Corp" 
              icon="search" 
              description="Designed and developed real-time analytics systems processing millions of events per minute using event-driven architecture."
              period="2020 - Present"
              technologies={["Kafka", "NATS", "Elasticsearch", "Airflow"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Container Orchestration Team" 
              icon="hard-drive" 
              description="Implemented CI/CD pipelines and containerization strategies for accelerating software delivery cycles of microservices."
              period="2021 - Present"
              technologies={["Docker", "Jenkins", "Linux", "Bash"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Open Source Contributions" 
              icon="git-branch" 
              description="Active contributor to several open source projects in the Golang ecosystem, focusing on performance optimizations and reliability."
              period="2020 - Present"
              technologies={["Golang", "Open Source", "Git"]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
