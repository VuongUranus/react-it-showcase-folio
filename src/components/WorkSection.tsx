import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1287&q=80",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    link: "#"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1287&q=80",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    link: "#"
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of Project 3",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1287&q=80",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    link: "#"
  }
];

const ProjectCard: React.FC<typeof projects[0]> = ({ title, description, image, tags, link }) => {
  return (
    <div className="relative dark:bg-black/50 backdrop-blur rounded-lg overflow-hidden h-[400px] group shadow-lg">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-300"
        />
      </div>
      <div className="relative p-6 h-full flex flex-col justify-between z-10">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-lightgray dark:text-lightgray mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <Badge key={idx} className="bg-primaryblue/20 text-primaryblue">{tag}</Badge>
            ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-4 w-full py-2 border border-primaryblue text-primaryblue rounded hover:bg-primaryblue hover:text-white transition-colors"
        >
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const WorkSection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">
            MY WORK
          </div>
          <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lightgray max-w-2xl mx-auto">
            A selection of my recent work across different industries and technologies.
          </p>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default WorkSection;
