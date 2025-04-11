
import React from 'react';
import { Building, Radio, Camera, Layout } from 'lucide-react';

const CompanyLogo: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="h-20 flex items-center justify-center border border-gray-800 rounded-lg p-4 hover:border-primaryblue transition-colors">
      <div className="flex items-center">
        {name === "company" && (
          <Building size={24} className="mr-2" />
        )}
        {name === "venture" && (
          <Radio size={24} className="mr-2" />
        )}
        {name === "studio" && (
          <Camera size={24} className="mr-2" />
        )}
        {name === "business" && (
          <Layout size={24} className="mr-2" />
        )}
        <span className="text-lg font-medium">{name}</span>
      </div>
    </div>
  );
};

const WorkSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">PREVIOUSLY WORKED ON</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CompanyLogo name="company" />
          <CompanyLogo name="venture" />
          <CompanyLogo name="studio" />
          <CompanyLogo name="business" />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
