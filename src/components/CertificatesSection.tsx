import React, { useRef, useEffect } from 'react';
import { Badge, FileCheck, ShieldCheck } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { motion, useAnimation, useInView } from 'framer-motion';

const certificates = [
  {
    title: "Programming with Golang",
    issuer: "Edureka",
    date: "April 4, 2025",
    credentialId: "P2Z4FHGJL3IQ",
    image: "/lovable-uploads/golang_cert.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/P2Z4FHGJL3IQ"
  },
  {
    title: "Elasticsearch 8 and the Elastic Stack: In-Depth and Hands-On",
    issuer: "Packt",
    date: "April 4, 2025",
    credentialId: "WKV8P4LOM9Z5",
    image: "/lovable-uploads/elasticsearch_cert.jpeg",
    link: "https://www.coursera.org/account/accomplishments/specialization/WKV8P4LOM9Z5"
  },
  {
    title: "Apache Kafka Specialization",
    issuer: "LearnKartS",
    date: "April 14, 2025",
    credentialId: "WHMZRBH32BZ6",
    image: "/lovable-uploads/kafka_cert.jpeg",
    link: "https://www.coursera.org/account/accomplishments/specialization/WHMZRBH32BZ6"
  },
  {
    title: "Linux for Developers",
    issuer: "The Linux Foundation",
    date: "April 16, 2025",
    credentialId: "7KOH97P0M2DR",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7KOH97P0M2DR/CERTIFICATE_LANDING_PAGE~7KOH97P0M2DR.jpeg",
    link: "https://www.coursera.org/account/accomplishments/verify/7KOH97P0M2DR"
  }
];

const CertificateCard: React.FC<(typeof certificates)[0]> = ({
  title,
  issuer,
  date,
  credentialId,
  image,
  link
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-gradient-to-br dark:from-black/80 dark:to-black/40 dark:backdrop-blur-lg rounded-xl overflow-hidden h-[400px] group border dark:border-white/10 border-black/10 shadow-lg"
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-all duration-500"
        />
      </div>
      <div className="relative p-8 h-full flex flex-col justify-between z-20">
        <div>
          <div className="flex justify-between items-start mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <FileCheck className="text-blue-400 h-8 w-8" />
            </motion.div>
            <span className="text-blue-400 text-sm font-medium bg-blue-400/10 px-4 py-1 rounded-full">
              {date}
            </span>
          </div>
          <motion.h3
            className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300"
          >
            {title}
          </motion.h3>
          <p className="text-gray-300/90">{issuer}</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm rounded-lg">
            <span className="text-sm text-gray-400">Credential ID</span>
            <span className="text-sm text-white font-mono">{credentialId}</span>
          </div>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center w-full py-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300 border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const CertificatesSection: React.FC = () => {
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
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 1
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="relative">
            <div
              className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm"
            >
              CERTIFICATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold pb-2">
              Certificates
            </h2>
            <p className="dark:text-gray-400 mt-4 max-w-xl text-[#475569]">
              Professional certifications that validate my expertise and technical knowledge.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <Badge size={80} className="text-blue-400/20" />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {certificates.map((certificate, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div variants={itemVariants}>
                    <CertificateCard {...certificate} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static transform-none mx-2 dark:bg-white/10 bg-black/10 hover:bg-white/20 border-white/20" />
              <CarouselNext className="static transform-none mx-2 dark:bg-white/10 bg-black/10 hover:bg-white/20 border-white/20" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;