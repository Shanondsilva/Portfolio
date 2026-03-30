import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, BookOpen, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

const images = [
  {
    src: 'https://i.ibb.co/ZQNJ7xF/Untitled-design.png',
    caption: 'Landing page and dashboard, desktop view',
  },
  {
    src: 'https://i.ibb.co/gFQL3fZb/Whats-App-Image-2026-03-28-at-5-00-48-AM-portrait.png',
    caption: 'Mobile-first dashboard',
  },
  {
    src: 'https://i.ibb.co/mV9dJ2yV/Detox-mode-and-calendar.png',
    caption: 'Settings, Detox Mode, and Streak Calendar',
  },
  {
    src: 'https://i.ibb.co/G3JPt3pM/Queue-and-session.png',
    caption: 'Session setup and queue preview',
  },
];

const techStack = [
  'Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS',
  'Framer Motion', 'Vercel', 'PWA', 'Google OAuth',
];

export const FeaturedProject = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setActiveIndex(index);
  }, []);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % images.length, 1);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + images.length) % images.length, -1);
  }, [activeIndex, goTo]);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="featured-project" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full border border-orange-500/20">
              <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Featured Project</span>
            </div>
          </div>
          <h2
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none cursor-pointer hover:text-orange-500 transition-colors duration-300"
            onClick={() => navigate('/project/001')}
          >
            MesaQ
          </h2>
          <p className="text-xl md:text-2xl font-display text-gray-500 mt-2 italic">Your meal. Your queue.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div
          className="lg:col-span-7 cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => navigate('/project/001')}
        >
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gray-900 shadow-2xl">
            {/* Gradient overlay at bottom for caption */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={activeIndex}
                src={images[activeIndex].src}
                alt={images[activeIndex].caption}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                draggable={false}
              />
            </AnimatePresence>

            {/* Caption */}
            <div className="absolute bottom-4 left-6 right-6 z-20 flex items-end justify-between">
              <p className="text-white/90 text-sm font-medium">{images[activeIndex].caption}</p>
              <span className="text-white/50 text-xs font-mono shrink-0 ml-4">
                {activeIndex + 1}/{images.length}
              </span>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/25 transition-all duration-300 border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/25 transition-all duration-300 border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 mt-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); goTo(idx, idx > activeIndex ? 1 : -1); }}
                className={`relative flex-1 aspect-[16/10] rounded-xl overflow-hidden transition-all duration-300 ${
                  idx === activeIndex
                    ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-[#F3F4F6] shadow-lg'
                    : 'opacity-50 hover:opacity-80 grayscale hover:grayscale-0'
                }`}
                aria-label={`View ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Project Info */}
        <div className="lg:col-span-5 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              MesaQ is a mobile-first PWA that fixes a simple problem: we all waste meal times doom-scrolling YouTube. Save videos you actually want to watch, build a timed queue that fits your meal, and track streaks to stay consistent.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Every design choice is rooted in behavioral psychology. The color system, streak mechanics, and queue flow all push you toward watching with intention, not impulse.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              I built this solo from the ground up. Google OAuth handles login. Sessions auto-play with countdown transitions between videos. A GitHub-style streak calendar tracks your progress. Detox Mode filters out anything under 5 minutes. The stack: Next.js 14, Supabase, TypeScript, Tailwind CSS, Framer Motion. Deployed on Vercel with daily cron jobs and emails via Resend.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wide bg-gray-900 text-white border border-gray-800 hover:bg-orange-500 hover:border-orange-500 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://mesaq-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-sm hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                Visit Live Site
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://github.com/Shanondsilva/MesaQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-all duration-300 group"
              >
                <Github className="w-4 h-4" />
                View Source
              </a>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <a
                href="https://medium.com/@shanondsilva2135"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors group"
              >
                <BookOpen className="w-4 h-4" />
                Read the full breakdown on Medium
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            <button
              onClick={() => navigate('/project/001')}
              className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-ink hover:text-orange-500 transition-colors group"
            >
              View Full Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
