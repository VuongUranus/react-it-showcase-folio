
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Blog post sample data with categories
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
  },
  {
    id: 4,
    title: "DevOps Principles for Developers",
    excerpt: "Essential DevOps practices that every developer should understand and implement.",
    date: "February 25, 2025",
    category: "TUTORIALS",
    slug: "devops-principles"
  },
  {
    id: 5,
    title: "Creating Accessible Web Applications",
    excerpt: "How to ensure your web applications are accessible to all users, including those with disabilities.",
    date: "February 10, 2025",
    category: "ARTICLES",
    slug: "accessible-web-applications"
  },
  {
    id: 6,
    title: "TypeScript Best Practices for 2025",
    excerpt: "The latest best practices for writing clean, maintainable TypeScript code in your projects.",
    date: "January 30, 2025",
    category: "TUTORIALS",
    slug: "typescript-best-practices-2025"
  },
  {
    id: 7,
    title: "7 Great Web Development Languages to Learn this Year",
    excerpt: "A curated list of programming languages that will boost your career in web development.",
    date: "January 15, 2025",
    category: "ARTICLES",
    slug: "web-development-languages"
  },
  {
    id: 8,
    title: "8 Tips to Improve your Web Development Skills in 2025",
    excerpt: "Practical tips and strategies to level up your web development skills this year.",
    date: "January 5, 2025",
    category: "ARTICLES",
    slug: "improve-web-development-skills"
  }
];

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt,
  date, 
  category,
  slug,
  featured = false
}) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${featured ? 'border-l-0' : 'border-t border-gray-800'} group`}
    >
      <div className={`py-8 ${!featured && 'pl-0'}`}>
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span className="uppercase">{category}</span>
        </div>
        
        <h3 className={`font-bold group-hover:text-primaryblue transition-colors ${featured ? 'text-3xl mb-3' : 'text-xl mb-2'}`}>
          <Link to={`/blog/${slug}`} className="flex items-center gap-2">
            {title}
            {featured && (
              <ArrowRight className="inline-block w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </Link>
        </h3>
        
        {featured && (
          <p className="text-gray-400 mb-4">{excerpt}</p>
        )}
      </div>
    </motion.article>
  );
};

const Blog: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  
  // Featured posts (first 2 posts)
  const featuredPosts = blogPosts.slice(0, 2);
  
  // Filter posts based on selected category
  const filteredPosts = filter === "all" 
    ? blogPosts.slice(2) 
    : blogPosts.slice(2).filter(post => post.category.toLowerCase() === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className=" py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Blog & Articles
            </motion.h1>
          </div>
        </section>
        
        {/* Featured Articles */}
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-800 pb-12">
              {featuredPosts.map(post => (
                <BlogCard key={post.id} {...post} featured={true} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Main Blog Content */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-8">Latest articles</h2>
                
                <div className="space-y-4">
                  <motion.button 
                    className={`flex items-center gap-2 ${filter === "all" ? "text-primaryblue" : "text-white hover:text-primaryblue"}`}
                    onClick={() => setFilter("all")}
                    whileHover={{ x: 5 }}
                  >
                    All <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button 
                    className={`flex items-center gap-2 ${filter === "articles" ? "text-primaryblue" : "text-white hover:text-primaryblue"}`}
                    onClick={() => setFilter("articles")}
                    whileHover={{ x: 5 }}
                  >
                    Articles <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button 
                    className={`flex items-center gap-2 ${filter === "tutorials" ? "text-primaryblue" : "text-white hover:text-primaryblue"}`}
                    onClick={() => setFilter("tutorials")}
                    whileHover={{ x: 5 }}
                  >
                    Tutorials <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button 
                    className={`flex items-center gap-2 ${filter === "news" ? "text-primaryblue" : "text-white hover:text-primaryblue"}`}
                    onClick={() => setFilter("news")}
                    whileHover={{ x: 5 }}
                  >
                    News <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
                
                {/* Newsletter Signup */}
                <div className="mt-16 p-6 bg-black/30 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Subscribe to my newsletter today</h3>
                  <p className="text-gray-400 mb-6">Get the latest articles and news directly in your inbox.</p>
                  
                  <form className="space-y-4">
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      className="border-gray-700 focus:border-primaryblue"
                    />
                    <Button className="w-full flex items-center justify-center gap-2 bg-primaryblue hover:bg-primaryblue/90">
                      Subscribe now <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </motion.div>
              
              {/* Articles */}
              <div className="lg:col-span-3">
                <div className="space-y-0 divide-y divide-gray-800">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                      <BlogCard key={post.id} {...post} />
                    ))
                  ) : (
                    <p className="py-8 text-gray-400">No articles found in this category.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
