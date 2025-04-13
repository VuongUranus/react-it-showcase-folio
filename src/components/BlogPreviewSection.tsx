
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';

// Blog post sample data (same structure as in Blog.tsx but fewer posts)
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring the trends that will shape the future of web development in the coming years.",
    date: "April 5, 2025",
    category: "ARTICLES",
    slug: "future-web-development-2025"
  },
  {
    id: 2,
    title: "How to Master Frontend Frameworks",
    excerpt: "A comprehensive guide to mastering modern frontend frameworks like React, Vue, and Angular.",
    date: "March 20, 2025",
    category: "TUTORIALS",
    slug: "master-frontend-frameworks"
  },
  {
    id: 3,
    title: "Building Scalable Backend Systems",
    excerpt: "Best practices for designing and implementing scalable backend systems for your applications.",
    date: "March 8, 2025",
    category: "ARTICLES",
    slug: "scalable-backend-systems"
  }
];

const BlogCard: React.FC<{
  id: number;
  title: string;
  date: string;
  category: string;
  slug: string;
}> = ({ 
  title, 
  date, 
  category,
  slug
}) => {
  return (
    <article className="border-t border-gray-800 py-6 group">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span className="uppercase">{category}</span>
      </div>
      <h3 className="text-xl font-bold group-hover:text-primaryblue transition-colors">
        <Link to={`/blog/${slug}`} className="flex items-center justify-between">
          <span>{title}</span>
          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </Link>
      </h3>
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
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
        stiffness: 60,
        damping: 15
      }
    }
  };

  return (
    <section ref={sectionRef} className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants} 
            className="heading-line text-4xl font-bold mb-6"
          >
            Blog & Articles
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <p className="text-lightgray max-w-xl">
                My thoughts and insights on web development, design, and technology.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex justify-start lg:justify-end">
              <Button className="bg-primaryblue hover:bg-primaryblue/90 flex items-center gap-2" asChild>
                <Link to="/blog">
                  View All Articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-0"
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
