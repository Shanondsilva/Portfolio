import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../lib/utils';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="relative mb-16">
        <h2 className="text-6xl md:text-[12vw] font-bold text-stroke opacity-10 uppercase tracking-tighter leading-none">
          Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[40px] overflow-hidden shadow-2xl">
        <div className="relative h-[400px] lg:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop" 
            alt="A close up of two people shaking hands"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" />
        </div>

        <div className="p-8 md:p-16">
          <h3 className="text-5xl font-bold tracking-tighter uppercase mb-12">Let's Talk</h3>
          
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name*</label>
                <input 
                  type="text" 
                  placeholder="Your Name here"
                  className="w-full bg-transparent border-b border-ink/10 py-2 focus:border-accent outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email*</label>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-ink/10 py-2 focus:border-accent outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject*</label>
              <input 
                type="text" 
                placeholder="Write Subject line"
                className="w-full bg-transparent border-b border-ink/10 py-2 focus:border-accent outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message*</label>
              <textarea 
                rows={4}
                placeholder="Message"
                className="w-full bg-transparent border-b border-ink/10 py-2 focus:border-accent outline-none transition-colors resize-none"
              />
            </div>

            <button className="px-10 py-4 bg-ink text-white rounded-full font-bold hover:bg-accent transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link 
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://i.ibb.co/sdKN78f6/Gemini-Generated-Image-bvjdvibvjdvibvjd.png" 
              alt="Logo" 
              className="w-8 h-8 rounded-lg object-cover"
              referrerPolicy="no-referrer"
            />
          </Link>

          <div className="flex items-center gap-6">
            <a href="mailto:shanondsilva2135@gmail.com" className="p-2 rounded-full border border-ink/10 hover:bg-ink hover:text-white transition-all"><Mail className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/in/shanondsilva/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-ink/10 hover:bg-ink hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
            <a href="https://github.com/Shanondsilva" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-ink/10 hover:bg-ink hover:text-white transition-all"><Github className="w-4 h-4" /></a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
            <HashLink smooth to="/#experience" scroll={scrollWithOffset} className="hover:text-ink transition-colors">EXPERIENCE</HashLink>
            <HashLink smooth to="/#about" scroll={scrollWithOffset} className="hover:text-ink transition-colors">ABOUT</HashLink>
            <HashLink smooth to="/#projects" scroll={scrollWithOffset} className="hover:text-ink transition-colors">PROJECTS</HashLink>
            <HashLink smooth to="/#faq" scroll={scrollWithOffset} className="hover:text-ink transition-colors">Q&A</HashLink>
            <HashLink smooth to="/#contact" scroll={scrollWithOffset} className="hover:text-ink transition-colors">CONTACT</HashLink>
          </div>
        </div>
        
        <div className="mt-12 text-center text-[10px] text-gray-400 uppercase tracking-widest">
          @2025 Shanon Dsilva. All Right Reserved
        </div>
      </div>
    </footer>
  );
};
