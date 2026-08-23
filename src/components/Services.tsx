import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

interface Service {
  id: string;
  title: string;
  description: string;
  skills: string[];
  companyLink?: string;
}

const services: Service[] = [
  {
    id: '01',
    title: 'Founder & Product Lead\nImpulsive (IMPULSIVE LTD) | Apr 2026 – Present',
    description: 'Built & Launched\nBuilt and launched Impulsive, a privacy-first Android product, as sole developer, owning product requirements, architecture, implementation, testing and Google Play release.\n\nFull Product Ownership\nTook the product from concept to launch across Kotlin and Jetpack Compose, while also owning release management, pricing, user validation and product direction.\n\nProduct Engineering\nEngineered the core experience including Moment Plans, adaptive release behaviour and privacy-focused local data handling.\n\nEarly Validation\nGenerated the first 23 acquisitions organically and converted 3 into paying subscribers during the first week after launch.',
    skills: [
      'Android Development\nKotlin • Jetpack Compose • MVVM',
      'Product Engineering\nArchitecture • Release Management • Testing',
      'Data & Privacy\nRoom • SQLCipher • DataStore',
      'Product & Commercial\nUser Validation • Pricing • Google Play • ASO'
    ],
    companyLink: 'https://useimpulsive.com/'
  },
  {
    id: '02',
    title: 'Executive Assistant (Contract)\nPsychological Consultancy Ltd (PCL) | Aug 2026 – Present',
    description: 'Operations & Coordination\nCoordinate concurrent marketing, research and administrative workstreams while maintaining priorities and follow-up.\n\nInformation Organisation\nRestructured 30+ working folders and documents in SharePoint, improving version organisation and separating current files from superseded material.\n\nStakeholder Management\nConsolidated staff, contractors, clients and external partners into a central stakeholder tracker to improve contact management and follow-up.\n\nWorkflow & Research Support\nSupport ongoing research, marketing and administrative activity by organising information, tracking actions and maintaining follow-up across active workstreams.',
    skills: [
      'Operations & Administration\nWorkflow Coordination • Task Prioritisation • Follow-up Management',
      'Document & Information Management\nSharePoint • File Organisation • Version Control',
      'Stakeholder Coordination\nContact Management • Stakeholder Tracking • Professional Communication',
      'Research & Business Support\nResearch Coordination • Information Organisation • Administrative Support'
    ],
    companyLink: 'https://www.psychological-consultancy.com/'
  },
  {
    id: '03',
    title: 'Digital Marketing Executive\nPortugal Pathways | Feb 2025 – June 2025',
    description: '30+ Educational Articles Published\nResearched and produced visa-focused content that improved website dwell time by 17% and increased qualified lead generation by 24% through informative, SEO-aligned articles.\n\n68% Increase in Video Engagement\nRepurposed long-form footage into high-impact short-form reels, boosting average video views across Instagram and LinkedIn.\n\n15% Audience Growth\nExpanded digital reach through consistent content delivery and platform-specific optimisation strategies.\n\nHigher CTR Through A/B Testing\nTested content formats and headlines to improve click-through rates and conversion performance through data-driven experimentation.',
    skills: [
      'Core Skills\nContent Strategy • SEO Writing • Social Media Growth Strategy',
      'Marketing & Analytics\nGoogle Analytics • A/B Testing & Conversion Optimisation',
      'Content & Video Creation\nAdobe Premiere Pro • Canva • CapCut'
    ],
    companyLink: 'https://www.portugalpathways.io/'
  },
  {
    id: '04',
    title: 'Marketing Intern\nMarkitect AI | Oct 2024 – Jan 2025',
    description: '40% Faster Client Targeting\nConducted AI-assisted and manual bio-data research, improving prospect segmentation and accelerating the client targeting process.\n\n100% On-Time Project Delivery\nManaged 5+ concurrent projects within a startup environment, maintaining performance under tight deadlines and ensuring consistent campaign delivery.\n\n25% More Efficient Campaign Execution\nFacilitated cross-team strategy meetings and introduced AI-driven marketing approaches, improving collaboration and campaign execution efficiency.',
    skills: [
      'AI-Assisted Content Generation\n• Audience Segmentation & Targeting • Data-Driven Content Planning',
      'Marketing & Strategy\nAI-Powered Content Strategy • Campaign Planning & Execution • Cross-Functional Collaboration',
      'Core Skills\n• Prompt-Based Research • Project Management'
    ],
    companyLink: 'https://markitect-ai.square.site/'
  }
];

export const Services = () => {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-stroke opacity-20 uppercase">
          EXPERIENCE
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-widest uppercase">EXPERIENCE</span>
          <div className="w-8 h-[2px] bg-accent" />
        </div>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <div 
            key={service.id}
            className="border-b border-ink/10 last:border-0"
          >
            <button
              onClick={() => setOpenId(openId === service.id ? null : service.id)}
              className="w-full py-8 flex items-center justify-between text-left group"
            >
              <h3 className={cn(
                "text-3xl md:text-6xl font-bold tracking-tight transition-all duration-500 flex flex-col",
                openId === service.id ? "text-ink" : "text-ink/40 group-hover:text-ink"
              )}>
                {service.title.split('\n').map((line, index) => {
                  if (index === 1 && service.companyLink) {
                    const parts = line.split(' | ');
                    return (
                      <span key={index} className="text-xl md:text-2xl font-medium mt-2 opacity-60">
                        <a 
                          href={service.companyLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors underline underline-offset-4 decoration-accent/30"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {parts[0]}
                        </a>
                        {parts.length > 1 && ` | ${parts[1]}`}
                      </span>
                    );
                  }
                  return (
                    <span key={index} className={cn(
                      index === 1 && "text-xl md:text-2xl font-medium mt-2 opacity-60"
                    )}>
                      {line}
                    </span>
                  );
                })}
              </h3>
              <div className="p-2 rounded-full border border-ink/10">
                {openId === service.id ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </div>
            </button>
            <AnimatePresence>
              {openId === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-12 grid md:grid-cols-2 gap-8">
                    <div className="text-base text-gray-600 max-w-2xl whitespace-pre-line leading-relaxed">
                      {service.description.split('\n\n').map((paragraph, i) => {
                        const lines = paragraph.split('\n');
                        if (lines.length > 1) {
                          return (
                            <div key={i} className="mb-4">
                              <span className="font-bold text-ink block mb-1">{lines[0]}</span>
                              <span>{lines.slice(1).join('\n')}</span>
                            </div>
                          );
                        }
                        return <p key={i} className="mb-4">{paragraph}</p>;
                      })}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map(skill => (
                        <span key={skill} className="px-4 py-2 rounded-2xl border border-ink/10 text-[15px] font-bold whitespace-pre-line">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
