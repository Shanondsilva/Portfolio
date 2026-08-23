import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: '001',
    title: 'Impulsive',
    category: 'Android Product',
    tech: 'Kotlin · Jetpack Compose · MVVM · SQLCipher',
    status: 'LIVE PRODUCT',
    description: 'Privacy-first Android product built and launched end to end.',
    image: 'https://images.unsplash.com/photo-1607252656733-fd7420c2420a?w=800&q=80',
    color: 'bg-zinc-900',
    link: ''
  },
  {
    id: '002',
    title: 'HARI',
    category: 'Local AI Assistant',
    tech: 'Python · Local AI · Ollama · Speech',
    status: 'ACTIVE DEVELOPMENT',
    description: 'Local-first desktop AI assistant designed around private on-device workflows and voice interaction.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    color: 'bg-zinc-800'
  },
  {
    id: '003',
    title: 'MesaQ',
    category: 'Full-Stack PWA',
    tech: 'Next.js · TypeScript · Supabase',
    status: 'BUILT',
    description: 'Mobile-first PWA designed for more intentional meal-time media use.',
    image: 'https://i.ibb.co/1tSV9Yny/Untitled-design1.png',
    color: 'bg-orange-500',
    link: 'https://mesaq-app.vercel.app/'
  },
  {
    id: '004',
    title: 'RoastD',
    category: 'Applied AI',
    tech: 'React · Structured AI Output · Evaluation',
    status: 'BUILT',
    description: 'AI-assisted document feedback tool with structured output handling and evaluation workflows.',
    image: 'https://i.ibb.co/wFhB6HFp/Screenshot-2026-04-03-181016.png',
    color: 'bg-blue-500'
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
            className="group cursor-pointer flex flex-col"
          >
            <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 ${project.id === '001' ? 'ring-1 ring-black/10 shadow-lg' : ''}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
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
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-ink">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-6 flex flex-col gap-2 px-1">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-gray-400">{project.id}</span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      project.status === 'LIVE PRODUCT' 
                        ? 'bg-green-100 text-green-800 ring-1 ring-green-600/20' 
                        : project.status === 'ACTIVE DEVELOPMENT'
                        ? 'bg-blue-100 text-blue-800 ring-1 ring-blue-600/20'
                        : 'bg-gray-100 text-gray-600 ring-1 ring-gray-400/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-ink">{project.title}</h3>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-600 mt-1">{project.tech}</p>
              <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
