
import React from 'react';
import { Building, Server, Database, Search, MessageSquare, Terminal, Package, GitBranch } from 'lucide-react';
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
    default:
      IconComponent = Building;
  }
  
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-black/20 border border-gray-800 rounded-lg p-6 hover:border-primaryblue hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primaryblue/20 flex items-center justify-center mr-4">
            <IconComponent size={24} className="text-primaryblue" />
          </div>
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-primaryblue">{period}</p>
          </div>
        </div>
        <p className="text-lightgray text-sm mt-2 mb-4">{description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="inline-block bg-primaryblue/10 text-primaryblue text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
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
  
  return (
    <section className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">MY EXPERIENCE</div>
          <h2 className="text-4xl font-bold mb-6">Professional Journey</h2>
          <p className="text-lightgray max-w-2xl mx-auto">
            My career as a backend engineer focusing on building scalable, high-performance systems.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Backend Tech Solutions" 
              icon="server"
              description="Led development of scalable microservices architecture with Golang, handling high-volume data processing pipelines and API integrations."
              period="2021 - Present"
              technologies={["Golang", "Kafka", "PostgreSQL", "Docker", "Kubernetes"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Data Systems Inc" 
              icon="database" 
              description="Developed and optimized database solutions for enterprise clients, implementing sharding strategies and performance tuning for large-scale systems."
              period="2020 - 2021"
              technologies={["PostgreSQL", "ScyllaDB", "Elasticsearch", "Hazelcast"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Cloud Infrastructure Services" 
              icon="terminal" 
              description="Implemented monitoring and logging solutions for cloud-based applications. Built automation tools for infrastructure deployment."
              period="2019 - 2020"
              technologies={["Golang", "Linux", "Grafana", "Graylog", "Jenkins"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Real-time Analytics Corp" 
              icon="search" 
              description="Designed and developed real-time analytics systems processing millions of events per minute using event-driven architecture."
              period="2018 - 2019"
              technologies={["Kafka", "NATS", "Elasticsearch", "Airflow"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="DevOps Innovations" 
              icon="git-branch" 
              description="Implemented CI/CD pipelines and containerization strategies for accelerating software delivery cycles."
              period="2017 - 2018"
              technologies={["Docker", "Jenkins", "Linux", "Bash"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Open Source Contributions" 
              icon="package" 
              description="Active contributor to several open source projects in the Golang ecosystem, focusing on performance optimizations and reliability."
              period="2017 - Present"
              technologies={["Golang", "Open Source", "Git"]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
