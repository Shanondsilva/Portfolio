import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Instagram, Linkedin, Twitter, Globe, Github, Mail, Menu, X } from 'lucide-react';
import { cn, scrollWithOffset } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'EXPERIENCE', to: '/#experience' },
    { name: 'ABOUT', to: '/#about' },
    { name: 'PROJECTS', to: '/#projects' },
    { name: 'Q&A', to: '/#faq' },
    { name: 'CONTACT', to: '/#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6",
      isScrolled || isMobileMenuOpen ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="https://i.ibb.co/sdKN78f6/Gemini-Generated-Image-bvjdvibvjdvibvjd.png" 
              alt="Logo" 
              className="w-8 h-8 rounded-lg object-cover"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <HashLink 
                key={link.name} 
                smooth 
                to={link.to} 
                scroll={scrollWithOffset}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </HashLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <a href="mailto:shanondsilva2135@gmail.com" className="p-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://github.com/Shanondsilva" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/shanondsilva/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <HashLink 
            smooth 
            to="/#contact" 
            scroll={scrollWithOffset}
            className="hidden sm:block px-6 py-2 bg-ink text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Let's Talk
          </HashLink>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:text-accent transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-t border-ink/5 shadow-2xl md:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <HashLink 
                  key={link.name} 
                  smooth 
                  to={link.to} 
                  scroll={scrollWithOffset}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold tracking-tighter hover:text-accent transition-colors"
                >
                  {link.name}
                </HashLink>
              ))}
              <div className="h-[1px] bg-ink/10 my-2" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <a href="mailto:shanondsilva2135@gmail.com" className="p-2 bg-ink/5 rounded-full hover:text-accent transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/Shanondsilva" target="_blank" rel="noopener noreferrer" className="p-2 bg-ink/5 rounded-full hover:text-accent transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/shanondsilva/" target="_blank" rel="noopener noreferrer" className="p-2 bg-ink/5 rounded-full hover:text-accent transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <HashLink 
                  smooth 
                  to="/#contact" 
                  scroll={scrollWithOffset}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 bg-ink text-white rounded-full text-xs font-bold uppercase tracking-widest"
                >
                  Let's Talk
                </HashLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
      style={{ scaleX }}
    />
  );
};
