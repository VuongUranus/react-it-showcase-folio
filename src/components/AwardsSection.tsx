import React, { useRef, useEffect } from 'react';
import { Award, Trophy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, useAnimation, useInView } from 'framer-motion';

const awards = [
  {
    title: "Top contributing employee in the IT department 2024",
    department: "IT Department",
    description: "Integrated BHX chat system and Zalo messaging, optimized core WebSocket (-30% resources), and integrated SSO/anti-theft for stable operations.",
    notes: "Recognized for outstanding contributions to the team",
    date: "Awarded: Jan 2025",
    certificateImage: "/lovable-uploads/award.png", // This is a placeholder, the actual image shows an award certificate
    medalImage: true // This will render the medal graphic on the right side
  },
];

const AwardsSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 1
      }
    }
  };

  return (
    <section ref={sectionRef} className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center">
            <Trophy size={30} className="mr-4" />
            <h2 className="text-4xl font-bold">Honors & Awards</h2>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              variants={itemVariants} 
              className="rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left side - Certificate Information */}
                <div className="bg-gray-800 p-6">
                  {award.certificateImage ? (
                    <div className="h-80 flex items-center justify-center">
                      <img 
                        src={award.certificateImage} 
                        alt={`${award.title} Certificate`} 
                        className="max-h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-80 bg-gray-700 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-yellow-500 text-xl">VINH DANH</p>
                        <p className="text-yellow-300 text-sm">- Năm 2024 -</p>
                        <p className="text-white font-bold mt-4">DANH HIỆU NHÂN VIÊN VƯỢT TRỘI</p>
                        <p className="text-yellow-400 text-xl mt-2">192581 - Web Developer</p>
                        
                        <div className="mt-8 space-y-4 text-left">
                          <div className="flex items-center">
                            <div className="rounded-full bg-gray-600 p-1 mr-2">
                              <Award size={16} className="text-white" />
                            </div>
                            <div>
                              <span className="text-white text-sm">Chức vụ: </span>
                              <span className="text-white font-medium text-sm">Chuyên Viên</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="rounded-full bg-gray-600 p-1 mr-2">
                              <Award size={16} className="text-white" />
                            </div>
                            <div>
                              <span className="text-white text-sm">Phòng ban: </span>
                              <span className="text-white font-medium text-sm">Web Development</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="rounded-full bg-gray-600 p-1 mr-2">
                              <Award size={16} className="text-white" />
                            </div>
                            <div>
                              <span className="text-white text-sm">Siêu thị: </span>
                              <span className="text-white font-medium text-sm">Central Office</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8 text-left">
                          <p className="text-white font-medium">Ghi nhận đánh giá:</p>
                          <p className="text-white/70 text-sm mt-1">- Hoàn thành phần core và box sản phẩm.</p>
                          <p className="text-white/70 text-sm">- Tối ưu tốc độ ở màn hình Trang chủ và các trang liên quan sản phẩm.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Right side - Award Details */}
                <div className="bg-[#0a1930] p-8 flex flex-col">
                  <div className="flex-grow flex flex-col items-center justify-center text-center">
                    {award.medalImage && (
                      <div className="mb-8">
                        <div className="w-40 h-40 rounded-full border-8 border-yellow-500 flex items-center justify-center relative">
                          <div className="absolute w-full h-full bg-[#0a1930] rounded-full transform scale-[0.85]"></div>
                          <div className="absolute bottom-0 translate-y-1/2 flex">
                            <div className="w-16 h-24 bg-yellow-500 rounded-tl-full rounded-tr-full transform -rotate-12"></div>
                            <div className="w-16 h-24 bg-yellow-500 rounded-tl-full rounded-tr-full transform rotate-12"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  
                    <h3 className="text-yellow-500 text-2xl font-bold mb-2 mt-2">{award.title}</h3>
                    <p className="text-gray-400 mb-6">{award.department}</p>
                    
                    <p className="text-white mb-6">
                      {award.description}
                    </p>
                    
                    <p className="text-gray-400 mb-4">
                      {award.notes}
                    </p>
                    
                    <p className="text-blue-400 font-medium mt-auto">
                      {award.date}
                    </p>
                    
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full mt-6">
                      See More Details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
