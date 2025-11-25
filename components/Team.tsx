import React from 'react';
import { TeamMember } from '../types';
import FadeIn from './FadeIn';

const team: TeamMember[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Kreativní ředitel",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Hlavní designér",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Technický vedoucí",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "UX Výzkumník",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60"
  }
];

const Team: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <FadeIn direction="right">
             <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-lumina-accent/50"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                  Jsme kolektiv <span className="text-lumina-accent">vizionářů.</span>
                </h2>
                <div className="space-y-4 text-gray-400 text-lg">
                  <p>
                    V Lumina Studio netvoříme jen webové stránky, budujeme digitální ekosystémy. 
                    Založeni v roce 2023, naší misí je spojit uměleckou intuici s inženýrskou přesností.
                  </p>
                  <p>
                    Věříme, že skvělý design je neviditelný – prostě funguje. Náš tým je malý, agilní 
                    a posedlý detaily.
                  </p>
                </div>
             </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-lumina-gray p-6 rounded-lg text-center border border-gray-800 hover:border-lumina-accent/30 transition-colors">
                  <span className="block text-4xl font-bold text-white mb-2 font-mono">50+</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">Projektů</span>
               </div>
               <div className="bg-lumina-gray p-6 rounded-lg text-center border border-gray-800 hover:border-lumina-accent/30 transition-colors">
                  <span className="block text-4xl font-bold text-white mb-2 font-mono">12</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">Ocenění</span>
               </div>
               <div className="bg-lumina-gray p-6 rounded-lg text-center border border-gray-800 hover:border-lumina-accent/30 transition-colors">
                  <span className="block text-4xl font-bold text-white mb-2 font-mono">3</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">Let</span>
               </div>
               <div className="bg-lumina-gray p-6 rounded-lg text-center border border-gray-800 hover:border-lumina-accent/30 transition-colors">
                  <span className="block text-4xl font-bold text-white mb-2 font-mono">100%</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">Vášně</span>
               </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <h3 className="text-2xl font-bold text-white mb-10 border-l-4 border-lumina-accent pl-4 flex items-center gap-2">
            Poznejte náš tým
            <span className="h-px bg-gray-800 flex-grow ml-4"></span>
          </h3>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.1}>
              <div className="group text-center">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4] border border-gray-800">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  {/* Tech overlay effect */}
                  <div className="absolute inset-0 bg-lumina-accent/0 group-hover:bg-lumina-accent/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-lumina-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-lumina-accent transition-colors tracking-tight">
                  {member.name}
                </h4>
                <p className="text-lumina-accent/80 text-xs font-mono uppercase tracking-wider mt-2 border border-lumina-accent/20 rounded-full py-1 px-3 inline-block bg-lumina-accent/5">
                  {member.role}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;