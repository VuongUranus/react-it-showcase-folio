
import React from 'react';
import {
  Building,
  Server,
  Database,
  Search,
  MessageSquare,
  Terminal,
  Package,
  GitBranch,
  Cloud,
  Cpu,
  HardDrive,
  Network,
  Settings,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } }
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

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

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
          <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">MY WORK</div>
          <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lightgray max-w-2xl mx-auto">
            A selection of my recent work across different industries and technologies.
            Each project represents unique challenges and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              variants={fadeInUp}
              className="group"
            >
              <Card className="overflow-hidden border-gray-800 bg-black/30 transition-all duration-300 hover:border-primaryblue hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={`/lovable-uploads/49493ab1-737b-4e21-a11d-5c399fed5bfd.png`}
                    alt={`Project ${item}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <Badge className="bg-primaryblue">Golang</Badge>
                        <Badge className="bg-gray-700">Postgresql</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{`Project Title ${item}`}</h3>
                      <p className="text-lightgray text-sm">Web Application Design & Development</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{`Project Title ${item}`}</h3>
                  <p className="text-lightgray mb-4 text-sm">
                    A modern web application with advanced features and optimized performance.
                  </p>
                  <Button variant="link" className="group text-primaryblue px-0 hover:no-underline">
                    View Project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button asChild>
            <a href="/portfolio">View All Projects <ArrowRight size={16} className="ml-2" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
