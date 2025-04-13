
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';

// Blog post sample data (same as used in Blog.tsx)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring the trends that will shape the future of web development in the coming years.",
    date: "April 5, 2025",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "How to Master Frontend Frameworks",
    excerpt: "A comprehensive guide to mastering modern frontend frameworks like React, Vue, and Angular.",
    date: "March 20, 2025",
    category: "Frontend",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Building Scalable Backend Systems",
    excerpt: "Best practices for designing and implementing scalable backend systems for your applications.",
    date: "March 8, 2025",
    category: "Backend",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3"
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
    <article className="bg-black/20 rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-primaryblue font-medium">{category}</span>
          <span className="text-lightgray text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-lightgray mb-5">{excerpt}</p>
        <Button variant="link" className="text-white px-0 hover:text-primaryblue hover:no-underline group" asChild>
          <a href="#">
            Read More 
            <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </article>
  );
};

const BlogPreviewSection: React.FC = () => {
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section ref={sectionRef} className="section-padding bg-black/20 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="heading-line text-4xl font-bold">Blog & Articles</h2>
            <p className="text-lightgray mt-4 max-w-xl">
              My thoughts and insights on web development, design, and technology.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button className="bg-primaryblue hover:bg-primaryblue/90 mt-6 sm:mt-0" asChild>
              <Link to="/blog">View All Articles</Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
