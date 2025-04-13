
import React from 'react';
import { motion } from 'framer-motion';

type TechCategory = {
  name: string;
  icon: React.ReactNode;
  technologies: {
    name: string;
    logo: string;
  }[];
};

interface TechLogoGridProps {
  categories: TechCategory[];
}

const TechLogoGrid: React.FC<TechLogoGridProps> = ({ categories }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="space-y-10">
      {categories.map((category, i) => (
        <motion.div 
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="inline-block w-8 h-8 rounded-full bg-primaryblue/20 flex items-center justify-center mr-3">
              {category.icon}
            </span>
            {category.name}
          </h3>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {category.technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59,130,246,0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="bg-black/30 rounded-lg border border-gray-800 hover:border-primaryblue overflow-hidden transition-all duration-300 group"
              >
                <div className="p-4">
                  <div className="h-16 flex items-center justify-center mb-3 overflow-hidden">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-auto h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <p className="text-center font-medium text-sm mt-2">{tech.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechLogoGrid;
