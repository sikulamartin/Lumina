import React from 'react';
import FadeIn from './FadeIn';
import { Monitor, PenTool, BarChart3, Globe, Cpu, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <PenTool size={32} />,
    title: "UI/UX Design",
    description: "Navrhujeme intuitivní rozhraní, která uživatelé milují. Důraz na estetiku a použitelnost."
  },
  {
    icon: <Monitor size={32} />,
    title: "Webový Vývoj",
    description: "Robustní frontendová i backendová řešení postavená na moderních technologiích (React, Next.js)."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Digitální Strategie",
    description: "Analýza trhu a dat, která pomáhá značkám růst ve správném směru."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobilní Aplikace",
    description: "Nativní a cross-platform aplikace pro iOS a Android s bezkonkurenčním výkonem."
  },
  {
    icon: <Globe size={32} />,
    title: "SEO a Výkon",
    description: "Optimalizace pro vyhledávače a rychlost načítání pro maximální dosah."
  },
  {
    icon: <Cpu size={32} />,
    title: "AI Integrace",
    description: "Implementace chytrých řešení a automatizace procesů pomocí umělé inteligence."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Naše <span className="text-lumina-accent">Služby</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Komplexní řešení pro vaši digitální transformaci. Spojujeme kreativitu s technologií.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group p-8 rounded-xl bg-[#141414] border border-white/5 hover:border-lumina-accent/30 hover:bg-[#1a1a1a] transition-all duration-300 h-full">
                <div className="mb-6 p-4 bg-lumina-accent/5 rounded-lg inline-block text-lumina-accent group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lumina-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;