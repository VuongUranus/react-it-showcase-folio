
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "How I Scaled a Go Backend to Handle 1 Million Requests per Second",
    excerpt: "From 100 Requests to 1 Milion: My Journey in Scaling a Go Backend.",
    date: "Apr 16, 2025",
    category: "ARTICLES",
    slug: "how-i-scaled-a-go-backend-to-handle-1-million-requests-per-second"
  },
  {
    id: 2,
    title: "Fine-Tuning LLaMA 2: A Step-by-Step Guide to Customizing the Large Language Model",
    excerpt: "Learn how to fine-tune Llama-2 on Colab using new techniques to overcome memory and computing limitations to make open-source large language models more accessible.",
    date: "March 16, 2025",
    category: "TUTORIALS",
    slug: "fine-tuning-llama-2-a-step-by-step-guide-to-customizing-the-large-language-model"
  },
  {
    id: 3,
    title: "This One Kafka Design Pattern Changed Everything for Us",
    excerpt: "When we first adopted Kafka, we treated it like a message queue. Producers dumped events, consumers picked them up, and life went on — until it didn’t.",
    date: "March 8, 2025",
    category: "ARTICLES",
    slug: "this-one-kafka-design-pattern-changed-everything-for-us"
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
        <div className="flex items-center gap-2 text-sm dark:text-gray-400 text-[#475569] mb-2">
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
    <section ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">BLOGS</div>
            <h2
              className="text-4xl font-bold mb-6"
            >
              Blog & Articles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <p className="dark:text-lightgray text-[#475569] max-w-xl">
                My thoughts and insights on backend development, system design, and scalable architecture.
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
