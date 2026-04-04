import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../lib/utils';

const projects = [
  {
    id: '001',
    title: 'MesaQ',
    category: 'MesaQ',
    image: 'https://i.ibb.co/1tSV9Yny/Untitled-design1.png',
    color: 'bg-orange-500',
    link: 'https://mesaq-app.vercel.app/'
  },
  {
    id: '002',
    title: 'RoastD',
    category: 'RoastD',
    image: 'https://i.ibb.co/wFhB6HFp/Screenshot-2026-04-03-181016.png',
    color: 'bg-blue-500'
  },
  {
    id: '003',
    title: 'The Duct',
    category: 'Font Design',
    image: 'https://picsum.photos/seed/duct/800/600',
    color: 'bg-red-500'
  },
  {
    id: '004',
    title: 'iPhone 16 Pro',
    category: 'Application',
    image: 'https://picsum.photos/seed/iphone/800/600',
    color: 'bg-zinc-800'
  }
];

export const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
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
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 glass rounded-full flex items-center gap-2 hover:bg-white hover:text-ink transition-all duration-300"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider">{project.category}</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-ink">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </a>
                ) : (
                  <div className="px-4 py-2 glass rounded-full flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider">{project.category}</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <span className="text-xs font-mono text-gray-400">{project.id}</span>
                <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
              </div>
            </div>
          </motion.div>
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
