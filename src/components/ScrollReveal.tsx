import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** The animation class to apply when visible (e.g., 'animate-fade-rise') */
  animation?: string;
  /** If true, the animation only happens once */
  once?: boolean;
  /** Percentage of the element visible to trigger the animation */
  threshold?: number;
  /** Optional delay before starting the animation (Tailwind delay class or custom style) */
  delay?: string;
}

export default function ScrollReveal({ 
  children, 
  className, 
  animation = "animate-fade-rise",
  once = true,
  threshold = 0.15,
  delay
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once && ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, { 
      threshold,
      // Add a rootMargin to trigger a bit earlier or later if needed
      rootMargin: "0px 0px -50px 0px" 
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div 
      ref={ref} 
      className={cn(
        className, 
        isVisible ? animation : "opacity-0 invisible",
        delay && isVisible ? delay : ""
      )}
      style={{ 
        // Force the animation to respect the both fill mode even before it starts
        animationFillMode: 'both' 
      }}
    >
      {children}
    </div>
  );
}
