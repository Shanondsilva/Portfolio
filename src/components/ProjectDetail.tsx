import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projectData = {
  '001': {
    title: 'MesaQ',
    tagline: 'Your meal. Your queue.',
    category: 'MesaQ',
    description: [
      "MesaQ is a mobile-first PWA that fixes a simple problem: we all waste meal times doom-scrolling YouTube. Save the videos you actually want to watch. Build a timed queue that fits your meal. Track streaks to stay consistent.",
      "Every design choice is rooted in behavioral psychology. The color system, streak mechanics, and queue flow all push you toward watching with intention, not impulse.",
      "I built this solo from the ground up. Google OAuth handles login. Sessions auto-play with countdown transitions between videos. A GitHub-style streak calendar tracks your progress. Detox Mode filters out anything under 5 minutes. The stack: Next.js 14 (App Router), Supabase, TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel with daily cron jobs and transactional emails via Resend."
    ],
    techStack: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Vercel", "PWA", "Google OAuth"],
    mediumLink: "https://medium.com/@shanondsilva2135/i-built-an-app-that-fights-youtube-addiction-then-youtube-fought-back-c7a919dcdcf5",
    image: "https://i.ibb.co/1tSV9Yny/Untitled-design1.png",
    link: 'https://mesaq-app.vercel.app/',
    sourceLink: 'https://github.com/Shanondsilva',
    screenshots: [
      {
        image: "https://i.ibb.co/HL7TPGsr/Mesa-Q.png",
        title: "Landing page and dashboard, desktop view",
        description: "Clean landing page with Google OAuth and email sign-in. Once logged in, the dashboard shows your greeting, streak stats, session count, and an \"Up next\" video shelf. Hit \"Start Meal Session\" to begin. Desktop gets a sidebar, mobile gets bottom nav."
      },
      {
        image: "https://i.ibb.co/bR2Wm6FD/Whats-App-Image-2026-03-30-at-9-06-07-AM-portrait.png",
        title: "Mobile-first dashboard",
        description: "Built mobile-first because that's how people eat. Your streak, sessions, and video queue are all visible without scrolling. One big action button. Bottom nav for quick access. Everything works one-handed.",
        isPortrait: true
      },
      {
        image: "https://i.ibb.co/1JQq1LZf/Detox-mode-and-calendar.png",
        title: "Settings, Detox Mode, and Streak Calendar",
        description: "Settings include account management, timezone config, and Detox Mode, which filters videos under 5 minutes. The streak calendar works like GitHub's contribution graph. Each green square is a completed meal session over the last 3 months."
      },
      {
        image: "https://i.ibb.co/M5nT1tmy/Queue-and-session.png",
        title: "Session setup and queue preview",
        description: "This is the core loop. Set your meal duration with a slider (5-60 min), pick a queue style (shuffle or shortest-first), and preview your auto-built queue. The session summary shows watch time, video count, and total meal time. No algorithm decides for you."
      }
    ]
  },
  '002': {
    title: 'Showcase A4',
    tagline: 'Elegant Book Cover Design',
    category: 'Book Cover',
    description: [
      "A minimalist and modern book cover design for 'Showcase A4', focusing on clean typography and balanced composition.",
      "The design utilizes negative space to create a sense of sophistication and focus, making it stand out in a crowded marketplace.",
      "Created using Adobe Creative Suite, this project explores the intersection of traditional print aesthetics and contemporary digital design principles."
    ],
    techStack: ["Adobe InDesign", "Photoshop", "Illustrator", "Typography"],
    mediumLink: "",
    image: 'https://picsum.photos/seed/book/800/600',
    link: '#',
    sourceLink: '#',
    screenshots: []
  },
  '003': {
    title: 'The Duct',
    tagline: 'Custom Font Engineering',
    category: 'Font Design',
    description: [
      "The Duct is a custom-engineered typeface designed for high legibility and technical precision in industrial environments.",
      "Every glyph was meticulously crafted to ensure clarity at small sizes and under challenging lighting conditions.",
      "Developed using FontForge and Glyphs, this project involved extensive testing across various digital and physical mediums."
    ],
    techStack: ["FontForge", "Glyphs", "Type Design", "SVG"],
    mediumLink: "",
    image: 'https://picsum.photos/seed/duct/800/600',
    link: '#',
    sourceLink: '#',
    screenshots: []
  },
  '004': {
    title: 'iPhone 16 Pro',
    tagline: 'Next-Gen Application Interface',
    category: 'Application',
    description: [
      "A conceptual application interface designed specifically for the iPhone 16 Pro, leveraging advanced hardware capabilities.",
      "The UI focuses on fluid transitions and intuitive gestures, providing a seamless user experience that feels native to the device.",
      "Built with React Native and Framer Motion, this prototype explores the future of mobile interaction design."
    ],
    techStack: ["React Native", "Framer Motion", "TypeScript", "UI/UX"],
    mediumLink: "",
    image: 'https://picsum.photos/seed/iphone/800/600',
    link: '#',
    sourceLink: '#',
    screenshots: []
  }
};

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id as keyof typeof projectData];

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-accent">{project.category}</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mt-2">
              {project.title}
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-400 mb-8 leading-tight">
            {project.tagline}
          </h2>
          
          <div className="space-y-8 mb-12">
            {project.description.map((para, i) => (
              <p key={i} className="text-lg text-gray-600 leading-relaxed">
                {para}
              </p>
            ))}
            {project.mediumLink && (
              <a 
                href={project.mediumLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-bold text-xl group transition-all duration-300 mt-4"
              >
                Read the full breakdown on Medium
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-4 py-1.5 bg-ink text-white text-[10px] font-bold uppercase tracking-widest rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all duration-300 group"
              >
                Visit Live Site
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.sourceLink && (
              <a 
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-white rounded-full font-bold hover:bg-accent transition-all duration-300 group"
              >
                <Github className="w-4 h-4" />
                View Source
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[40px] overflow-hidden shadow-2xl sticky top-32"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mt-32">
          {/* First screenshot - Full width */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32"
          >
            <div className="lg:col-span-8 rounded-[32px] overflow-hidden shadow-2xl bg-gray-100">
              <img 
                src={project.screenshots[0].image} 
                alt={project.screenshots[0].title}
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-4">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{project.screenshots[0].title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.screenshots[0].description}
              </p>
            </div>
          </motion.div>

          {/* Middle screenshots - Compact Grid */}
          {project.screenshots.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
              {project.screenshots.slice(1, -1).map((screenshot, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="flex flex-col"
                >
                  <div className={`rounded-[32px] overflow-hidden shadow-xl bg-gray-100 mb-8 ${screenshot.isPortrait ? 'aspect-[3/4] flex items-center justify-center' : ''}`}>
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title}
                      className={`${screenshot.isPortrait ? 'h-full w-auto object-contain' : 'w-full h-auto'}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">{screenshot.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {screenshot.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Last screenshot - Full width (if more than 1) */}
          {project.screenshots.length > 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-8 rounded-[32px] overflow-hidden shadow-2xl bg-gray-100 lg:order-2">
                <img 
                  src={project.screenshots[project.screenshots.length - 1].image} 
                  alt={project.screenshots[project.screenshots.length - 1].title}
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-4 lg:order-1">
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{project.screenshots[project.screenshots.length - 1].title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.screenshots[project.screenshots.length - 1].description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
