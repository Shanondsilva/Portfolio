import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "MORE ABOUT ME?",
    answer: "I build products across Android, web and applied AI, combining hands-on engineering with product thinking from initial requirements through implementation, testing and release."
  },
  {
    question: "WHAT KIND OF WORK DO YOU BUILD?",
    answer: "I focus on end-to-end product development, building Android applications, web products, and applied AI features."
  },
  {
    question: "HOW CAN I CONTACT YOU?",
    answer: (
      <>
        The best way to reach me is via <a href="mailto:Shanondsilva2135@gmail.com" className="text-accent hover:underline">Email</a> or by connecting with me on <a href="https://www.linkedin.com/in/shanondsilva/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a>.
      </>
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
