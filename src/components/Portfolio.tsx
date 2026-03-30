import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../lib/utils';

const mesaqImages = [
  'https://i.ibb.co/PvB4GWpC/Mesa-Q.png',
  'https://i.ibb.co/gFQL3fZb/Whats-App-Image-2026-03-28-at-5-00-48-AM-portrait.png',
  'https://i.ibb.co/mV9dJ2yV/Detox-mode-and-calendar.png',
  'https://i.ibb.co/G3JPt3pM/Queue-and-session.png',
];

const projects = [
  {
    id: '001',
    title: 'MesaQ',
    category: 'Full-Stack PWA',
    image: 'https://i.ibb.co/PvB4GWpC/Mesa-Q.png',
    color: 'bg-orange-500',
    hasSlideshow: true,
  },
  {
    id: '002',
    title: 'Showcase A4',
    category: 'Book Cover',
    image: 'https://picsum.photos/seed/book/800/600',
    color: 'bg-blue-500',
  },
  {
    id: '003',
    title: 'The Duct',
    category: 'Font Design',
    image: 'https://picsum.photos/seed/duct/800/600',
    color: 'bg-red-500',
  },
  {
    id: '004',
    title: 'iPhone 16 Pro',
    category: 'Application',
    image: 'https://picsum.photos/seed/iphone/800/600',
    color: 'bg-zinc-800',
  },
];

// MesaQ card with hover image slideshow
const MesaQCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      setImgIndex(0);
      return;
    }
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % mesaqImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => navigate(`/project/${project.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-900">
        {/* All images stacked, crossfade via opacity */}
        {mesaqImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`MesaQ screenshot ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${
              idx === imgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            referrerPolicy="no-referrer"
          />
        ))}
        
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <span className="text-white text-2xl font-bold mb-2">MesaQ</span>
          <span className="text-white/80 text-sm font-medium px-4 py-1.5 border border-white/30 rounded-full">View Project</span>
        </div>

        <div className="absolute bottom-6 left-6 flex items-center gap-2">
          <div className="px-4 py-2 glass rounded-full flex items-center gap-2 hover:bg-white hover:text-ink transition-all duration-300">
            <span className="text-xs font-bold uppercase tracking-wider">{project.category}</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-ink">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-start">
        <div>
          <span className="text-xs font-mono text-gray-400">{project.id}</span>
          <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

// Standard project card
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => navigate(`/project/${project.id}`)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-6 left-6 flex items-center gap-2">
          <div className="px-4 py-2 glass rounded-full flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider">{project.category}</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-start">
        <div>
          <span className="text-xs font-mono text-gray-400">{project.id}</span>
          <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export const Portfolio = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          project.hasSlideshow ? (
            <MesaQCard key={project.id} project={project} index={index} />
          ) : (
            <ProjectCard key={project.id} project={project} index={index} />
          )
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <HashLink 
          smooth 
          to="/#contact" 
          scroll={scrollWithOffset}
          className="px-8 py-4 bg-ink text-white rounded-full font-bold hover:bg-accent transition-colors duration-300"
        >
          Explore All Projects
        </HashLink>
      </div>
    </section>
  );
};
