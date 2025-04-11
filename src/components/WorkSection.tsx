
import React from 'react';
import { Building, Radio, Camera, Layout, Briefcase, Code, Palette, GanttChart } from 'lucide-react';
import { motion } from 'framer-motion';

const CompanyLogo: React.FC<{ 
  name: string;
  icon: string;
  description: string;
  period: string;
}> = ({ name, icon, description, period }) => {
  let IconComponent;
  
  switch(icon) {
    case "building":
      IconComponent = Building;
      break;
    case "radio":
      IconComponent = Radio;
      break;
    case "camera":
      IconComponent = Camera;
      break;
    case "layout":
      IconComponent = Layout;
      break;
    case "briefcase":
      IconComponent = Briefcase;
      break;
    case "code":
      IconComponent = Code;
      break;
    case "palette":
      IconComponent = Palette;
      break;
    case "gantt":
      IconComponent = GanttChart;
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
        <p className="text-lightgray text-sm mt-2">{description}</p>
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
            A look at the companies and projects I've had the privilege to work with throughout my career.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Venture Technologies" 
              icon="building"
              description="Led development teams and managed enterprise-scale web applications for digital transformation."
              period="2019 - Present"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Creative Studio" 
              icon="camera" 
              description="Created innovative UX/UI designs and implemented front-end solutions for clients."
              period="2017 - 2019"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Tech Innovation" 
              icon="code" 
              description="Developed scalable applications using modern frameworks and cloud-based solutions."
              period="2015 - 2017"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CompanyLogo 
              name="Digital Solutions" 
              icon="palette" 
              description="Created responsive websites and e-commerce platforms for various industry clients."
              period="2012 - 2015"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
