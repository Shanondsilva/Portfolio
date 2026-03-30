import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, BookOpen } from 'lucide-react';

interface ProjectImage {
  src: string;
  caption: string;
  description: string;
}

interface ProjectInfo {
  title: string;
  tagline: string;
  category: string;
  description: string;
  techStack: string[];
  images: ProjectImage[];
  link: string;
  github?: string;
  medium?: string;
}

const projectData: Record<string, ProjectInfo> = {
  '001': {
    title: 'MesaQ',
    tagline: 'Your meal. Your queue.',
    category: 'Full-Stack PWA',
    description: `MesaQ is a mobile-first PWA that fixes a simple problem: we all waste meal times doom-scrolling YouTube. Save the videos you actually want to watch. Build a timed queue that fits your meal. Track streaks to stay consistent.

Every design choice is rooted in behavioral psychology. The color system, streak mechanics, and queue flow all push you toward watching with intention, not impulse.

I built this solo from the ground up. Google OAuth handles login. Sessions auto-play with countdown transitions between videos. A GitHub-style streak calendar tracks your progress. Detox Mode filters out anything under 5 minutes. The stack: Next.js 14 (App Router), Supabase, TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel with daily cron jobs and transactional emails via Resend.`,
    techStack: [
      'Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS',
      'Framer Motion', 'Vercel', 'PWA', 'Google OAuth',
    ],
    images: [
      {
        src: 'https://i.ibb.co/ZQNJ7xF/Untitled-design.png',
        caption: 'Landing page and dashboard, desktop view',
        description: 'Clean landing page with Google OAuth and email sign-in. Once logged in, the dashboard shows your greeting, streak stats, session count, and an "Up next" video shelf. Hit "Start Meal Session" to begin. Desktop gets a sidebar, mobile gets bottom nav.',
      },
      {
        src: 'https://i.ibb.co/gFQL3fZb/Whats-App-Image-2026-03-28-at-5-00-48-AM-portrait.png',
        caption: 'Mobile-first dashboard',
        description: 'Built mobile-first because that\'s how people eat. Your streak, sessions, and video queue are all visible without scrolling. One big action button. Bottom nav for quick access. Everything works one-handed.',
      },
      {
        src: 'https://i.ibb.co/mV9dJ2yV/Detox-mode-and-calendar.png',
        caption: 'Settings, Detox Mode, and Streak Calendar',
        description: 'Settings include account management, timezone config, and Detox Mode, which filters videos under 5 minutes. The streak calendar works like GitHub\'s contribution graph. Each green square is a completed meal session over the last 3 months.',
      },
      {
        src: 'https://i.ibb.co/G3JPt3pM/Queue-and-session.png',
        caption: 'Session setup and queue preview',
        description: 'This is the core loop. Set your meal duration with a slider (5-60 min), pick a queue style (shuffle or shortest-first), and preview your auto-built queue. The session summary shows watch time, video count, and total meal time. No algorithm decides for you.',
      },
    ],
    link: 'https://mesaq-app.vercel.app/',
    github: 'https://github.com/Shanondsilva/MesaQ',
    medium: 'https://medium.com/@shanondsilva2135',
  },
};

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id as keyof typeof projectData];
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-accent hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-ink transition-colors mb-12 uppercase text-xs font-bold tracking-widest">
        <ArrowLeft className="w-4 h-4" /> Back to Portfolio
      </Link>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-mono text-sm mb-2 block">{project.category}</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-3 leading-none">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="text-xl md:text-2xl font-display text-gray-500 italic mb-8">{project.tagline}</p>
          )}
          <div className="text-base text-gray-600 leading-relaxed max-w-xl space-y-4 mb-8">
            {project.description.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wide bg-gray-900 text-white border border-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-sm hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                Visit Live Site
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-all duration-300 group"
              >
                <Github className="w-4 h-4" />
                View Source
              </a>
            )}
          </div>
          {project.medium && (
            <a
              href={project.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors group"
            >
              <BookOpen className="w-4 h-4" />
              Read the full breakdown on Medium
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          )}
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[40px] overflow-hidden shadow-2xl bg-gray-900"
        >
          <img 
            src={project.images[selectedImage].src} 
            alt={project.images[selectedImage].caption}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-12">
        <h2 className="text-4xl font-bold tracking-tighter uppercase">Product Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(idx)}
            >
              <div className={`rounded-3xl overflow-hidden shadow-xl bg-gray-900 transition-all duration-300 ${
                selectedImage === idx ? 'ring-2 ring-orange-500 ring-offset-4 ring-offset-[#F3F4F6]' : 'hover:shadow-2xl'
              }`}>
                <img 
                  src={img.src} 
                  alt={img.caption}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold">{img.caption}</h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{img.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
