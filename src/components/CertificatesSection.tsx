
import React, { useRef, useEffect } from 'react';
import { Badge, FileCheck } from 'lucide-react';
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
    <div className="relative bg-black/30 dark:bg-black/50 rounded-lg overflow-hidden h-[400px] group">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-300"
        />
      </div>
      <div className="relative p-6 h-full flex flex-col justify-between z-10">
        <div>
          <div className="flex justify-between items-start mb-4">
            <FileCheck className="text-primaryblue h-8 w-8" />
            <span className="text-primaryblue text-sm font-medium">{date}</span>
          </div>
          <h3 className="text-xl font-bold text-white dark:text-white mb-2">{title}</h3>
          <p className="text-lightgray dark:text-lightgray">{issuer}</p>
        </div>
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground/60 dark:text-white/60">Credential ID</span>
            <span className="text-sm text-foreground/80 dark:text-white/80">{credentialId}</span>
          </div>
          <a
            className="inline-flex items-center justify-center mt-4 w-full py-2 border border-primaryblue text-primaryblue rounded hover:bg-primaryblue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primaryblue focus:ring-offset-2"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
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
    <section ref={sectionRef} className="section-padding py-20 bg-background dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="heading-line text-4xl font-bold text-foreground dark:text-white">Certificates</h2>
            <p className="text-muted-foreground dark:text-lightgray mt-4 max-w-xl">
              Professional certifications that validate my expertise and technical knowledge.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Badge size={80} className="text-primaryblue/20 mt-6 md:mt-0" />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
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
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
