import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, ShoppingBag, BookOpen, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChapterOneModal from './ChapterOneModal';
import CeremonialRibbonCover from './CeremonialRibbonCover';

export default function Hero() {
  const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cinematic-radial mix-blend-multiply opacity-90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-black/90 via-stone-black/60 to-stone-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=2560" 
          alt="Ancient Indian Palace of Ujjayini" 
          className="w-full h-full object-cover object-center scale-105 transform-gpu blur-[1.5px] opacity-35"
        />
        
        {/* Subtle rotating mandala dharma chakra */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] z-10 pointer-events-none mix-blend-screen w-[900px] h-[900px]">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_120s_linear_infinite]">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2 1" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.2" />
            {[...Array(24)].map((_, i) => (
              <line key={i} x1="50" y1="50" x2="50" y2="10" stroke="#D4AF37" strokeWidth="0.2" transform={`rotate(${i * 15} 50 50)`} />
            ))}
            <circle cx="50" cy="50" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Floating Golden Sparks / Embers */}
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          {[...Array(24)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-antique-gold rounded-full opacity-40 animate-float"
              style={{
                width: (i % 3 === 0 ? 4 : i % 2 === 0 ? 2.5 : 1.5) + 'px',
                height: (i % 3 === 0 ? 4 : i % 2 === 0 ? 2.5 : 1.5) + 'px',
                top: `${(i * 13) % 100}%`,
                left: `${(i * 17) % 100}%`,
                boxShadow: '0 0 8px rgba(212,175,55,0.6)',
                animationDuration: `${12 + (i % 7) * 2}s`,
                animationDelay: `${(i % 5) * 1.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Launch Announcement */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Celebratory Launch Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-black/80 border border-antique-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] mb-6"
            >
              <Sparkles size={14} className="text-antique-gold animate-pulse" />
              <span className="font-cinzel text-xs md:text-sm font-semibold tracking-widest text-soft-gold uppercase">
                Official Launch • Revised & Expanded Edition
              </span>
            </motion.div>

            {/* Author Credit */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-inter tracking-[0.3em] text-antique-gold text-xs md:text-sm mb-4 uppercase font-bold"
            >
              A Mythological Fiction by Prajwal Patil
            </motion.p>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="font-cinzel text-4xl sm:text-6xl md:text-7xl xl:text-8xl text-warm-ivory font-bold leading-[1.08] tracking-tight drop-shadow-2xl mb-6"
            >
              VICTORY'S <br />
              <span className="text-gold-gradient">HIDDEN DEFEAT</span>
            </motion.h1>

            {/* Philosophical Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-xl mb-8"
            >
              <p className="font-lora text-lg sm:text-xl md:text-2xl text-muted-sandstone italic font-medium leading-relaxed">
                "I won many wars but in the end, I defeated myself."
              </p>
              <p className="font-inter text-xs sm:text-sm text-muted-sandstone/80 mt-3 leading-normal">
                Step into the mind of ancient Bharat's legendary sovereign, Samrat Vikramaditya. An unforgettable saga of pride, invisible duty, and spiritual reckoning.
              </p>
            </motion.div>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10"
            >
              <Link 
                to="/purchase" 
                className="btn-duo-gold px-8 py-4 font-cinzel tracking-widest text-sm md:text-base w-full sm:w-auto flex items-center justify-center gap-2.5 shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                <ShoppingBag size={18} />
                <span>ORDER NEW EDITION</span>
              </Link>
              
              <button 
                type="button"
                onClick={() => setIsChapterModalOpen(true)}
                className="btn-duo-dark px-8 py-4 font-cinzel tracking-widest text-sm md:text-base w-full sm:w-auto flex items-center justify-center gap-2.5"
              >
                <BookOpen size={18} />
                <span>READ CHAPTER ONE</span>
              </button>
            </motion.div>

            {/* Launch Perks / Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 border-t border-antique-gold/15 text-xs text-muted-sandstone font-inter"
            >
              <div className="flex items-center gap-1.5 text-soft-gold">
                <ShieldCheck size={16} className="text-antique-gold" />
                <span>Verified 2026 Edition</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-antique-gold/40 hidden sm:block" />
              <div>Pan-India Delivery via Amazon & Flipkart</div>
              <div className="w-1 h-1 rounded-full bg-antique-gold/40 hidden sm:block" />
              <div>Published by Astitva Prakashan</div>
            </motion.div>

          </div>

          {/* Right Column: 3D Book Mockup with Ceremonial Ribbon Cut Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <CeremonialRibbonCover 
                coverUrl="https://i.ibb.co/V4jNxY8/mn.png"
                bookTitle="Victory's Hidden Defeat - 2026 Revised Edition"
                onOpenSample={() => setIsChapterModalOpen(true)}
              />
            </div>
          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => scrollToSection('highlights')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="font-cinzel text-[10px] tracking-[0.25em] text-antique-gold/70 group-hover:text-antique-gold transition-colors">
          EXPLORE LAUNCH EDITION
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-antique-gold/70 group-hover:text-antique-gold transition-colors" size={20} />
        </motion.div>
      </motion.div>

      {/* Chapter One Reading Modal */}
      <ChapterOneModal 
        isOpen={isChapterModalOpen}
        onClose={() => setIsChapterModalOpen(false)}
      />

    </section>
  );
}
