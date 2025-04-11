
import React from 'react';

const CompanyLogo: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="h-20 flex items-center justify-center border border-gray-800 rounded-lg p-4 hover:border-primaryblue transition-colors">
      <div className="flex items-center">
        {name === "company" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        )}
        {name === "venture" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M18.7523 14.267C18.268 15.3898 17.457 16.3578 16.4177 17.0434C15.3785 17.7291 14.1559 18.0993 12.904 18.1113C11.6321 18.0947 10.3966 17.7142 9.34853 17.01C8.30044 16.3059 7.49089 15.3144 7.02227 14.1664" />
            <path d="M13.3457 8.18524C14.2796 9.14116 14.8091 10.4302 14.8091 11.764C14.8091 13.0979 14.2796 14.3869 13.3457 15.3428" />
            <path d="M10.6424 15.3428C9.70846 14.3869 9.179 13.0979 9.179 11.764C9.179 10.4302 9.70846 9.14116 10.6424 8.18524" />
            <path d="M16.4957 5.22362C18.3716 6.89251 19.5116 9.27145 19.5116 11.764C19.5116 14.2566 18.3716 16.6355 16.4957 18.3044" />
            <path d="M7.49227 18.3044C5.61638 16.6355 4.47632 14.2566 4.47632 11.764C4.47632 9.27145 5.61638 6.89251 7.49227 5.22362" />
          </svg>
        )}
        {name === "studio" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M8 2H5a2 2 0 0 0-2 2v3" />
            <path d="M16 2h3a2 2 0 0 1 2 2v3" />
            <path d="M16 22h3a2 2 0 0 0 2-2v-3" />
            <path d="M8 22H5a2 2 0 0 1-2-2v-3" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
        {name === "business" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
        )}
        <span className="text-lg font-medium">{name}</span>
      </div>
    </div>
  );
};

const SkillLogo: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="h-20 flex items-center justify-center border border-gray-800 rounded-lg p-4 hover:border-primaryblue transition-colors">
      <div className="flex items-center">
        {name === "company" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        )}
        {name === "venture" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M18.7523 14.267C18.268 15.3898 17.457 16.3578 16.4177 17.0434C15.3785 17.7291 14.1559 18.0993 12.904 18.1113C11.6321 18.0947 10.3966 17.7142 9.34853 17.01C8.30044 16.3059 7.49089 15.3144 7.02227 14.1664" />
            <path d="M13.3457 8.18524C14.2796 9.14116 14.8091 10.4302 14.8091 11.764C14.8091 13.0979 14.2796 14.3869 13.3457 15.3428" />
            <path d="M10.6424 15.3428C9.70846 14.3869 9.179 13.0979 9.179 11.764C9.179 10.4302 9.70846 9.14116 10.6424 8.18524" />
            <path d="M16.4957 5.22362C18.3716 6.89251 19.5116 9.27145 19.5116 11.764C19.5116 14.2566 18.3716 16.6355 16.4957 18.3044" />
            <path d="M7.49227 18.3044C5.61638 16.6355 4.47632 14.2566 4.47632 11.764C4.47632 9.27145 5.61638 6.89251 7.49227 5.22362" />
          </svg>
        )}
        {name === "studio" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M8 2H5a2 2 0 0 0-2 2v3" />
            <path d="M16 2h3a2 2 0 0 1 2 2v3" />
            <path d="M16 22h3a2 2 0 0 0 2-2v-3" />
            <path d="M8 22H5a2 2 0 0 1-2-2v-3" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
        {name === "business" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
        )}
        <span className="text-lg font-medium">{name}</span>
      </div>
    </div>
  );
};

const WorkSection: React.FC = () => {
  return (
    <div>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* <h2 className="text-2xl font-bold mb-12">TECHNICAL SKILLS</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CompanyLogo name="company" />
            <CompanyLogo name="venture" />
            <CompanyLogo name="studio" />
            <CompanyLogo name="business" />
          </div>
        </div>
      </section>

      <section className='section-padding'>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">🎖️ HONORS & AWARDS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkSection;
