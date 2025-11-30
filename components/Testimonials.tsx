import React from 'react';
import FadeIn from './FadeIn';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Lumina Studio předčilo naše očekávání. Jejich smysl pro detail a technická expertíza posunuly náš produkt na světovou úroveň.",
    author: "Martin Svoboda",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80"
  },
  {
    quote: "Spolupráce byla naprosto plynulá. Tým dokázal přesně vystihnout naši vizi a přetavit ji do fungujícího designu.",
    author: "Jana Nováková",
    role: "Marketing Director, Aura",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80"
  },
  {
    quote: "Profesionální přístup, rychlá komunikace a výsledek, který nám okamžitě zvedl konverze o 40%.",
    author: "Petr Dvořák",
    role: "Founder, GreenSpace",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lumina-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Co říkají <span className="text-lumina-accent">klienti</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="bg-[#141414]/80 backdrop-blur-sm border border-white/5 p-8 rounded-2xl relative hover:bg-[#1a1a1a] transition-colors h-full flex flex-col">
                <Quote className="text-lumina-accent mb-6 opacity-50" size={40} />
                
                <p className="text-gray-300 text-lg mb-8 flex-grow italic">
                  "{item.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <img 
                    src={item.image} 
                    alt={item.author} 
                    className="w-12 h-12 rounded-full object-cover border border-gray-700"
                  />
                  <div>
                    <h4 className="text-white font-bold">{item.author}</h4>
                    <p className="text-lumina-accent/80 text-sm font-mono">{item.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;