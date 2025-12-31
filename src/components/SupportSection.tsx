'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: "Why therapy",
    content: "Life doesn't come with a manual — but you don't have to figure it out alone. Therapy gives you a safe space to untangle thoughts, process emotions, and understand your patterns with someone trained to help you make sense of it all."
  },
  {
    title: "Who I help",
    content: "I work with adults who feel anxious, overwhelmed, or stuck — whether that's in relationships, work, or life direction. If you're a sensitive high-achiever, a chronic people-pleaser, or at a life crossroads, you're in the right place."
  },
  {
    title: "How I work",
    content: "I blend deeper therapeutic exploration with practical coaching. Some sessions focus on where patterns come from; others on clear goals, tools, and gentle accountability. We move at your pace."
  },
];

export const SupportSection = () => {
  return (
    <section
      id="support"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #E5DCD0 0%, #F0EDE6 50%, #E8EBE4 100%)' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl md:text-5xl text-center mb-16 text-[#5C7C5C]"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Is this the support you&apos;re looking for?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="bg-[#EDE8E0] rounded-2xl p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <h3
                className="text-[#5C7C5C] font-semibold text-xl mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {card.title}
              </h3>
              <p className="text-[#6B635A] text-base leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
