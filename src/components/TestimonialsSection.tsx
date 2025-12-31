'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The mix of gentle therapy and practical tools has been a game-changer. I don't feel judged, just supported.",
    author: "L., client"
  },
  {
    quote: "For the first time, I feel like someone truly gets what I'm going through. The sessions have given me clarity I didn't know was possible.",
    author: "S., client"
  },
  {
    quote: "I was nervous about starting therapy, but the space felt safe from the very first session. I finally feel like I'm moving forward.",
    author: "M., client"
  }
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 7000); // 7 seconds between cards
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const getCardStyle = (index: number) => {
    const position = (index - current + testimonials.length) % testimonials.length;
    
    if (position === 0) {
      // Top card - fully visible
      return { y: 0, scale: 1, opacity: 1, zIndex: 3 };
    } else if (position === 1) {
      // Second card - slightly back
      return { y: 24, scale: 0.96, opacity: 0.6, zIndex: 2 };
    } else if (position === 2 || position === testimonials.length - 1) {
      // Third card - more back
      return { y: 48, scale: 0.92, opacity: 0.3, zIndex: 1 };
    }
    // Hidden
    return { y: 60, scale: 0.88, opacity: 0, zIndex: 0 };
  };

  return (
    <section
      id="testimonials"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #D4DDD4 0%, #C5D4C5 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center mb-16 text-[#4A6B4A]"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          What clients say
        </h2>

        <div
          className="relative h-[320px] md:h-[280px] flex items-start justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="absolute w-full max-w-2xl cursor-pointer"
              animate={getCardStyle(index)}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                mass: 1.2,
              }}
              onClick={next}
            >
              <div className="bg-[#FAF7F2] rounded-2xl p-8 md:p-10 shadow-xl">
                <div
                  className="text-[#5C7C5C]/20 text-5xl md:text-6xl leading-none mb-2"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  "
                </div>
                <p
                  className="text-lg md:text-xl italic text-[#5C7C5C] leading-relaxed mb-4"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {testimonial.quote}
                </p>
                <p className="text-[#6B635A] text-sm">
                  — {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-16">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-[#5C7C5C] text-[#5C7C5C] flex items-center justify-center hover:bg-[#5C7C5C] hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-[#5C7C5C] text-[#5C7C5C] flex items-center justify-center hover:bg-[#5C7C5C] hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? 'bg-[#5C7C5C] w-6' : 'bg-[#5C7C5C]/30 w-2'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
