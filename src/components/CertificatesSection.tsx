
import React from 'react';
import { Badge, FileCheck } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SA-123456",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3"
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PCD-789012",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"
  },
  {
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    date: "2023",
    credentialId: "META-FD-345678",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2022",
    credentialId: "MS-ADA-901234",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3"
  }
];

const CertificateCard: React.FC<(typeof certificates)[0]> = ({ 
  title, 
  issuer, 
  date, 
  credentialId, 
  image 
}) => {
  return (
    <div className="relative bg-black/30 rounded-lg overflow-hidden h-[400px] group">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-300"
        />
      </div>
      <div className="relative p-6 h-full flex flex-col justify-between z-10">
        <div>
          <div className="flex justify-between items-start mb-4">
            <FileCheck className="text-primaryblue h-8 w-8" />
            <span className="text-primaryblue text-sm font-medium">{date}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-lightgray">{issuer}</p>
        </div>
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/60">Credential ID</span>
            <span className="text-sm text-white/80">{credentialId}</span>
          </div>
          <button className="mt-4 w-full py-2 border border-primaryblue text-primaryblue rounded hover:bg-primaryblue hover:text-white transition-colors">
            View Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

const CertificatesSection: React.FC = () => {
  return (
    <section className="section-padding bg-black/20 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div>
            <h2 className="heading-line text-4xl font-bold">Certificates</h2>
            <p className="text-lightgray mt-4 max-w-xl">
              Professional certifications that validate my expertise and technical knowledge.
            </p>
          </div>
          <Badge size={80} className="text-primaryblue/20 mt-6 md:mt-0" />
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {certificates.map((certificate, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <CertificateCard {...certificate} />
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

export default CertificatesSection;
