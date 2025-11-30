import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Služby', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Proces', href: '#process' },
  { label: 'O nás', href: '#about' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-lumina-dark/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold tracking-tighter text-white relative group">
            Lumina<span className="text-lumina-accent">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <a 
                key={item.label} 
                href={item.href}
                className="group relative text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-lumina-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 border border-lumina-accent/50 bg-lumina-accent/10 text-lumina-accent hover:bg-lumina-accent hover:text-white transition-all duration-300 rounded text-sm font-medium hover:shadow-[0_0_15px_rgba(255,107,107,0.4)]"
            >
              Spolupráce
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden text-white focus:outline-none z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-110 text-lumina-accent' : ''}`}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0F0F0F] flex flex-col justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-8 invisible'
        }`}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-lumina-accent/5 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500/5 rounded-full blur-[60px]"></div>
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <a 
                key={item.label} 
                href={item.href}
                className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-lumina-accent/30 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-lumina-accent/50">0{index + 1}</span>
                  <span className="text-4xl sm:text-5xl font-bold text-white group-hover:text-lumina-accent transition-colors tracking-tight">
                    {item.label}
                  </span>
                </div>
                <ArrowRight className="text-white/20 group-hover:text-lumina-accent group-hover:-rotate-45 transition-all duration-300 transform" size={32} />
              </a>
            ))}
            
            <a 
              href="#contact"
              className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-lumina-accent/30 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: '150ms' }}
            >
               <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-lumina-accent/50">05</span>
                  <span className="text-4xl sm:text-5xl font-bold text-white group-hover:text-lumina-accent transition-colors tracking-tight">
                    Spolupráce
                  </span>
                </div>
               <ArrowRight className="text-white/20 group-hover:text-lumina-accent group-hover:-rotate-45 transition-all duration-300 transform" size={32} />
            </a>
          </div>

          {/* Mobile Footer Info */}
          <div className="mt-12 flex flex-col space-y-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Sledujte nás</p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/5">
               <p className="text-gray-500 text-sm">hello@luminastudio.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;