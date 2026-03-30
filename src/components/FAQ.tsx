import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "MORE ABOUT ME?",
    answer: "I’m an AI Engineer who thrives on turning \"impossible\" data into autonomous, high-performing systems. From orchestrating agentic workflows for millions of users to hitting sub-450ms inference times, I build infrastructure that stays reliable under pressure. I believe the best AI doesn't just process information it solves real-world problems with precision and a bit of engineering grit."
  },
  {
    question: "HOW CAN I CONTACT WITH YOU?",
    answer: (
      <>
        I’m always open to discussing new projects, technical challenges, or the future of agentic workflows. The best way to reach me is via <a href="mailto:Shanondsilva2135@gmail.com" className="text-accent hover:underline">Email</a> or by connecting with me on <a href="https://www.linkedin.com/in/shanondsilva/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a>. I usually get back to people within 24 hours.
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
        <p>I provide end-to-end AI engineering services focused on high-performance infrastructure and agentic design:</p>
        <ul className="space-y-4">
          <li>
            <strong className="block text-ink font-bold uppercase text-xs tracking-widest mb-1">Agentic AI Orchestration</strong>
            <p>I design autonomous, multi-agent workflows that automate complex data tasks with precision.</p>
          </li>
          <li>
            <strong className="block text-ink font-bold uppercase text-xs tracking-widest mb-1">Scalable Infrastructure</strong>
            <p>I build high-density, fault-tolerant backend systems (FastAPI/Kubernetes) that handle millions of requests.</p>
          </li>
          <li>
            <strong className="block text-ink font-bold uppercase text-xs tracking-widest mb-1">Real-Time Performance</strong>
            <p>I optimize AI models for sub-450ms inference, ensuring lightning-fast, production-ready security and detection.</p>
          </li>
          <li>
            <strong className="block text-ink font-bold uppercase text-xs tracking-widest mb-1">Growth-Focused Engineering</strong>
            <p>I bridge the gap between deep-tech and market strategy to build AI products that drive actual business results.</p>
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
