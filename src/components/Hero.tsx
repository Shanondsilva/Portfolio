import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
        <h1 className="text-[15vw] md:text-[20vw] font-bold text-stroke opacity-10 leading-none text-center uppercase tracking-tighter">
          AI SYSTEMS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-lg">Hi 👋 I'm Shanon Dsilva</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
                AI SYSTEMS,<br />
                EDGE COMPUTING<br />
                & DEPLOYMENT.
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Decorative Circle */}
              <div className="absolute inset-0 bg-accent rounded-full scale-110 opacity-90 blur-3xl animate-pulse" />
              
              {/* Portrait */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
                <img 
                  src="https://i.ibb.co/Wv1zpzqp/Linked-In-Profile-Picture.jpg" 
                  alt="Shanon Dsilva"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Tags */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 z-20 px-6 py-2 bg-ink text-white rounded-full font-bold text-sm shadow-xl rotate-[-10deg]"
              >
                Strategist
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute top-12 -right-8 z-20 px-6 py-2 bg-ink text-white rounded-full font-bold text-sm shadow-xl rotate-[15deg]"
              >
                AI Engineer
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div className="glass p-8 rounded-3xl max-w-sm">
            <p className="text-lg font-medium leading-relaxed mb-6">
              Specializing in High-Performance AI Systems and Edge Computing Solutions.
            </p>
            <div className="flex items-center justify-between">
              <a href="mailto:Shanondsilva2135@gmail.com" className="font-bold underline underline-offset-4">Shanondsilva2135@gmail.com</a>
              <a href="mailto:Shanondsilva2135@gmail.com" className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center relative group cursor-pointer">
                <div className="absolute inset-0 bg-accent rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="relative z-10 text-[10px] font-bold uppercase text-center leading-tight">Let's<br/>Discuss</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
