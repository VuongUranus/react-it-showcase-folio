
import React, { useEffect, useRef } from 'react';

// Define the skill categories and items
const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Vue.js", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SCSS"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel", "Ruby on Rails", "Java", "Spring Boot"]
  },
  {
    name: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "Prisma", "Sequelize"]
  },
  {
    name: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "CI/CD", "Git", "GitHub Actions"]
  },
  {
    name: "Mobile",
    skills: ["React Native", "Flutter", "Swift", "Kotlin"]
  }
];

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
    <section className="section-padding bg-black/20 py-16">
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="heading-line text-4xl font-bold mb-8">My Skills</h2>
        <p className="text-lightgray max-w-2xl mb-12">
          Professional expertise and technologies I've mastered throughout my career.
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-none py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicate content for seamless scrolling */}
          {[...skillCategories, ...skillCategories].map((category, catIndex) => (
            <div 
              key={`${category.name}-${catIndex}`} 
              className="flex-none px-8"
            >
              <div className="bg-black/30 rounded-lg p-6 min-w-[300px]">
                <h3 className="text-xl font-bold text-primaryblue mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={`${skill}-${catIndex}-${skillIndex}`}
                      className="bg-black/40 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-darkbg to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-darkbg to-transparent"></div>
      </div>
    </section>
  );
};

export default SkillsSection;
