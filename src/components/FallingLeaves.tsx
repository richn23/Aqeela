'use client';

import { useEffect, useState } from 'react';

const leafColors = {
  autumn: ['#C4956A', '#B8734D', '#D4A574', '#A67C52'],
  transition: ['#A67C52', '#8B9A6B', '#9BAF88', '#7A9A6D'],
  spring: ['#7A9A6D', '#6B8E6B', '#5C7C5C', '#4A6B4A'],
};

interface Leaf {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
}

export const FallingLeaves = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // Generate leaves only on client
    const generatedLeaves: Leaf[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 8,
      size: 24 + Math.random() * 16,
    }));
    setLeaves(generatedLeaves);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLeafColor = (index: number) => {
    if (scrollProgress < 0.33) {
      return leafColors.autumn[index % leafColors.autumn.length];
    } else if (scrollProgress < 0.66) {
      return leafColors.transition[index % leafColors.transition.length];
    } else {
      return leafColors.spring[index % leafColors.spring.length];
    }
  };

  if (leaves.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-fall"
          style={{
            left: leaf.left,
            top: '-50px',
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill={getLeafColor(leaf.id)}
            style={{
              opacity: 0.35,
              transition: 'fill 1s ease',
            }}
          >
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

