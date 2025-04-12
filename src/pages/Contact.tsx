
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const formControlVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              className="heading-line text-5xl md:text-6xl font-bold mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Me
            </motion.h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                variants={itemVariants}
              >
                <motion.h2 
                  className="text-2xl font-bold mb-6"
                  variants={formControlVariants}
                  transition={{ delay: 0.1 }}
                >
                  Get In Touch
                </motion.h2>
                <motion.p 
                  className="text-lightgray mb-8"
                  variants={formControlVariants}
                  transition={{ delay: 0.2 }}
                >
                  Have a project in mind or want to discuss a potential collaboration? 
                  I'm always open to new opportunities and challenges.
                </motion.p>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start"
                    variants={formControlVariants}
                    transition={{ delay: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="bg-primaryblue/20 p-3 rounded-full mr-4"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(59,130,246,0.3)" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primaryblue">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-lightgray">+1 (555) 123-4567</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    variants={formControlVariants}
                    transition={{ delay: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="bg-primaryblue/20 p-3 rounded-full mr-4"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(59,130,246,0.3)" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primaryblue">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-lightgray">hello@developerx.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    variants={formControlVariants}
                    transition={{ delay: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="bg-primaryblue/20 p-3 rounded-full mr-4"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(59,130,246,0.3)" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primaryblue">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p className="text-lightgray">San Francisco, CA, USA</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-black/20 p-8 rounded-lg"
                variants={itemVariants}
                transition={{ delay: 0.3 }}
              >
                <motion.h2 
                  className="text-2xl font-bold mb-6"
                  variants={formControlVariants}
                >
                  Send a Message
                </motion.h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      variants={formControlVariants}
                      transition={{ delay: 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <Input id="name" className="bg-black/30 border-gray-700" placeholder="Your name" />
                    </motion.div>
                    <motion.div
                      variants={formControlVariants}
                      transition={{ delay: 0.2 }}
                      whileHover={{ y: -2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input id="email" type="email" className="bg-black/30 border-gray-700" placeholder="Your email" />
                    </motion.div>
                  </div>
                  <motion.div
                    variants={formControlVariants}
                    transition={{ delay: 0.3 }}
                    whileHover={{ y: -2 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <Input id="subject" className="bg-black/30 border-gray-700" placeholder="Project discussion" />
                  </motion.div>
                  <motion.div
                    variants={formControlVariants}
                    transition={{ delay: 0.4 }}
                    whileHover={{ y: -2 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      className="bg-black/30 border-gray-700 min-h-[150px]" 
                      placeholder="Tell me about your project or idea..."
                    />
                  </motion.div>
                  <motion.div
                    variants={formControlVariants}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-primaryblue hover:bg-primaryblue/90"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Contact;
