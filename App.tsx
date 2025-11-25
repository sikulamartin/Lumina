import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <main className="bg-lumina-dark min-h-screen text-white selection:bg-lumina-accent selection:text-white relative overflow-hidden">
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top Right Orb - Red/Accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lumina-accent/5 rounded-full blur-[120px] transform translate-x-1/4 -translate-y-1/4"></div>
        
        {/* Bottom Left Orb - Blue/Cool */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4"></div>
        
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Portfolio />
        <Team />
        <Contact />
      </div>
    </main>
  );
};

export default App;