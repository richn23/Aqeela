'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #B5C9B5 0%, #A3BDA3 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center mb-12 text-[#4A6B4A]"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          About me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Photo placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-md aspect-square rounded-2xl bg-[#5C7C5C]/20 flex items-center justify-center text-[#5C7C5C]/40 text-sm">
              Photo coming soon
            </div>
          </div>

          {/* Bio content - wrapped in off-white card */}
          <div className="bg-[#FAF7F2] rounded-2xl p-8 md:p-10 shadow-lg">
            <h3
              className="text-2xl md:text-3xl text-[#4A6B4A] mb-2"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Hi, I'm Aqeela
            </h3>
            <p className="text-[#5C7C5C] text-sm uppercase tracking-widest mb-6">
              Compassionate Inquiry Coach
            </p>

            {/* Short intro - always visible */}
            <div className="space-y-4 text-[#5C7C5C] leading-relaxed mb-4">
              <p>
                Five years ago, my life changed with a single sentence. A leukemia diagnosis at 33 shattered everything I thought I knew — and opened a door to a deeper calling.
              </p>
              <p>
                Facing mortality, I saw my life with painful clarity — the daily abandonments, the times I silenced my needs to please others. In that crisis, I found my opening.
              </p>
            </div>

            {/* Expandable content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 text-[#5C7C5C] leading-relaxed">
                    <p>
                      Before the doctor could speak, the words left my lips: "Is it cancer?" A wave of shock washed over me, immediately met by a fierce, protective voice within: "Don't you dare say 'why me.' People face unimaginable suffering every day. This is yours, and you will carry it."
                    </p>
                    <p>
                      On my knees, I prayed from the depths of my soul: "Please Lord, spare me this time. Spare me, and I will serve humanity by healing myself and helping others."
                    </p>
                    <p>
                      That vow set me on a path I now walk with you. I discovered the work of Dr. Gabor Maté and the truth that "we were hurt in relationship, and we heal in relationship." My journey through trauma, anxiety, and self-abandonment led me to become a Compassionate Inquiry coach.
                    </p>
                    <p>
                      I now create a sacred, safe container — a compassionate space for clients to own their stories, release old patterns, and reclaim their authentic selves.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read more button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-[#4A6B4A] font-medium flex items-center gap-2 hover:text-[#5C7C5C] transition-colors"
            >
              {isExpanded ? 'Read less' : 'Read my story'}
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            {/* Closing quote */}
            <blockquote className="mt-8 pt-6 border-t border-[#5C7C5C]/20">
              <p
                className="text-lg italic text-[#4A6B4A] leading-relaxed"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                "Your wound can become your opening. Your burden can become your service. And you do not have to walk the path alone."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
