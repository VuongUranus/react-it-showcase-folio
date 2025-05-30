
import React, { useRef, useEffect } from 'react';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { motion, useAnimation, useInView } from 'framer-motion';

const testimonials = [
  {
    text: `Only one word that comes to mind when I think of Minh Vuong, and that’s TALENT. 
I worked with Vuong at Mobile World Investment. During his time on my team, he became both my teammate and my friend. 
As a key role in the textbase- streaming system, he has all the essential characteristics: responsive, positive, analytical, and inspiring. Vuong doesn’t just develop and operate the system, he guides and encourages others in the team. 
Thanks, Vuong! You made my time at MWG a pleasure.`,
    author: "Thien Hang",
    position: "Data Engineer, MLOps Engineer, AdTech",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEKcV4Qq040Cg/profile-displayphoto-shrink_400_400/B4DZPEbtZNHQAg-/0/1734167420128?e=1750291200&v=beta&t=AjcJz-NggF_hIzreuyoYpYOa-3LRATQuco9hH4wVDxQ"
  }
];

const TestimonialCard: React.FC<(typeof testimonials)[0]> = ({
  text,
  author,
  position,
  avatar
}) => {
  return (
    <div className="dark:bg-black/30 bg-[#f2f3f5] p-6 rounded-lg h-full flex flex-col">
      <Quote className="text-primaryblue/80 h-10 w-10 mb-4" />
      <p className="dark:text-white/90 text-[#475569]/90 italic mb-6 flex-grow">{text}</p>
      <div className="flex items-center mt-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={avatar} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold dark:text-white">{author}</h4>
          <p className="text-sm dark:text-lightgray text-[#475569]">{position}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
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
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section ref={sectionRef} className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <div className="inline-block bg-primaryblue/20 text-primaryblue px-4 py-1 rounded-full mb-4 font-medium text-sm">TESTIMONIAL</div>
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <p className="dark:text-lightgray text-[#475569] max-w-2xl mb-16">
            What people say about my work and collaboration experience.
          </p>
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                  <motion.div variants={itemVariants} className="h-full">
                    <TestimonialCard {...testimonial} />
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
    </section >
  );
};

export default TestimonialsSection;
