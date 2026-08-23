import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-center mb-12">
        <div className="px-4 py-1 bg-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest">About Me</div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
          Full-stack product engineer and founder with experience delivering Android, web and applied AI products from concept through production. My work spans product definition, system architecture, implementation, testing and release, with a focus on privacy-conscious engineering, reliable user experiences and practical product delivery.
          <br /><br />
          I combine hands-on technical development with product and commercial decision-making, allowing me to approach software not only as an engineering problem, but as a product that must solve a genuine user need, perform reliably and succeed beyond development.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="flex lg:flex-col justify-around lg:justify-start lg:space-y-16">
          <div>
            <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-2">1</div>
            <div className="text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-widest">Product Launched</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-2">4+</div>
            <div className="text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-widest">Products & Projects</div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-accent rounded-full opacity-20 blur-2xl" />
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://i.ibb.co/BKYq7P9X/Portfolio-picture.jpg" 
                alt="About Portrait"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.a 
              href="/resume.pdf"
              download="Shanon_Dsilva_Resume.pdf"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="text-[8px] font-bold uppercase text-center leading-tight">
                Download My CV
              </div>
              <ArrowDown className="w-4 h-4 absolute bottom-2" />
            </motion.a>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};
