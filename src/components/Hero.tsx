
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-center lg:justify-evenly section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/macbook.jpg')",
            transform: "scale(1.1)"
          }}
        ></motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        className="lg:w-1/2 z-10 relative"
      >
        <motion.div
          variants={itemVariants}
          className="rounded-full overflow-hidden w-20 h-20 mb-10 border-2"
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
            src="/lovable-uploads/7c19216a-b579-415d-bf90-f65d5887a2da.png"
            alt="Developer Portrait"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          I'm Vuong, a<br />
          Software Engineer
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lightgray text-lg mb-8 max-w-lg"
        >
          With nearly 3 years of experience in building distributed systems and designing microservice architectures for real-time chat platforms. I focus on performance, stability, and scalability to bring impactful technology to life.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap gap-4"
        >
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button>
                <a href="#" target='_blank' className="px-2">Get My Resume</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="secondary"
                className="border-white hover:bg-white/10"
              >
                <a href="/contact" className="px-2">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1,
              type: "spring",
              stiffness: 100
            }
          }}
        >
          <Link to="aboutSection" smooth={true} duration={500} className="animate-bounce-slow cursor-pointer inline-block mt-16">
            <div className="w-16 h-16 rounded-full bg-primaryblue flex items-center justify-center">
              <ArrowDown size={24} color="white" />
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="hidden lg:flex flex-col gap-8 lg:w-2/5 max-w-sm"
      >
        {[
          {
            title: "ABOUT ME",
            text: "Software Engineer specialized in building real-time, high-performance distributed systems. Proficient in Golang, PostgreSQL, Elasticsearch, Hazelcast, Kafka, and NATS. Passionate about clean architecture and efficient systems.",
            link: "/about",
            delay: 0.3
          },
          {
            title: "MY WORK",
            text: "Projects include scalable chat systems, resilient microservice platforms, and custom tools for monitoring and deployment using CI/CD practices and advanced logging strategies.",
            link: "/portfolio",
            delay: 0.6
          },
          {
            title: "FOLLOW ME",
            text: "Social Media Links",
            link: null,
            delay: 0.9
          }
        ].map((panel, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: panel.delay,
                type: "spring",
                stiffness: 100
              }
            }}
            className={`p-4 rounded-lg z-10 ${index === 0 ? 'bg-gray-800/[0.21]' :
              index === 1 ? 'bg-gray-800/60' :
                'bg-gray-800/60'
              }`}
          >
            <h3 className="font-bold text-lg mb-2 text-white">{panel.title}</h3>

            {panel.title === "FOLLOW ME" ? (
              <div className="flex gap-4">
                {[
                  { href: "https://www.facebook.com/uranus.georgium", icon: "facebook" },
                  { href: "https://x.com/onMinhVng10", icon: "twitter" },
                  { href: "https://www.instagram.com/min_vuon/", icon: "instagram" },
                  { href: "https://www.linkedin.com/in/doan-minh-vuong/", icon: "linkedin" },
                  { href: "https://github.com/VuongUranus", icon: "github" }
                ].map((social, socialIndex) => (
                  <motion.a
                    key={socialIndex}
                    href={social.href}
                    target='_blank'
                    className="text-lightgray hover:text-primaryblue transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-${social.icon}`}
                    >
                      {social.icon === "facebook" && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
                      {social.icon === "twitter" && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />}
                      {social.icon === "instagram" && (
                        <>
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </>
                      )}
                      {social.icon === "linkedin" && (
                        <>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </>

                      )
                      }
                      {social.icon === "github" && (
                        <>
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </>
                      )}
                    </svg>
                  </motion.a>
                ))}
              </div>
            ) : (
              <>
                <p className="text-lightgray mb-4">{panel.text}</p>
                <a
                  href={panel.link}
                  className="text-primaryblue flex items-center group hover:text-white transition-colors"
                >
                  {panel.title === "ABOUT ME" ? "LEARN MORE" : "BROWSE PORTFOLIO"}
                  <span className="transform transition-transform group-hover:translate-x-1 ml-2">→</span>
                </a>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
