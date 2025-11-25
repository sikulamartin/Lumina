import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import FadeIn from './FadeIn';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Děkujeme za zprávu! Brzy se vám ozveme.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-lumina-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pojďme tvořit společně</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Jste připraveni pozvednout svou digitální prezentaci? Řekněte nám o svém projektu.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-[#252525] rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 flex flex-col justify-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Kontaktní údaje</h3>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-lumina-accent/10 rounded-full text-lumina-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Napište nám</p>
                    <p className="text-white font-medium">hello@luminastudio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-lumina-accent/10 rounded-full text-lumina-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Navštivte nás</p>
                    <p className="text-white font-medium">123 Design Avenue, Creative City</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-lumina-accent/10 rounded-full text-lumina-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Zavolejte nám</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
             <FadeIn direction="left" delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Jméno</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lumina-accent transition-colors"
                      placeholder="Jan Novák"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lumina-accent transition-colors"
                      placeholder="jan@email.cz"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Zpráva</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lumina-accent transition-colors resize-none"
                    placeholder="Řekněte nám o svém projektu..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-lumina-accent text-white font-bold py-4 rounded-lg hover:bg-[#ff8585] transition-colors flex items-center justify-center gap-2 group"
                >
                  Odeslat zprávu
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-24 border-t border-[#333] py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Lumina Studio. Všechna práva vyhrazena.</p>
      </footer>
    </section>
  );
};

export default Contact;