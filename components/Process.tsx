import React from 'react';
import FadeIn from './FadeIn';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Hloubková analýza vašich potřeb, cílů a cílové skupiny. Definujeme strategii a rozsah projektu."
  },
  {
    number: "02",
    title: "Design",
    description: "Tvorba wireframů a vizuálního stylu. Prototypování uživatelské zkušenosti a schvalování designu."
  },
  {
    number: "03",
    title: "Development",
    description: "Kódování s důrazem na čistotu, rychlost a škálovatelnost. Pravidelné testování a revize."
  },
  {
    number: "04",
    title: "Launch",
    description: "Finální testování, nasazení do produkce a následná podpora. Váš projekt ožívá."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-lumina-accent font-mono text-sm uppercase tracking-widest mb-2 block">Workflow</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Náš Proces</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Ověřený postup, který garantuje výsledky. Od první myšlenky až po finální pixel.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-lumina-accent/30 to-transparent border-t border-dashed border-gray-700"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="relative group">
                  {/* Number Badge */}
                  <div className="w-24 h-24 mx-auto md:mx-0 bg-[#0F0F0F] border border-gray-800 rounded-full flex items-center justify-center relative z-10 group-hover:border-lumina-accent transition-colors duration-300 mb-6 shadow-xl">
                    <span className="text-3xl font-mono font-bold text-gray-700 group-hover:text-lumina-accent transition-colors">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;