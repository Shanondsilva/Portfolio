import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "MORE ABOUT ME?",
    answer: "I'm an AI Engineer who turns messy, \"impossible\" data into systems that actually work. I've built agentic workflows handling millions of requests and hit sub-450ms inference in production. The best AI doesn't just process information. It solves real problems. That's what I focus on."
  },
  {
    question: "HOW CAN I CONTACT WITH YOU?",
    answer: (
      <>
         Happy to talk about new projects, technical challenges, or anything AI-related. Best way to reach me is <a href="mailto:Shanondsilva2135@gmail.com" className="text-accent hover:underline">Email</a> or <a href="https://www.linkedin.com/in/shanondsilva/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a>. I usually reply within 24 hours.
      </>
    )
  },
  {
    question: "HOW MUCH YOUR COST?",
    answer: "Pricing varies depending on the scope and complexity of the project. I offer both fixed-price and hourly rates. Let's discuss your project to get a more accurate estimate."
  },
  {
    question: "WHICH TYPE OF SERVICES YOU PROVIDE?",
    answer: (
      <div className="space-y-4">
        <p>Here's what I do:</p>
        <ul className="space-y-4">
          <li>
            <strong className="block text-ink font-bold uppercase text-xs tracking-widest mb-1">Agentic AI Orchestration</strong>
            <p>I design multi-agent workflows that automate complex data tasks. Think autonomous pipelines, not just chatbots.</p>
          </li>
          <li>
            <strong className="block text-ink font-bold uppercase text-xs tracking-widest mb-1">Scalable Infrastructure</strong>
            <p>Backend systems on FastAPI and Kubernetes that handle millions of requests without going down.</p>
          </li>
          <li>
            <strong className="block text-ink font-bold uppercase text-xs tracking-widest mb-1">Real-Time Performance</strong>
            <p>I optimize AI models for sub-450ms inference. Fast enough for real-time security and detection in production.</p>
          </li>
          <li>
            <strong className="block text-ink font-bold uppercase text-xs tracking-widest mb-1">Growth-Focused Engineering</strong>
            <p>I connect the technical side with business goals. Good AI should move metrics, not just impress engineers.</p>
          </li>
        </ul>
      </div>
    )
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section id="faq" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Question & Answers</h2>
      </div>

      <div className="space-y-0">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-ink/10">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-8 flex items-center justify-between text-left group"
            >
              <h3 className={cn(
                "text-xl md:text-2xl font-bold tracking-tight transition-colors",
                openIndex === index ? "text-ink" : "text-ink/60 group-hover:text-ink"
              )}>
                {faq.question}
              </h3>
              {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-gray-600 max-w-3xl leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
