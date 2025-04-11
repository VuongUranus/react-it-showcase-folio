
import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const awards = [
  {
    title: "Web Developer of the Year",
    organization: "WebTech Global Awards",
    year: "2024",
    description: "Recognized for outstanding contributions to responsive web design and accessibility"
  },
  {
    title: "Best Interactive Website",
    organization: "Digital Innovation Summit",
    year: "2023",
    description: "For developing an immersive e-commerce platform with innovative UX solutions"
  },
  {
    title: "Excellence in Frontend Development",
    organization: "React Community Awards",
    year: "2023",
    description: "Acknowledged for creating efficient and reusable component libraries"
  },
  {
    title: "Outstanding UI/UX Design",
    organization: "Design Excellence Awards",
    year: "2022",
    description: "For implementing intuitive user interfaces with exceptional attention to detail"
  }
];

const AwardsSection: React.FC = () => {
  return (
    <section className="section-padding py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div>
            <h2 className="heading-line text-4xl font-bold">Honors & Awards</h2>
            <p className="text-lightgray mt-4 max-w-xl">
              Recognition received for excellence in web development and design throughout my career.
            </p>
          </div>
          <Trophy size={100} className="text-primaryblue/20 mt-6 md:mt-0" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <Card key={index} className="bg-black/30 border-none shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-white">{award.title}</CardTitle>
                  <Award className="text-primaryblue h-6 w-6" />
                </div>
                <CardDescription className="text-lightgray flex justify-between items-center">
                  <span>{award.organization}</span>
                  <span className="text-primaryblue font-medium">{award.year}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
