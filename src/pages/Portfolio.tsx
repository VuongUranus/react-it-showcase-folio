
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Code, DollarSign } from 'lucide-react';

// Updated portfolio project data with more details
const projects = [
  {
    id: 1,
    title: "Crypto Website Development for DeFi X",
    slug: "defi-x",
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
    <span className="px-4 py-2 rounded-full bg-gray-800 text-lightgray text-sm">
      {label}
    </span>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#1e2230] rounded-lg overflow-hidden flex flex-col">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-[#3b82f6] flex items-center justify-center mr-3">
            {project.icon || <div className="h-6 w-6 bg-white rounded-full" />}
          </div>
          <h3 className="text-xl font-medium">{project.client}</h3>
        </div>
        
        <h2 className="text-2xl font-bold mb-8">{project.title}</h2>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </div>
      </div>
      
      <div className="mt-auto relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <Link 
          to={`/portfolio/${project.slug}`}
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <span className="bg-primaryblue text-white px-6 py-3 rounded-md font-medium">
            View Project
          </span>
        </Link>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Portfolio</h1>
            <p className="text-lightgray text-center max-w-2xl mx-auto mb-16">
              Showcasing my best work across web development, design, and application projects. 
              Each project represents unique challenges and innovative solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full ${
                    filter === category 
                      ? 'bg-primaryblue text-white' 
                      : 'bg-gray-800 text-lightgray hover:bg-gray-700'
                  } transition-colors`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
