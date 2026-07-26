import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cinematic-radial mix-blend-multiply opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-black/80 via-transparent to-stone-black z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=2560" 
          alt="Ancient Indian Temple Ruins" 
          className="w-full h-full object-cover object-center scale-105 transform-gpu blur-[2px] opacity-40"
        />
        
        {/* Subtle background mandala / dharma chakra graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] z-10 pointer-events-none mix-blend-screen w-[800px] h-[800px]">
           <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_120s_linear_infinite]">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="2 1" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" strokeWidth="0.2" />
              {[...Array(24)].map((_, i) => (
                <line key={i} x1="50" y1="50" x2="50" y2="10" stroke="#D4AF37" strokeWidth="0.2" transform={`rotate(${i * 15} 50 50)`} />
              ))}
              <circle cx="50" cy="50" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
           </svg>
        </div>

        {/* Particles Effect Simulation */}
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-antique-gold rounded-full opacity-30 animate-float"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDuration: Math.random() * 10 + 10 + 's',
                animationDelay: Math.random() * 5 + 's',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="mb-8 relative"
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-20">
             <span className="font-cinzel text-6xl text-antique-gold tracking-[0.5em] select-none">सत्यम</span>
          </div>
          <p className="font-inter tracking-[0.3em] text-antique-gold text-sm md:text-base mb-6 uppercase font-bold">
            A Mythological Fiction by Prajwal Patil
          </p>
          <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-warm-ivory font-bold leading-tight tracking-wide drop-shadow-2xl">
            VICTORY'S <br className="hidden md:block"/>
            <span className="text-gold-gradient">HIDDEN DEFEAT</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.8 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="font-lora text-xl md:text-2xl text-muted-sandstone italic font-medium">
            "I won many wars but in the end, I defeated myself."
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <Link to="/purchase" className="btn-duo-gold px-10 py-4 font-cinzel tracking-widest text-lg w-full sm:w-auto">
            CLAIM YOUR COPY
          </Link>
          
          <Link to="/chapter-one" className="btn-duo-dark px-10 py-4 font-cinzel tracking-widest text-lg w-full sm:w-auto">
            READ CHAPTER ONE
          </Link>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
      >
        <span className="font-cinzel text-xs tracking-[0.2em] text-antique-gold/70">ENTER UJJAYINI</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-antique-gold/70" size={24} />
        </motion.div>
      </motion.div>

    </section>
  );
}
