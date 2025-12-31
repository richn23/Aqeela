'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animatedLeaves from '../../public/animations/Animated_leaves.json';

export const HeroSection = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-[85vh] bg-[#E5DCD0] relative overflow-hidden"
    >
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 min-h-[85vh] flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left side - Text content */}
          <div className="text-left">
            <p className="text-[#8FA88F] text-sm uppercase tracking-[0.2em] mb-6">
              Online Therapy & Coaching
            </p>
            
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-[#5C7C5C] mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              This feeling isn&apos;t forever...
              <br />
              <span 
                className="animate-slide-in-left block relative"
                style={{ 
                  fontFamily: "'Caveat', cursive",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: '#4A6B4A'
                }}
              >
                <span 
                  className="block"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                    lineHeight: 1.1
                  }}
                >
                  You can heal
                </span>
                {/* Curved underline - scales with text using em units */}
                <svg 
                  className="block mt-1" 
                  style={{ width: '85%', maxWidth: '6em', height: '0.12em' }}
                  viewBox="0 0 200 8" 
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M2 5.5C30 2 60 7 100 4C140 1 170 6 198 3.5" 
                    stroke="#4A6B4A" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            
            <p className="text-[#8FA88F] text-lg md:text-xl max-w-md mb-10 leading-relaxed">
              Gentle, evidence-based support to help you move from overwhelmed to clarity — from anywhere, online.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-[#5C7C5C] text-white px-8 py-4 rounded-full text-center hover:bg-[#4A6B4A] transition-colors font-medium"
              >
                Book a Call
              </a>
              <a
                href="#process"
                onClick={(e) => scrollToSection(e, '#process')}
                className="border-2 border-[#5C7C5C] text-[#5C7C5C] px-8 py-4 rounded-full text-center hover:bg-[#5C7C5C] hover:text-white transition-colors font-medium"
              >
                How it works
              </a>
            </div>
          </div>

          {/* Right side - Lottie Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <Lottie
                animationData={animatedLeaves}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
