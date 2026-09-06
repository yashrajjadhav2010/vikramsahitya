import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Sparkles, RotateCcw, CheckCircle2, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CeremonialRibbonCoverProps {
  coverUrl: string;
  bookTitle: string;
  onOpenSample?: () => void;
}

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
}

export default function CeremonialRibbonCover({ coverUrl, bookTitle }: CeremonialRibbonCoverProps) {
  const [isCut, setIsCut] = useState(false);
  const [isCutting, setIsCutting] = useState(false);
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger grand confetti festival all over the website
  const triggerGrandConfetti = () => {
    // Determine screen origin of the book element for the initial epicenter burst
    let originX = 0.7;
    let originY = 0.5;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      originX = (rect.left + rect.width / 2) / window.innerWidth;
      originY = (rect.top + rect.height / 2) / window.innerHeight;
    }

    const royalColors = ['#D4AF37', '#FFD700', '#F3E5AB', '#DC2626', '#991B1B', '#FFFFFF', '#F59E0B', '#B45309'];

    // 1. Epicenter Explosion from the book cover
    confetti({
      particleCount: 100,
      spread: 120,
      startVelocity: 45,
      origin: { x: originX, y: originY },
      colors: royalColors,
      gravity: 0.8,
      scalar: 1.2,
      ticks: 200,
      zIndex: 99999,
    });

    // 2. Golden Stars Blast across the whole page
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 180,
        startVelocity: 55,
        origin: { x: originX, y: originY },
        shapes: ['star'],
        colors: ['#FFE87C', '#FFD700', '#FFFFFF', '#D4AF37'],
        scalar: 1.5,
        zIndex: 99999,
      });
    }, 150);

    // 3. Left Grand Cannon (shooting diagonally across the whole website)
    setTimeout(() => {
      confetti({
        particleCount: 90,
        angle: 60,
        spread: 80,
        startVelocity: 65,
        origin: { x: 0.05, y: 0.85 },
        colors: royalColors,
        ticks: 300,
        gravity: 0.9,
        scalar: 1.2,
        zIndex: 99999,
      });
    }, 250);

    // 4. Right Grand Cannon (shooting diagonally across from opposite side)
    setTimeout(() => {
      confetti({
        particleCount: 90,
        angle: 120,
        spread: 80,
        startVelocity: 65,
        origin: { x: 0.95, y: 0.85 },
        colors: royalColors,
        ticks: 300,
        gravity: 0.9,
        scalar: 1.2,
        zIndex: 99999,
      });
    }, 400);

    // 5. Continuous cascading royal fireworks shower for full-page spectacle
    const duration = 2400;
    const animationEnd = Date.now() + duration;

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 35 * (timeLeft / duration);
      // Random celebratory bursts across the top of the viewport
      confetti({
        particleCount,
        origin: { x: Math.random() * 0.8 + 0.1, y: Math.random() * 0.3 },
        spread: 70,
        startVelocity: 25,
        gravity: 0.7,
        colors: royalColors,
        zIndex: 99999,
        ticks: 200,
      });
    }, 350);
  };

  const handleCutRibbon = () => {
    if (isCut || isCutting) return;

    setIsCutting(true);

    // Generate close-range high-velocity spark particles
    const colors = ['#FFDF73', '#FFD700', '#FFFFFF', '#EF4444', '#DC2626', '#F59E0B'];
    const newSparkles: SparkleParticle[] = Array.from({ length: 48 }).map((_, i) => {
      const angle = (i / 48) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
      const distance = 90 + Math.random() * 150;
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        color: colors[i % colors.length],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
      };
    });

    setSparkles(newSparkles);

    // Trigger full website-wide confetti explosions
    triggerGrandConfetti();

    // Complete the cut state with spring physics timing
    setTimeout(() => {
      setIsCut(true);
      setIsCutting(false);
    }, 550);
  };

  const handleRewrap = (e: MouseEvent) => {
    e.stopPropagation();
    setIsCut(false);
    setIsCutting(false);
    setSparkles([]);
  };

  return (
    <div ref={containerRef} className="relative w-full select-none">
      
      {/* Outer Atmospheric Aura */}
      <div 
        className={`absolute -inset-6 rounded-3xl transition-all duration-1000 ${
          isCut 
            ? 'bg-gradient-to-r from-antique-gold/50 via-soft-gold/35 to-burnished-copper/40 blur-3xl opacity-95' 
            : 'bg-gradient-to-r from-red-950/40 via-antique-gold/25 to-red-950/40 blur-2xl opacity-70'
        }`} 
      />

      {/* Main Book Card Container */}
      <div 
        onClick={handleCutRibbon}
        className={`relative bg-dark-charcoal border-2 rounded-2xl p-2.5 shadow-[0_30px_70px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-500 ${
          isCut 
            ? 'border-antique-gold/70 ring-2 ring-antique-gold/30' 
            : 'border-red-700/60 hover:border-antique-gold cursor-pointer group hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]'
        }`}
      >
        {/* Special Launch Badge Ribbon (Top Right) */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-antique-gold to-burnished-copper text-stone-black font-cinzel font-bold text-[10px] tracking-wider uppercase shadow-xl">
            <Sparkles size={12} />
            NEW VERSION
          </span>
        </div>

        {/* Book Cover Container */}
        <div className="aspect-[2/3] rounded-xl overflow-hidden bg-stone-black relative">
          
          {/* Actual Book Cover */}
          <motion.img 
            src={coverUrl} 
            alt={bookTitle}
            animate={isCut ? { scale: [0.97, 1.04, 1], filter: 'brightness(1.06)' } : { scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-full object-cover object-center transform transition-transform duration-700"
          />

          {/* Golden Flash Shockwave Effect on Cut */}
          <AnimatePresence>
            {isCutting && (
              <>
                {/* Full Flash */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.95, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-tr from-antique-gold via-soft-gold to-white z-40 pointer-events-none mix-blend-screen"
                />

                {/* Expanding Radial Shockwave Ring */}
                <motion.div
                  initial={{ scale: 0.1, opacity: 1 }}
                  animate={{ scale: 3.2, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-soft-gold bg-antique-gold/20 z-40 pointer-events-none"
                />
              </>
            )}
          </AnimatePresence>

          {/* Ceremonial Red Ribbon System (Active when NOT cut) */}
          <AnimatePresence>
            {!isCut && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
                className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
              >
                {/* Semi-transparent protective silk veil */}
                <div className="absolute inset-0 bg-stone-black/45 backdrop-blur-[0.5px]" />

                {/* ================= HORIZONTAL RIBBON ================= */}
                {/* Left Half Ribbon */}
                <motion.div 
                  animate={isCutting ? { 
                    x: -280, 
                    rotate: -35, 
                    scaleY: 0.4, 
                    opacity: 0 
                  } : { x: 0, rotate: 0, scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 w-1/2 h-16 bg-gradient-to-r from-red-950 via-red-600 to-red-700 shadow-[0_8px_25px_rgba(0,0,0,0.85)] border-y-2 border-antique-gold/80 flex items-center justify-end overflow-hidden origin-left"
                >
                  <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.08)_10px,rgba(255,255,255,0.08)_20px)]" />
                  <div className="absolute top-1 left-0 right-0 h-0.5 bg-antique-gold/60" />
                  <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-antique-gold/60" />
                  {/* Frayed edge on the cut seam */}
                  <div className="w-1.5 h-full bg-antique-gold/80 shadow-[0_0_8px_#D4AF37]" />
                </motion.div>

                {/* Right Half Ribbon */}
                <motion.div 
                  animate={isCutting ? { 
                    x: 280, 
                    rotate: 35, 
                    scaleY: 0.4, 
                    opacity: 0 
                  } : { x: 0, rotate: 0, scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 w-1/2 h-16 bg-gradient-to-r from-red-700 via-red-600 to-red-950 shadow-[0_8px_25px_rgba(0,0,0,0.85)] border-y-2 border-antique-gold/80 flex items-center justify-start overflow-hidden origin-right"
                >
                  <div className="w-full h-full bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(255,255,255,0.08)_10px,rgba(255,255,255,0.08)_20px)]" />
                  <div className="absolute top-1 left-0 right-0 h-0.5 bg-antique-gold/60" />
                  <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-antique-gold/60" />
                  <div className="w-1.5 h-full bg-antique-gold/80 shadow-[0_0_8px_#D4AF37]" />
                </motion.div>

                {/* ================= VERTICAL RIBBON ================= */}
                {/* Top Half Ribbon */}
                <motion.div 
                  animate={isCutting ? { 
                    y: -300, 
                    rotate: -20, 
                    scaleX: 0.4, 
                    opacity: 0 
                  } : { y: 0, rotate: 0, scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-0 h-1/2 w-16 bg-gradient-to-b from-red-950 via-red-600 to-red-700 shadow-[0_8px_25px_rgba(0,0,0,0.85)] border-x-2 border-antique-gold/80 flex flex-col justify-end overflow-hidden origin-top"
                >
                  <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.08)_10px,rgba(255,255,255,0.08)_20px)]" />
                  <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-antique-gold/60" />
                  <div className="absolute right-1 top-0 bottom-0 w-0.5 bg-antique-gold/60" />
                </motion.div>

                {/* Bottom Half Ribbon */}
                <motion.div 
                  animate={isCutting ? { 
                    y: 300, 
                    rotate: 20, 
                    scaleX: 0.4, 
                    opacity: 0 
                  } : { y: 0, rotate: 0, scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 h-1/2 w-16 bg-gradient-to-b from-red-700 via-red-600 to-red-950 shadow-[0_8px_25px_rgba(0,0,0,0.85)] border-x-2 border-antique-gold/80 flex flex-col justify-start overflow-hidden origin-bottom"
                >
                  <div className="w-full h-full bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(255,255,255,0.08)_10px,rgba(255,255,255,0.08)_20px)]" />
                  <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-antique-gold/60" />
                  <div className="absolute right-1 top-0 bottom-0 w-0.5 bg-antique-gold/60" />
                </motion.div>

                {/* ================= CENTRAL GOLD MEDALLION & SHEARS ================= */}
                <motion.div 
                  animate={isCutting ? { 
                    scale: [1, 1.6, 0], 
                    rotate: [0, 45, 90], 
                    opacity: [1, 1, 0] 
                  } : { 
                    scale: [1, 1.04, 1],
                  }}
                  transition={isCutting ? { duration: 0.45 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-40 flex flex-col items-center justify-center pointer-events-auto"
                >
                  {/* Pulsing Backlight */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-antique-gold via-red-500 to-soft-gold blur-2xl rounded-full opacity-75 animate-pulse" />

                  {/* Embossed Royal Gold Seal */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-soft-gold via-antique-gold to-yellow-900 border-2 border-warm-ivory shadow-[0_12px_40px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center text-stone-black p-2 relative group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-1.5 rounded-full border border-dashed border-stone-black/40 pointer-events-none" />
                    
                    {/* Animated Golden Shears Icon */}
                    <motion.div
                      animate={{ rotate: [-20, 0, -20] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-stone-black"
                    >
                      <Scissors size={32} className="text-stone-black drop-shadow-md" />
                    </motion.div>
                    
                    <span className="font-cinzel text-[9px] font-black tracking-widest uppercase mt-0.5 text-center leading-tight">
                      CUT RIBBON
                    </span>
                  </div>

                  {/* Pulsing Interactive Prompt Pill */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-5 px-4 py-1.5 rounded-full bg-stone-black/95 border border-antique-gold/80 text-soft-gold font-cinzel text-[11px] font-bold tracking-widest uppercase shadow-[0_5px_25px_rgba(0,0,0,0.9)] flex items-center gap-2 whitespace-nowrap"
                  >
                    <Sparkles size={13} className="text-antique-gold animate-spin" />
                    <span>CLICK TO INAUGURATE & UNVEIL</span>
                  </motion.div>
                </motion.div>

                {/* ================= CEREMONIAL GOLD SHEARS SNIPPING ANIMATION ================= */}
                {isCutting && (
                  <motion.div
                    initial={{ x: -160, y: 0, scale: 0.6, rotate: -45, opacity: 0 }}
                    animate={{ 
                      x: [ -160, 0, 0, 160 ], 
                      y: [ 0, 0, 0, 0 ], 
                      scale: [ 0.8, 1.4, 1.5, 0.7 ], 
                      rotate: [ -35, -5, 10, 45 ],
                      opacity: [ 0, 1, 1, 0 ]
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute z-50 text-soft-gold drop-shadow-[0_0_30px_rgba(255,215,0,1)] pointer-events-none flex items-center justify-center"
                  >
                    <Scissors size={84} className="text-antique-gold stroke-[2.5]" />
                  </motion.div>
                )}

              </motion.div>
            )}
          </AnimatePresence>

          {/* Burst of High Velocity Golden Sparkles (Near Book) */}
          {sparkles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0, rotate: 0 }}
              animate={{ 
                x: p.x, 
                y: p.y, 
                opacity: [1, 1, 0], 
                scale: [0, 1.5, 0.4], 
                rotate: p.rotation + 720 
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 rounded-sm"
              style={{
                width: p.size,
                height: p.size * (p.id % 2 === 0 ? 1 : 1.8),
                backgroundColor: p.color,
                boxShadow: `0 0 14px ${p.color}`,
              }}
            />
          ))}

          {/* Post-Cut Celebratory Ribbon Toast */}
          <AnimatePresence>
            {isCut && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-3 left-3 right-3 z-30 bg-stone-black/95 backdrop-blur-md border border-antique-gold/60 rounded-xl p-3 flex items-center justify-between shadow-2xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-antique-gold/20 border border-antique-gold/40 flex items-center justify-center text-antique-gold shrink-0">
                    <Award size={14} />
                  </div>
                  <div>
                    <span className="block font-cinzel text-[10px] sm:text-xs text-soft-gold font-bold tracking-wider uppercase">
                      OFFICIALLY UNVEILED!
                    </span>
                    <span className="block font-inter text-[9px] text-muted-sandstone">
                      2026 Revised Edition Inaugurated
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleRewrap}
                  title="Rewrap book with ceremonial ribbon to cut again"
                  className="px-3 py-1.5 rounded-lg bg-dark-charcoal border border-antique-gold/40 hover:border-antique-gold text-[10px] font-cinzel text-muted-sandstone hover:text-soft-gold flex items-center gap-1.5 transition-colors shadow"
                >
                  <RotateCcw size={12} />
                  <span>Rewrap</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtle lighting shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-stone-black/30 via-transparent to-white/10 pointer-events-none" />
        </div>

        {/* Card Footer Bar with Order Link */}
        <div className="p-4 bg-stone-black/95 mt-2.5 rounded-xl flex items-center justify-between gap-3 border border-antique-gold/25 shadow-md">
          <div>
            <p className="font-cinzel text-xs font-semibold text-warm-ivory flex items-center gap-1.5">
              {isCut ? (
                <>
                  <CheckCircle2 size={13} className="text-antique-gold" />
                  <span>Ready for Dispatch</span>
                </>
              ) : (
                <>
                  <Sparkles size={13} className="text-antique-gold" />
                  <span>Launch Ceremony</span>
                </>
              )}
            </p>
            <p className="font-inter text-[11px] text-muted-sandstone">
              {isCut ? 'Paperback & Digital Available Now' : 'Click the ribbon to cut & unveil the book'}
            </p>
          </div>

          <a 
            href="https://amzn.in/d/04qmUrKx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-cinzel tracking-wider text-antique-gold hover:text-soft-gold flex items-center gap-1 font-bold shrink-0 hover:translate-x-0.5 transition-transform"
          >
            <span>ORDER NOW</span>
            <span>→</span>
          </a>
        </div>

      </div>

    </div>
  );
}
