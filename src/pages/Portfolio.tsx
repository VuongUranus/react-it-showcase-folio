
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

// Portfolio project sample data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    url: "#"
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    url: "#"
  },
  {
    id: 3,
    title: "Social Media App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
    url: "#"
  },
  {
    id: 4,
    title: "Travel Booking Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3",
    url: "#"
  },
  {
    id: 5,
    title: "Task Management Tool",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    url: "#"
  },
  {
    id: 6,
    title: "Healthcare Portal",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    url: "#"
  }
];

const categories = ["All", "Web Development", "UI/UX Design", "Mobile App", "SaaS"];

const PortfolioItem: React.FC<(typeof projects)[0]> = ({ title, category, image, url }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover transition-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-lightgray mb-3">{category}</p>
        <a 
          href={url} 
          className="inline-flex items-center text-primaryblue hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h1 className="heading-line text-5xl md:text-6xl font-bold mb-10">Portfolio</h1>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full ${
                    filter === category 
                      ? 'bg-primaryblue text-white' 
                      : 'bg-gray-800 text-lightgray hover:bg-gray-700'
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <PortfolioItem key={project.id} {...project} />
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
