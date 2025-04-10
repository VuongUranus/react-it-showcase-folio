
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-darkbg">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="w-20 h-1 bg-white mb-10"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Nice to meet you,<br />
                  I'm John Carter
                </h1>
                <p className="text-lightgray text-lg mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit femet turpis
                  pretium bibendum nisi est sagittis aliquam pretium nunc curabitur magna
                  est in nulla id volutpat et venenatis at luctus.
                </p>

                <div className="flex space-x-8">
                  <div>
                    <div className="flex items-center">
                      <span className="text-5xl font-bold">12</span>
                      <span className="text-primaryblue text-2xl font-bold ml-2">+</span>
                    </div>
                    <p className="text-sm text-lightgray">Years of<br />experience</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center">
                      <span className="text-5xl font-bold">150</span>
                      <span className="text-primaryblue text-2xl font-bold ml-2">+</span>
                    </div>
                    <p className="text-sm text-lightgray">Successful<br />projects</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="rounded-full overflow-hidden border-4 border-gray-800 w-80 h-80">
                  <img 
                    src="/lovable-uploads/c5509d48-3a36-4a3f-a77b-bc350953e2b8.png"
                    alt="John Carter"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Story section with two stories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src="/lovable-uploads/71300caa-9de8-491a-8d75-c7ee392c731e.png" 
                  alt="Development setup"
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                <div className="mb-4">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">MY STORY</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">My first website design back in 2001</h2>
                <p className="text-lightgray">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                </p>
              </div>
              
              <div className="lg:pt-56">
                <div className="mb-4">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">MY STORY</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">How I started as a web developer</h2>
                <p className="text-lightgray mb-8">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                </p>
                
                <img 
                  src="/lovable-uploads/eecf0bc3-f895-4d83-a15d-95be66f98f2a.png" 
                  alt="Developer workspace"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-8">
              <span className="text-sm text-gray-400 uppercase tracking-wider">MY EXPERIENCE</span>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
              <h2 className="text-4xl font-bold mb-6 lg:mb-0 lg:max-w-md">Over 10 years of experience and 100+ projects</h2>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 flex items-center gap-2">
                Get in touch <ArrowRight size={18} />
              </Button>
            </div>
            
            <Separator className="bg-gray-800 my-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div>
                <h3 className="text-lg font-bold mb-6">SKILL SET</h3>
                <ul className="space-y-4">
                  <li className="text-xl">HTML & CSS</li>
                  <li className="text-xl">Javascript</li>
                  <li className="text-xl">React JS</li>
                  <li className="text-xl">Node JS</li>
                  <li className="text-xl">Python</li>
                  <li className="text-xl">Webflow</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-6">AWWARDS</h3>
                <ul className="space-y-4">
                  <li className="text-xl">Best Website of 2022</li>
                  <li className="text-xl">AWWW Website Award</li>
                  <li className="text-xl">Innovative Developer 2019</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-6">TOP CLIENTS</h3>
                <ul className="space-y-4">
                  <li className="text-xl">Venture</li>
                  <li className="text-xl">Agency</li>
                  <li className="text-xl">Studio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Past Clients section */}
        <section className="py-20 bg-[#1A1F28]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex justify-center mb-8">
              <span className="text-sm text-primaryblue uppercase tracking-wider">MY PAST CLIENTS</span>
            </div>
            
            <h2 className="text-4xl font-bold text-center mb-16">
              Brand & companies I have<br />
              collaborated with
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              <div className="flex items-center justify-center bg-black/20 p-6 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <span>company</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-black/20 p-6 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M18.7523 14.267C18.268 15.3898 17.457 16.3578 16.4177 17.0434C15.3785 17.7291 14.1559 18.0993 12.904 18.1113C11.6321 18.0947 10.3966 17.7142 9.34853 17.01C8.30044 16.3059 7.49089 15.3144 7.02227 14.1664"/>
                    <path d="M13.3457 8.18524C14.2796 9.14116 14.8091 10.4302 14.8091 11.764C14.8091 13.0979 14.2796 14.3869 13.3457 15.3428"/>
                    <path d="M10.6424 15.3428C9.70846 14.3869 9.179 13.0979 9.179 11.764C9.179 10.4302 9.70846 9.14116 10.6424 8.18524"/>
                    <path d="M16.4957 5.22362C18.3716 6.89251 19.5116 9.27145 19.5116 11.764C19.5116 14.2566 18.3716 16.6355 16.4957 18.3044"/>
                    <path d="M7.49227 18.3044C5.61638 16.6355 4.47632 14.2566 4.47632 11.764C4.47632 9.27145 5.61638 6.89251 7.49227 5.22362"/>
                  </svg>
                  <span>venture</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-black/20 p-6 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M8 2H5a2 2 0 0 0-2 2v3"/>
                    <path d="M16 2h3a2 2 0 0 1 2 2v3"/>
                    <path d="M16 22h3a2 2 0 0 0 2-2v-3"/>
                    <path d="M8 22H5a2 2 0 0 1-2-2v-3"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  <span>studio</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-black/20 p-6 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                    <path d="M3 9h18"/>
                    <path d="M9 21V9"/>
                  </svg>
                  <span>business</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-black/20 p-6 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v8"/>
                    <path d="M8 12h8"/>
                  </svg>
                  <span>organization</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-black/20 p-6 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M4 11a9 9 0 0 1 9 9"/>
                    <path d="M4 4a16 16 0 0 1 16 16"/>
                    <circle cx="5" cy="19" r="1"/>
                  </svg>
                  <span>application</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-black/20 p-6 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                    <path d="M7 7h.01"/>
                    <path d="M17 7h.01"/>
                    <path d="M7 17h.01"/>
                    <path d="M17 17h.01"/>
                  </svg>
                  <span>enterprise</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-black/20 p-6 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m7 10 5 5 5-5"/>
                  </svg>
                  <span>startup</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-black/20 p-6 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  <span>institute</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-black/20 p-6 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  <span>agency</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 flex items-center gap-2">
                Get in touch <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </section>

        {/* Work Experience section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-8">
              <span className="text-sm text-gray-400 uppercase tracking-wider">MY EXPERIENCE</span>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
              <h2 className="text-4xl font-bold mb-6 lg:mb-0">I've worked with some<br /> amazing companies</h2>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 flex items-center gap-2">
                Get in touch <ArrowRight size={18} />
              </Button>
            </div>
            
            <Separator className="bg-gray-800 my-12" />
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-1">
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M18.7523 14.267C18.268 15.3898 17.457 16.3578 16.4177 17.0434C15.3785 17.7291 14.1559 18.0993 12.904 18.1113C11.6321 18.0947 10.3966 17.7142 9.34853 17.01C8.30044 16.3059 7.49089 15.3144 7.02227 14.1664"/>
                      <path d="M13.3457 8.18524C14.2796 9.14116 14.8091 10.4302 14.8091 11.764C14.8091 13.0979 14.2796 14.3869 13.3457 15.3428"/>
                      <path d="M10.6424 15.3428C9.70846 14.3869 9.179 13.0979 9.179 11.764C9.179 10.4302 9.70846 9.14116 10.6424 8.18524"/>
                      <path d="M16.4957 5.22362C18.3716 6.89251 19.5116 9.27145 19.5116 11.764C19.5116 14.2566 18.3716 16.6355 16.4957 18.3044"/>
                      <path d="M7.49227 18.3044C5.61638 16.6355 4.47632 14.2566 4.47632 11.764C4.47632 9.27145 5.61638 6.89251 7.49227 5.22362"/>
                    </svg>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-bold mb-2">Head of Engineering at Venture</h3>
                  <p className="text-lightgray mb-4">
                    Lorem ipsum dolor sit amet, consectet adipiscing elit et et est tortor luctus aliquam pulvinar senectus ut sapien sed nunc
                  </p>
                </div>
                <div className="lg:col-span-3 text-right">
                  <span className="text-gray-400 uppercase text-sm mb-1">JAN 2019 / PRESENT</span>
                </div>
              </div>
              
              <Separator className="bg-gray-800" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-1">
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-bold mb-2">Lead Frontend Developer at React</h3>
                  <p className="text-lightgray mb-4">
                    Lorem ipsum dolor sit amet, consectet adipiscing elit et et est tortor luctus aliquam pulvinar senectus ut sapien sed nunc
                  </p>
                </div>
                <div className="lg:col-span-3 text-right">
                  <span className="text-gray-400 uppercase text-sm mb-1">APR 2014 / JAN 2019</span>
                </div>
              </div>
              
              <Separator className="bg-gray-800" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-1">
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M8 2H5a2 2 0 0 0-2 2v3"/>
                      <path d="M16 2h3a2 2 0 0 1 2 2v3"/>
                      <path d="M16 22h3a2 2 0 0 0 2-2v-3"/>
                      <path d="M8 22H5a2 2 0 0 1-2-2v-3"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-bold mb-2">Frontend Lead at Studio</h3>
                  <p className="text-lightgray mb-4">
                    Lorem ipsum dolor sit amet, consectet adipiscing elit et et est tortor luctus aliquam pulvinar senectus ut sapien sed nunc
                  </p>
                </div>
                <div className="lg:col-span-3 text-right">
                  <span className="text-gray-400 uppercase text-sm mb-1">AUG 2010 / APR 2014</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-8">
              <span className="text-sm text-gray-400 uppercase tracking-wider">MY EXPERIENCE</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-12">Past education &<br /> credentials</h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-lightgray">
                  Lorem ipsum dolor sit amet, consectet adipiscing elit et et est tortor luctus aliquam pulvinar senectus ut sapien sed nunc
                </p>
              </div>
            </div>
            
            <Separator className="bg-gray-800 my-12" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-12">
                <div>
                  <div className="mb-2">
                    <span className="text-gray-400 uppercase text-sm mb-1">STANFORD UNIVERSITY / JAN 2016</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Frontend Web Developer Degree</h3>
                  <p className="text-lightgray">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat dolor.
                  </p>
                </div>
                
                <div>
                  <div className="mb-2">
                    <span className="text-gray-400 uppercase text-sm mb-1">GOOGLE / APR 2011</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Javascript Basics Course</h3>
                  <p className="text-lightgray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas feugiat sagittis, nunc id hac faucibus in risus.
                  </p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <div className="mb-2">
                    <span className="text-gray-400 uppercase text-sm mb-1">MIT UNIVERSITY / AUG 2014</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">User Experience Master</h3>
                  <p className="text-lightgray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi ut lacinia leo nunc id tellus. Dui, curabitur lorem massa cursus.
                  </p>
                </div>
                
                <div>
                  <div className="mb-2">
                    <span className="text-gray-400 uppercase text-sm mb-1">NEW YORK UNIVERSITY / MAY 2008</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Web Development Degree</h3>
                  <p className="text-lightgray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum semtincus dis nunc fermentum tellus id. Eros tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-8">
              <span className="text-sm text-gray-400 uppercase tracking-wider">MY TOOLS</span>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
              <h2 className="text-4xl font-bold mb-6 lg:mb-0">
                Discover what tools<br />
                I use for work
              </h2>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-primaryblue flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Github", icon: "github", description: "Lorem ipsum dolor sit amet dolor sitamet aliame consictet adipiscing elit" },
                { name: "Vercel", icon: "triangle", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse dolore" },
                { name: "VS Code", icon: "code", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" },
                { name: "Codepen", icon: "pen-tool", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" }
              ].map((tool, i) => (
                <Card key={i} className="bg-gray-800/50 border-gray-700 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                        {tool.icon === "github" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                          </svg>
                        )}
                        {tool.icon === "triangle" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                          </svg>
                        )}
                        {tool.icon === "code" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6"/>
                            <polyline points="8 6 2 12 8 18"/>
                          </svg>
                        )}
                        {tool.icon === "pen-tool" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 19 7-7 3 3-7 7-3-3z"/>
                            <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                            <path d="m2 2 7.586 7.586"/>
                            <circle cx="11" cy="11" r="2"/>
                          </svg>
                        )}
                      </div>
                      <h3 className="font-bold text-xl">{tool.name}</h3>
                    </div>
                    <p className="text-lightgray text-sm mb-6">{tool.description}</p>
                    <Button variant="link" className="flex items-center text-white px-0 hover:text-primaryblue">
                      Download now <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
