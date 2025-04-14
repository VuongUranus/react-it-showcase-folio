
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface ProjectDetailProps {
  project: {
    title: string;
    client: string;
    services: string[];
    technologies: string[];
    website?: string;
    description: string;
    goal: string;
    execution: string[];
    results: string;
    mainImage: string;
    galleryImages: string[];
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Back to portfolio button */}
        <div className="max-w-7xl mx-auto pt-8 px-6">
          <Link to="/portfolio" className="inline-flex items-center text-lightgray hover:text-white">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Link>
        </div>
        
        {/* Project Header */}
        <section className="py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Client Info */}
            <div className="mb-8 md:mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                <div>
                  <div className="mb-6">
                    <h3 className="text-sm uppercase text-lightgray font-medium mb-2">CLIENT</h3>
                    <p className="text-xl font-medium">{project.client}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm uppercase text-lightgray font-medium mb-2">SERVICES</h3>
                    {project.services.map((service, index) => (
                      <p key={index} className="text-xl font-medium">{service}</p>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm uppercase text-lightgray font-medium mb-2">TECHNOLOGIES</h3>
                    {project.technologies.map((tech, index) => (
                      <p key={index} className="text-xl font-medium">{tech}</p>
                    ))}
                  </div>
                  
                  {project.website && (
                    <div>
                      <h3 className="text-sm uppercase text-lightgray font-medium mb-2">WEBSITE</h3>
                      <Link to={project.website} className="text-xl font-medium flex items-center">
                        Live preview <ExternalLink size={16} className="ml-2" />
                      </Link>
                    </div>
                  )}
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-6">About the project</h2>
                  <p className="text-lightgray mb-8">{project.description}</p>
                  
                  <h3 className="text-xl font-bold mb-4">What was the goal of the project?</h3>
                  <p className="text-lightgray">{project.goal}</p>
                </div>
              </div>
            </div>
            
            {/* Main Project Image */}
            <div className="mb-16">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full rounded-lg object-cover"
              />
              <p className="text-lightgray text-center mt-3">{project.title} - Main view</p>
            </div>
            
            {/* Project Execution */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Project execution</h2>
              <p className="text-lightgray mb-8">
                Our approach to this project was methodical and client-focused. We followed a proven
                development process with regular check-ins and iterations based on feedback.
              </p>
              
              <ul className="list-disc pl-5 text-lightgray space-y-2 mb-8">
                {project.execution.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Project Results */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Project results</h2>
              <p className="text-lightgray mb-8">{project.results}</p>
              
              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.galleryImages.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
