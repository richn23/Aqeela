'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Fill out a short form",
    description: "Share a few details about what you're going through and what you're hoping for."
  },
  {
    number: "02",
    title: "I review your information",
    description: "I'll look over what you've shared and, if it seems like I can genuinely help, I'll confirm your free intro call or first session."
  },
  {
    number: "03",
    title: "We meet online",
    description: "We talk via secure video in a calm, confidential space. You can ask questions and share at your own pace."
  },
  {
    number: "04",
    title: "We start the healing work",
    description: "If it feels right, we continue with regular sessions, combining insight, emotional support, and practical tools."
  }
];

export const ProcessSection = () => {
  return (
    <section
      id="process"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #DEE4DC 0%, #D4DDD4 100%)' }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          className="text-4xl md:text-5xl text-center mb-16 text-[#4A6B4A]"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          What to expect
        </h2>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#5C7C5C]/30" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="flex gap-6 md:gap-8 items-start"
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5C7C5C] flex items-center justify-center shadow-lg">
                  <span
                    className="text-white text-lg md:text-xl font-semibold"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 md:pt-3">
                  <h3
                    className="text-xl md:text-2xl text-[#4A6B4A] font-semibold mb-2"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#5C7C5C]/80 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
