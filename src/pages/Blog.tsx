
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Blog post sample data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring the trends that will shape the future of web development in the coming years.",
    date: "April 5, 2025",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "How to Master Frontend Frameworks",
    excerpt: "A comprehensive guide to mastering modern frontend frameworks like React, Vue, and Angular.",
    date: "March 20, 2025",
    category: "Frontend",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "Building Scalable Backend Systems",
    excerpt: "Best practices for designing and implementing scalable backend systems for your applications.",
    date: "March 8, 2025",
    category: "Backend",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
  },
  {
    id: 4,
    title: "DevOps Principles for Developers",
    excerpt: "Essential DevOps practices that every developer should understand and implement.",
    date: "February 25, 2025",
    category: "DevOps",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3",
  },
  {
    id: 5,
    title: "Creating Accessible Web Applications",
    excerpt: "How to ensure your web applications are accessible to all users, including those with disabilities.",
    date: "February 10, 2025",
    category: "Accessibility",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
  },
  {
    id: 6,
    title: "TypeScript Best Practices for 2025",
    excerpt: "The latest best practices for writing clean, maintainable TypeScript code in your projects.",
    date: "January 30, 2025",
    category: "TypeScript",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
  }
];

const BlogCard: React.FC<(typeof blogPosts)[0]> = ({ 
  title, 
  excerpt, 
  date, 
  category, 
  imageUrl 
}) => {
  return (
    <motion.article 
      className="bg-black/20 rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-48 overflow-hidden">
        <motion.img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="p-6">
        <motion.div 
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="text-primaryblue font-medium">{category}</span>
          <span className="text-lightgray text-sm">{date}</span>
        </motion.div>
        <motion.h3 
          className="text-xl font-bold mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-lightgray mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {excerpt}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          whileHover={{ x: 5 }}
        >
          <Button variant="link" className="text-white px-0 hover:no-underline" asChild>
            <a href="#">Read More</a>
          </Button>
        </motion.div>
      </div>
    </motion.article>
  );
};

const Blog: React.FC = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      },
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Navbar />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              className="heading-line text-5xl md:text-6xl font-bold mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Blog
            </motion.h1>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                variant="outline" 
                className="border-primaryblue text-white hover:bg-primaryblue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Articles
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Blog;
