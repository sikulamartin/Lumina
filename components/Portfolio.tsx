import React from 'react';
import { Project } from '../types';
import FadeIn from './FadeIn';
import { ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Neon Drift",
    category: "Branding a Web",
    image: "https://picsum.photos/800/600?random=1",
    description: "Identita inspirovaná kyberpunkem pro moderní závodní ligu."
  },
  {
    id: 2,
    title: "EcoSphere",
    category: "Mobilní Aplikace",
    image: "https://picsum.photos/800/600?random=2",
    description: "Sledování udržitelného životního stylu s daty v reálném čase."
  },
  {
    id: 3,
    title: "Urban Pulse",
    category: "Fotografické Portfolio",
    image: "https://picsum.photos/800/600?random=3",
    description: "Minimalistická prezentace architektonické fotografie."
  },
  {
    id: 4,
    title: "Aero Tech",
    category: "Produktový Design",
    image: "https://picsum.photos/800/600?random=4",
    description: "Elegantní rozhraní pro ovladače dronů nové generace."
  },
  {
    id: 5,
    title: "Velvet & Vine",
    category: "E-shop",
    image: "https://picsum.photos/800/600?random=5",
    description: "Luxusní trh s vínem s pohlcujícím příběhem."
  },
  {
    id: 6,
    title: "DataFlow",
    category: "SaaS Dashboard",
    image: "https://picsum.photos/800/600?random=6",
    description: "Komplexní vizualizace dat jednoduše a v tmavém režimu."
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-lumina-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Vybrané projekty</h2>
              <p className="text-gray-400 max-w-md">
                Výběr našich nedávných projektů, kde se design snoubí s funkčností.
              </p>
            </div>
            <a href="#" className="hidden md:inline-block text-lumina-accent hover:text-white transition-colors mt-4 md:mt-0 font-medium">
              Všechny projekty &rarr;
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]">
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay - Always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6">
                  <span className="text-lumina-accent text-sm font-medium tracking-wider uppercase mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur p-2 rounded-full text-white hover:bg-white/20 transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#" className="text-lumina-accent hover:text-white transition-colors font-medium">
              Všechny projekty &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;