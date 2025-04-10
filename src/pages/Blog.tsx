
import React from 'react';
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
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-lightgray mb-5">{excerpt}</p>
        <Button variant="link" className="text-white px-0 hover:no-underline" asChild>
          <a href="#">Read More</a>
        </Button>
      </div>
    </article>
  );
};

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h1 className="heading-line text-5xl md:text-6xl font-bold mb-10">Blog</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="border-primaryblue text-white hover:bg-primaryblue">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
