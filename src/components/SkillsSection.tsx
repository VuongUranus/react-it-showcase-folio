
import React, { useEffect, useRef } from 'react';
import { Terminal, Database, Server, Activity, Package, Search, Clock, GitBranch } from 'lucide-react';

// Define the skill items with icons
const skillItems = [
  {
    name: "Golang",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
          <img src="/lovable-uploads/golang.png" alt="Golang" {...props}></img>
      </div>
    ),
    text: "Golang"
  },
  {
    name: "PostgreSQL",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/lovable-uploads/Postgresql_elephant.svg.png" alt="PostgreSQL" {...props}></img>
      </div>
    ),
    text: "PostgreSQL"
  },
  {
    name: "Elasticsearch",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/lovable-uploads/elasticsearch.png" alt="Elasticsearch" {...props}></img>
      </div>
    ),
    text: "Elasticsearch"
  },
  {
    name: "Kafka",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/lovable-uploads/kafka.png" alt="Kafka" {...props}></img>
      </div>
    ),
    text: "Kafka"
  },
  {
    name: "Docker",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/lovable-uploads/docker.webp" alt="Docker" {...props}></img>
      </div>
    ),
    text: "Docker"
  },
  {
    name: "Linux",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/lovable-uploads/linux.png" alt="Linux" {...props}></img>
      </div>
    ),
    text: "Linux"
  },
  {
    name: "Jenkins",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/lovable-uploads/jenkins.png" alt="Jenkins" {...props}></img>
      </div>
    ),
    text: "Jenkins"
  },
  {
    name: "Graylog",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/lovable-uploads/graylog.png" alt="Graylog" {...props}></img>
      </div>
    ),
    text: "Graylog"
  },
  {
    name: "Prometheus",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/lovable-uploads/prometheus.png" alt="Prometheus" {...props}></img>
      </div>
    ),
    text: "Prometheus"
  },
  {
    name: "NATS",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/lovable-uploads/nats.png" alt="NATS" {...props}></img>
      </div>
    ),
    text: "NATS"
  },
  {
    name: "Airflow",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/lovable-uploads/airflow.png" alt="Airflow" {...props}></img>
      </div>
    ),
    text: "Airflow"
  },
  {
    name: "ScyllaDB",
    icon: (props: any) => (
      <div className="w-16 h-16 flex items-center justify-center">
        <img src="/lovable-uploads/scylladb.webp" alt="ScyllaDB" {...props}></img>
      </div>
    ),
    text: "ScyllaDB"
  },
];

// Define the scrolling skills section
const SkillsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPos = 0;
    
    const scroll = () => {
      scrollPos += 0.5; // Adjust speed here
      if (scrollContainer && scrollContainer.scrollWidth > 0) {
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="section-padding py-16">
      <div className="max-w-7xl mx-auto mb-10 px-6 md:px-12 lg:px-24">
        <h2 className="heading-line text-4xl font-bold mb-8">My Skills</h2>
        <p className="text-lightgray max-w-2xl mb-8">
          I specialize in backend development with expertise in these technologies. I prefer to showcase my skills directly through my work rather than with arbitrary percentage ratings.
        </p>
      </div>
      
      <div className="relative overflow-hidden py-8">
        <div 
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-none py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicate content for seamless scrolling */}
          {[...skillItems, ...skillItems].map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`} 
              className="flex-none px-10"
            >
              <div className="flex flex-col items-center justify-center">
                {skill.icon({})}
                <span className="text-center mt-2 text-white">{skill.text}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 h-full w-16 dark:bg-gradient-to-r bg-gradient-to-r dark:from-black from-white to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-16 dark:bg-gradient-to-l bg-gradient-to-l dark:from-black from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default SkillsSection;

