import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Motion values for high-performance updates (bypasses React renders)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for smooth trailing effect
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop (fine pointers)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Add class to hide default cursor
    document.body.classList.add('custom-cursor-enabled');

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Exact point of the cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-2 h-2 bg-antique-gold rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_2px_rgba(212,175,55,0.8)]"
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* The Animated Talwar Sword (Trailing) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div 
          className="absolute origin-top-left"
          animate={{
            scale: isHovering ? 1.3 : 1,
            rotate: isHovering ? -15 : 0,
            x: 8,
            y: 8,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] -translate-x-[12px] -translate-y-[12px]"
          >
            {/* Rotated to point top-left */}
            <g transform="rotate(-45 12 12)">
               {/* Handle */}
               <path d="M12 16V22" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
               {/* Crossguard */}
               <path d="M9 16H15" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
               {/* Pommel */}
               <circle cx="12" cy="22" r="1.5" fill="#D4AF37"/>
               {/* Curved Blade (Talwar) */}
               <path d="M11 16C11 16 7 10 12 2C12 2 16 8 13 16" fill="url(#gold-blade)" stroke="#D4AF37" strokeWidth="1"/>
            </g>
            <defs>
              <linearGradient id="gold-blade" x1="12" y1="2" x2="12" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F3E5AB" stopOpacity="0.8" />
                <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.4" />
                <stop offset="1" stopColor="#B87333" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
}
