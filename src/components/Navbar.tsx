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
  const isRoastDPage = location.pathname === '/project/004';

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
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6",
      isScrolled || isMobileMenuOpen ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="https://i.ibb.co/23fCNhpd/s.png" 
              alt="Logo" 
              className="h-9 w-auto object-contain"
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
                className={cn(
                  "transition-colors",
                  isRoastDPage ? "hover:text-[#86102a]" : "hover:text-accent"
                )}
              >
                {link.name}
              </HashLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <a 
              href="mailto:Shanondsilva2135@gmail.com?subject=Portfolio%20Enquiry" 
              aria-label="Email Shanon Dsilva"
              title="Email Shanon Dsilva"
              className={cn("p-2 transition-colors", isRoastDPage ? "hover:text-[#86102a]" : "hover:text-accent")}
            >
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://github.com/Shanondsilva" target="_blank" rel="noopener noreferrer" className={cn("p-2 transition-colors", isRoastDPage ? "hover:text-[#86102a]" : "hover:text-accent")}>
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/shanondsilva/" target="_blank" rel="noopener noreferrer" className={cn("p-2 transition-colors", isRoastDPage ? "hover:text-[#86102a]" : "hover:text-accent")}>
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <HashLink 
            smooth
            to="/#contact"
            scroll={scrollWithOffset}
            className={cn(
              "hidden sm:block px-6 py-2 bg-ink text-white rounded-full text-xs font-bold uppercase tracking-widest transition-colors",
              isRoastDPage ? "hover:bg-[#86102a]" : "hover:bg-accent"
            )}
          >
            Let's Talk
          </HashLink>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn("md:hidden p-2 transition-colors", isRoastDPage ? "hover:text-[#86102a]" : "hover:text-accent")}
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
                  className={cn(
                    "text-3xl font-bold tracking-tighter transition-colors",
                    isRoastDPage ? "hover:text-[#86102a]" : "hover:text-accent"
                  )}
                >
                  {link.name}
                </HashLink>
              ))}
              <div className="h-[1px] bg-ink/10 my-2" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <a 
                    href="mailto:Shanondsilva2135@gmail.com?subject=Portfolio%20Enquiry" 
                    aria-label="Email Shanon Dsilva"
                    title="Email Shanon Dsilva"
                    className={cn("p-2 bg-ink/5 rounded-full transition-colors", isRoastDPage ? "hover:text-[#86102a]" : "hover:text-accent")}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/Shanondsilva" target="_blank" rel="noopener noreferrer" className={cn("p-2 bg-ink/5 rounded-full transition-colors", isRoastDPage ? "hover:text-[#86102a]" : "hover:text-accent")}>
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/shanondsilva/" target="_blank" rel="noopener noreferrer" className={cn("p-2 bg-ink/5 rounded-full transition-colors", isRoastDPage ? "hover:text-[#86102a]" : "hover:text-accent")}>
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <HashLink 
                  smooth
                  to="/#contact"
                  scroll={scrollWithOffset}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 bg-ink text-white rounded-full text-xs font-bold uppercase tracking-widest text-center"
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
  const location = useLocation();
  const isRoastDPage = location.pathname === '/project/004';
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 right-0 h-1 z-[60] origin-left",
        isRoastDPage ? "bg-[#86102a]" : "bg-accent"
      )}
      style={{ scaleX }}
    />
  );
};
