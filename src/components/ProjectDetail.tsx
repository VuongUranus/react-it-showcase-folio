import React, { useEffect } from 'react';
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
    executionDescription?: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-darkbg dark:text-white">
      <Navbar />

      {/* Hero Section with Project Title */}
      <section className="bg-darkbg-darker py-16 border-b border-darkbg-lighter">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 animate-on-scroll opacity-0">
            <div className="w-12 h-1 bg-blue mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="dark:text-lightgray text-[#475569] max-w-3xl">
              Designing a modern cryptocurrency platform with focus on user experience and visual appeal
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Back to portfolio button */}
        <div className="max-w-7xl mx-auto pt-8 px-6">
          <Link to="/portfolio" className="inline-flex items-center dark:text-lightgray text-[#475569] hover:text-blue transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Link>
        </div>

        {/* Project Header */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Client Info & About Project */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
                <div className="md:col-span-4 animate-on-scroll opacity-0">
                  <div className="mb-8">
                    <h3 className="text-sm uppercase dark:text-lightgray text-[#475569] font-medium mb-2">CLIENT</h3>
                    <p className="text-xl font-medium">{project.client}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm uppercase dark:text-lightgray  text-[#475569] font-medium mb-2">SERVICES</h3>
                    {project.services.map((service, index) => (
                      <p key={index} className="text-xl font-medium">{service}</p>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm uppercase dark: text-lightgray text-[#475569] font-medium mb-2">TECHNOLOGIES</h3>
                    <div className="flex flex-wrap">
                      {project.technologies.map((tech, index) => (
                        <p key={index} className="text-xl font-medium mr-4">{tech}</p>
                      ))}
                    </div>
                  </div>

                  {project.website && (
                    <div>
                      <h3 className="text-sm uppercase dark:text-lightgray text-[#475569] font-medium mb-2">WEBSITE</h3>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-medium flex items-center text-blue hover:text-blue-light transition-colors"
                      >
                        Live preview <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="md:col-span-8 animate-on-scroll opacity-0">
                  <h2 className="text-3xl font-bold mb-6">About the project</h2>
                  <p className="dark:text-lightgray text-[#475569] mb-8">{project.description}</p>

                  <h3 className="text-xl font-bold mb-4">What was the goal of the project?</h3>
                  <p className="dark:text-lightgray text-[#475569]" style={{whiteSpace: 'pre-line'}}>{project.goal}</p>
                </div>
              </div>
            </div>

            {/* Main Project Image */}
            <div className="mb-16 rounded-lg overflow-hidden animate-on-scroll opacity-0 transform transition-all duration-700 hover:scale-[1.01]">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>

            {/* Project Execution */}
            <div className="mb-16 animate-on-scroll opacity-0">
              <h2 className="text-3xl font-bold mb-6">Project execution</h2>
              <p className="dark:text-lightgray text-[#475569] mb-8">
                {project.executionDescription}
              </p>

              <div className="space-y-6">
                {project.execution.map((item, index) => (
                  <div key={index} className="flex items-start group transform transition-all duration-300 hover:translate-x-2">
                    <div className="bg-blue w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold mr-4 flex-shrink-0 mt-1 group-hover:bg-blue-light transition-colors">
                      {index + 1}
                    </div>
                    <p className="dark:text-lightgray text-[#475569] group-hover:text-white transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Results */}
            <div className="mb-16 animate-on-scroll opacity-0">
              <h2 className="text-3xl font-bold mb-6">Project results</h2>
              <p className="dark:text-lightgray text-[#475569] mb-8" style={{ whiteSpace: 'pre-line' }}>{project.results}</p>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.galleryImages.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg transform transition-all duration-500 hover:shadow-xl hover:shadow-blue/10">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
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