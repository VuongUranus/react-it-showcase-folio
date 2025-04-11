
import React from 'react';
import { Quote } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const testimonials = [
  {
    text: "John transformed our outdated website into a modern, responsive platform that's increased our conversion rate by 40%. His attention to detail and user experience expertise made all the difference.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
  },
  {
    text: "Working with John was an absolute pleasure. He understood our vision immediately and delivered a product that exceeded our expectations. His technical knowledge and communication skills are exceptional.",
    author: "Michael Chen",
    position: "Product Manager, InnovateCo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
  },
  {
    text: "John's ability to translate complex requirements into elegant code is remarkable. He not only built us a beautiful website but also optimized it for performance and SEO. We've seen a significant increase in organic traffic since launch.",
    author: "Emily Rodriguez",
    position: "Marketing Director, GrowthFirm",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
  },
  {
    text: "I've worked with many developers over my 15-year career, and John stands out as one of the best. His problem-solving abilities and proactive approach to challenges made our project run smoothly from start to finish.",
    author: "David Park",
    position: "CTO, TechInnovate",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
  }
];

const TestimonialCard: React.FC<(typeof testimonials)[0]> = ({ 
  text, 
  author, 
  position, 
  avatar 
}) => {
  return (
    <div className="bg-black/30 p-6 rounded-lg h-full flex flex-col">
      <Quote className="text-primaryblue/80 h-10 w-10 mb-4" />
      <p className="text-white/90 italic mb-6 flex-grow">{text}</p>
      <div className="flex items-center mt-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={avatar} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-white">{author}</h4>
          <p className="text-sm text-lightgray">{position}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-line text-4xl font-bold mb-4">Testimonials</h2>
        <p className="text-lightgray max-w-2xl mb-16">
          What clients say about my work and collaboration experience.
        </p>
        
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
                <div className="h-full">
                  <TestimonialCard {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
