'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: "Trial Session",
    subtitle: "30 minutes",
    description: "A short online session to get a feel for working together. Ask questions, share what's on your mind, and see if this space feels right for you.",
    cta: "Book a trial session",
    featured: false,
  },
  {
    title: "Single Session",
    subtitle: "50 minutes",
    description: "A one-off session for focused support on something specific — a decision, a difficult conversation, or a moment of overwhelm.",
    cta: "Book a single session",
    featured: true,
  },
  {
    title: "4-Session Support Package",
    subtitle: "4 × 50 minutes over 6-8 weeks",
    description: "Ideal if you'd like to build momentum around themes like anxiety, boundaries, self-confidence, or life direction.",
    cta: "Start with a free call",
    featured: false,
  }
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #E8EBE4 0%, #DEE4DC 100%)' }}
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
          Ways we can work together
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 items-end justify-center">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`
                rounded-2xl shadow-md transition-all duration-300 w-full md:w-80
                ${service.featured
                  ? 'bg-[#5C7C5C] text-white p-8 py-12 ring-4 ring-[#4A6B4A] hover:scale-[1.03] hover:shadow-xl'
                  : 'bg-[#F5F1EB] p-8 hover:scale-[1.02] hover:shadow-lg'
                }
              `}
            >
              {service.featured && (
                <span className="inline-block bg-white text-[#5C7C5C] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Most popular
                </span>
              )}

              <h3
                className={`font-semibold text-xl mb-1 ${service.featured ? 'text-white' : 'text-[#5C7C5C]'}`}
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {service.title}
              </h3>

              <p className={`text-sm mb-4 ${service.featured ? 'text-white/80' : 'text-[#8FA88F]'}`}>
                {service.subtitle}
              </p>

              <p className={`text-base leading-relaxed mb-6 ${service.featured ? 'text-white/90' : 'text-[#6B635A]'}`}>
                {service.description}
              </p>

              <button
                className={`
                  w-full py-3 px-6 rounded-full font-medium transition-all duration-300
                  ${service.featured
                    ? 'bg-white text-[#5C7C5C] hover:bg-[#F5F1EB]'
                    : 'border-2 border-[#5C7C5C] text-[#5C7C5C] hover:bg-[#5C7C5C] hover:text-white'
                  }
                `}
              >
                {service.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
