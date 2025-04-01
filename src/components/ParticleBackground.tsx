"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Theme } from "./ThemePicker";

interface GradientBackgroundProps {
  theme: Theme;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ theme }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Track mouse movement for subtle gradient shifts
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate mouse position relative to center of container
        const relativeX = ((e.clientX - centerX) / rect.width) * 2;
        const relativeY = ((e.clientY - centerY) / rect.height) * 2;
        
        setMousePosition({ x: relativeX, y: relativeY });
      }
    };

    // Set initial values for touch devices
    const handleTouchMove = (e: TouchEvent) => {
      if (containerRef.current && e.touches[0]) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const touch = e.touches[0];
        const relativeX = ((touch.clientX - centerX) / rect.width) * 2;
        const relativeY = ((touch.clientY - centerY) / rect.height) * 2;
        
        setMousePosition({ x: relativeX, y: relativeY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {/* Main gradient background with animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{ 
          background: `linear-gradient(to bottom right, ${theme.gradient.from}, ${theme.gradient.via}, ${theme.gradient.to})`,
          backgroundSize: '200% 200%',
          transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
        }}
      />
      
      {/* Subtle glow effects that respond to mouse */}
      <div 
        className="absolute top-1/4 left-1/3 w-2/3 h-2/3 rounded-full opacity-5 blur-[120px]" 
        style={{
          backgroundColor: theme.primary,
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
        }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-1/2 h-1/2 rounded-full opacity-5 blur-[150px]"
        style={{
          backgroundColor: theme.secondary,
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
        }}
      />
      <div 
        className="absolute top-1/3 right-1/3 w-1/4 h-1/4 rounded-full opacity-5 blur-[80px]"
        style={{
          backgroundColor: theme.accent,
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
        }}
      />
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
      
      {/* Gradient overlay for text readability */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/80 z-0"
        style={{
          '--tw-gradient-from': 'transparent',
          '--tw-gradient-via': `${theme.gradient.from}60`, // Using 60 for 30% opacity in hex
          '--tw-gradient-to': `${theme.gradient.from}cc`, // Using cc for 80% opacity in hex
        } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default GradientBackground; 