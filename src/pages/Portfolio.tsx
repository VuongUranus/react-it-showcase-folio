
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, DollarSign } from 'lucide-react';

// Updated portfolio project data with more details
const projects = [
  {
    id: 1,
    title: "Crypto Website Development for DeFi X",
    slug: "internal-chat-application",
    category: "Web Development",
    tags: ["React JS", "Web Development"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    icon: <DollarSign className="text-white" />,
    client: "DeFi X",
    description: "A modern cryptocurrency platform designed to democratize investment for all crypto holders."
  },
  {
    id: 2,
    title: "Agency Website Development for Dev X",
    slug: "dev-x",
    category: "Web Development",
    tags: ["React JS", "Web Development"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    icon: <Code className="text-white" />,
    client: "Dev X",
    description: "A professional agency website showcasing services, resources and portfolio projects."
  },
  {
    id: 3,
    title: "Social Media App",
    slug: "social-media-app",
    category: "Mobile App",
    tags: ["Mobile App", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
    client: "ConnectMe",
    description: "A feature-rich social media application focused on community building and content sharing."
  },
  {
    id: 4,
    title: "Travel Booking Website",
    slug: "travel-booking",
    category: "Web Development",
    tags: ["Web Development", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3",
    client: "TravelEase",
    description: "An intuitive travel booking platform with advanced filtering and reservation capabilities."
  },
  {
    id: 5,
    title: "Task Management Tool",
    slug: "task-management",
    category: "SaaS",
    tags: ["SaaS", "Web Development"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    client: "TaskMaster",
    description: "A comprehensive task management solution for teams and individuals to improve productivity."
  },
  {
    id: 6,
    title: "Healthcare Portal",
    slug: "healthcare-portal",
    category: "Web Development",
    tags: ["Web Development", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    client: "MediCare",
    description: "A secure healthcare portal allowing patients to access records and schedule appointments."
  }
];

const categories = ["All", "Web Development", "UI/UX Design", "Mobile App", "SaaS"];

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <motion.span
      className="px-4 py-2 rounded-full bg-gray-800 text-lightgray text-sm"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(59,130,246,0.2)" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {label}
    </motion.span>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-[#1e2230] rounded-lg overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
    >
      <div className="p-6">
        <motion.div
          className="flex items-center mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.div
            className="h-12 w-12 rounded-full bg-[#3b82f6] flex items-center justify-center mr-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            {project.icon || <div className="h-6 w-6 bg-white rounded-full" />}
          </motion.div>
          <motion.h3
            className="text-xl font-medium"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {project.client}
          </motion.h3>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {project.title}
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {project.tags?.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </motion.div>
      </div>

      <div className="mt-auto relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <Link
          to={`/portfolio/${project.slug}`}
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <motion.span
            className="bg-primaryblue text-white px-6 py-3 rounded-md font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0
    }
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-black"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />

      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Portfolio
            </motion.h1>
            <motion.p
              className="text-lightgray text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Showcasing my best work across web development, design, and application projects.
              Each project represents unique challenges and innovative solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-full ${filter === category
                      ? 'bg-primaryblue text-white'
                      : 'bg-gray-800 text-lightgray hover:bg-gray-700'
                    } transition-colors`}
                  onClick={() => setFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={{
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="initial"
              animate="animate"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Portfolio;
