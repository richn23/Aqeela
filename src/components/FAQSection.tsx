'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Are sessions online only?",
    answer: "Yes, all sessions take place online via secure video. This allows us to work together from wherever you are, with the same depth and connection as in-person therapy."
  },
  {
    question: "What's the difference between therapy and coaching here?",
    answer: "I blend both approaches. Therapy digs into the roots of patterns and emotions; coaching focuses on practical tools and forward momentum. Most sessions include elements of both, tailored to what you need."
  },
  {
    question: "How many sessions will I need?",
    answer: "It depends on what you're working through. Some people find clarity in just a few sessions; others prefer ongoing support. We'll check in regularly and you're always in control of the pace."
  },
  {
    question: "Is everything confidential?",
    answer: "Absolutely. Our sessions are completely confidential. I follow strict ethical guidelines to protect your privacy, and nothing is shared without your explicit consent."
  },
  {
    question: "What if I'm not sure therapy is right for me?",
    answer: "That's completely okay — and very normal. The free intro call or trial session is a chance to ask questions and see how it feels. There's no pressure to continue if it's not the right fit."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #C5D4C5 0%, #B5C9B5 100%)' }}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <h2
          className="text-4xl md:text-5xl text-center mb-16 text-[#3D5A3D]"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2]/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors duration-300"
              >
                <span
                  className="text-lg font-medium text-[#3D5A3D] pr-4"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-[#5C7C5C]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="px-6 pb-5 text-[#5C7C5C] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


