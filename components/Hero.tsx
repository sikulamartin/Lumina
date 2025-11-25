import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center">
      
      {/* Central Glow (kept for text readability/focus) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-lumina-accent/15 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        
        {/* Badge / Pill */}
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lumina-accent/30 bg-lumina-accent/5 backdrop-blur-sm mb-8">
            <Sparkles size={14} className="text-lumina-accent" />
            <span className="text-sm font-medium text-lumina-accent tracking-wide uppercase font-mono">
              Digitální Kreativní Agentura
            </span>
          </div>
        </FadeIn>
        
        {/* Main Headline */}
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Tvoříme digitální <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-accent via-[#ff9e9e] to-white">
              zážitky.
            </span>
          </h1>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.3}>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Lumina Studio propojuje značky s lidmi skrze čistý design, 
            intuitivní technologie a působivé příběhy.
          </p>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a 
              href="#portfolio"
              className="px-8 py-4 bg-white text-lumina-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Naše práce
              <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              className="group px-8 py-4 border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-white font-medium rounded-full hover:border-lumina-accent hover:text-lumina-accent transition-all duration-300 flex items-center gap-2"
            >
              <Play size={16} className="fill-current" />
              Kontaktujte nás
            </a>
          </div>
        </FadeIn>

        {/* 3D Dashboard Mockup Preview */}
        <FadeIn delay={0.6}>
          <div className="relative mx-auto w-full max-w-5xl perspective-[2000px]">
            {/* The tilted plane */}
            <div className="relative rounded-xl border border-gray-800 bg-[#0F0F0F] shadow-2xl transform rotate-x-[20deg] overflow-hidden group hover:rotate-x-[10deg] transition-transform duration-700 ease-out">
              
              {/* Window Header */}
              <div className="h-12 border-b border-gray-800 flex items-center px-4 gap-2 bg-[#141414]">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <div className="ml-4 px-3 py-1 rounded bg-gray-800/50 text-xs text-gray-500 font-mono">lumina-studio.app</div>
              </div>

              {/* Window Content (Wireframe representation) */}
              <div className="p-8 grid grid-cols-12 gap-6 min-h-[400px]">
                {/* Sidebar */}
                <div className="col-span-3 space-y-4 hidden md:block">
                  <div className="h-8 w-3/4 bg-gray-800 rounded animate-pulse"></div>
                  <div className="space-y-2 mt-8">
                    <div className="h-4 w-full bg-gray-800/50 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-800/50 rounded"></div>
                    <div className="h-4 w-4/6 bg-gray-800/50 rounded"></div>
                  </div>
                  <div className="space-y-2 mt-8">
                    <div className="h-4 w-full bg-gray-800/50 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-800/50 rounded"></div>
                  </div>
                </div>

                {/* Main Area */}
                <div className="col-span-12 md:col-span-9 space-y-6">
                  {/* Hero banner inside mock */}
                  <div className="h-48 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-lumina-accent/5"></div>
                    <div className="h-8 w-1/3 bg-gray-700/50 rounded backdrop-blur-md"></div>
                  </div>

                  {/* Grid inside mock */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-32 rounded bg-gray-800/30 border border-gray-800"></div>
                    <div className="h-32 rounded bg-gray-800/30 border border-gray-800"></div>
                    <div className="h-32 rounded bg-gray-800/30 border border-gray-800"></div>
                  </div>
                   {/* Grid inside mock row 2 */}
                   <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 rounded bg-gray-800/30 border border-gray-800"></div>
                    <div className="h-24 rounded bg-gray-800/30 border border-gray-800"></div>
                  </div>
                </div>
              </div>

              {/* Gradient overlay to fade bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-lumina-dark via-lumina-dark/80 to-transparent z-20"></div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;