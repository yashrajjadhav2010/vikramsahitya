import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Shield, BookOpen, Crown, Flame, Gem, Eye } from 'lucide-react';

const features = [
  {
    title: "Samrat Vikramaditya",
    description: "The undefeated monarch whose external victories masked a turbulent search for ultimate truth and inner peace.",
    icon: Crown
  },
  {
    title: "The Golden Era",
    description: "Step into an ancient Bharat thriving with unparalleled prosperity, unmatched architectural marvels, and deep philosophical awakening.",
    icon: Gem
  },
  {
    title: "The Weight of Dharma",
    description: "A profound exploration of cosmic law, duty, and the agonizing moral sacrifices required of a true leader.",
    icon: BookOpen
  },
  {
    title: "Psychological Warfare",
    description: "The battlefield shifts from blood-soaked plains to the complex labyrinth of the mind, battling ego and hubris.",
    icon: Eye
  },
  {
    title: "Ujjayini's Splendor",
    description: "Experience the royal court of Ujjain, described with meticulous historical and mythological authenticity.",
    icon: Shield
  },
  {
    title: "The Inner Agni",
    description: "A spiritual journey of redemption, symbolizing the sacred fire that burns away pride to forge immortal wisdom.",
    icon: Flame
  }
];

const WarScene = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-end justify-center">
      {/* Distant Fires & Smoke */}
      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-red-950/30 via-orange-900/10 to-transparent mix-blend-screen"></div>
      
      {/* Animated Embers of War */}
      {mounted && [...Array(35)].map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 10;
        return (
          <motion.div
            key={i}
            className="absolute bottom-[-20px] rounded-full bg-orange-500/80 shadow-[0_0_12px_3px_rgba(255,100,0,0.8)] mix-blend-screen"
            style={{ width: size, height: size, left }}
            animate={{
              y: ["0vh", "-120vh"],
              x: ["0px", `${(Math.random() - 0.5) * 300}px`],
              opacity: [0, 1, 0, 1, 0]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        );
      })}

      {/* Lone Sword - The Symbol of Solitude After Victory */}
      <div className="relative w-full h-[400px] max-w-3xl opacity-70 z-10">
        <svg viewBox="0 0 600 400" className="w-full h-full drop-shadow-2xl">
          {/* Distant battle debris / spears stuck in ground */}
          <g stroke="#C5A059" strokeWidth="1.5" strokeOpacity="0.2">
            <line x1="100" y1="360" x2="70" y2="250" />
            <line x1="150" y1="370" x2="180" y2="290" />
            <line x1="450" y1="380" x2="490" y2="240" />
            <line x1="520" y1="360" x2="500" y2="280" />
            <line x1="220" y1="370" x2="200" y2="330" />
          </g>
          
          {/* Ground Mound / Barren Hill */}
          <path d="M 0 400 Q 300 320 600 400 Z" fill="#050505" />
          <path d="M 0 400 Q 300 320 600 400 Z" fill="none" stroke="#C5A059" strokeWidth="2" strokeOpacity="0.2"/>
          
          {/* The Solitary Giant Sword */}
          <g transform="translate(290, 150)">
             {/* Blade */}
             <path d="M 7 60 L 7 210 L 10 230 L 13 210 L 13 60 Z" fill="#886934" opacity="0.9" />
             {/* Blade Highlight */}
             <path d="M 10 60 L 10 230 L 13 210 L 13 60 Z" fill="#C5A059" opacity="0.9" />
             {/* Guard */}
             <rect x="-20" y="52" width="60" height="8" rx="2" fill="#111" stroke="#C5A059" strokeWidth="1" />
             {/* Grip */}
             <rect x="5" y="15" width="10" height="37" fill="#000" stroke="#C5A059" strokeWidth="1" />
             {/* Pommel */}
             <circle cx="10" cy="8" r="8" fill="#111" stroke="#C5A059" strokeWidth="1" />
             
             {/* Tattered cloth flowing in wind (representing lost banners) */}
             <motion.path 
               d="M 15 56 Q 60 60 80 80 Q 60 70 15 65 Z" 
               fill="#700" 
               opacity="0.7"
               animate={{ 
                 d: [
                   "M 15 56 Q 60 60 80 80 Q 60 70 15 65 Z", 
                   "M 15 56 Q 50 75 90 85 Q 55 80 15 65 Z", 
                   "M 15 56 Q 60 60 80 80 Q 60 70 15 65 Z"
                 ] 
               }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default function WorldOfVikramaditya() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX / rect.width);
    mouseY.set(e.clientY / rect.height);
  };

  const springConfig = { damping: 50, stiffness: 400 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const mouseBgX = useTransform(springX, [0, 1], ["-3%", "3%"]);
  const mouseBgY = useTransform(springY, [0, 1], ["-3%", "3%"]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const silhouetteY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="flex flex-col">
      <section 
        id="universe" 
        ref={containerRef}
        className="py-24 md:py-32 relative bg-dark-charcoal border-y border-antique-gold/10 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        
        {/* Raj Mahal Silhouette CSS Overlay (Scroll Parallax) */}
        <motion.div 
          className="raj-mahal-silhouette"
          style={{ y: silhouetteY }}
        />

        {/* Animated Palace/Pillar Texture Overlay (Mouse Parallax) */}
        <motion.div 
          className="absolute inset-0 opacity-[0.04] mix-blend-screen pointer-events-none flex items-center justify-center z-0"
          style={{ x: mouseBgX, y: mouseBgY }}
        >
          <img 
            src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=2000" 
            alt="Texture" 
            className="w-[110%] h-[110%] max-w-none object-cover blur-[1px] grayscale contrast-125 animate-majestic-breath" 
          />
        </motion.div>

        {/* The Animated War Scene & Solitude Graphic */}
        <WarScene />

        <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="w-[800px] h-[800px] border-[2px] border-antique-gold rounded-full flex items-center justify-center">
              <div className="w-[700px] h-[700px] border-[1px] border-antique-gold rounded-full flex items-center justify-center border-dashed">
                <div className="w-[600px] h-[600px] border-[2px] border-antique-gold rounded-full rotate-45 border-dotted"></div>
              </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <SectionHeading 
            title="The World of Vikramaditya" 
            subtitle="Immerse yourself in a vividly recreated ancient Bharat—a realm of majestic palaces, sacred philosophies, and legendary kings." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  delay: index * 0.1 
                }}
                className="glass-card p-8 rounded-2xl group relative overflow-hidden border-2 border-antique-gold/10 hover:border-antique-gold/40 bg-stone-black/70 backdrop-blur-sm"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-antique-gold/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 border-2 border-antique-gold/30 rounded-2xl flex items-center justify-center mb-6 group-hover:border-antique-gold group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 bg-stone-black shadow-inner shadow-black">
                    <feature.icon className="text-antique-gold w-8 h-8 group-hover:text-soft-gold transition-colors" />
                  </div>
                  <h3 className="font-cinzel text-2xl text-warm-ivory mb-4 tracking-wide group-hover:text-soft-gold transition-colors drop-shadow-sm font-bold">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-muted-sandstone leading-relaxed text-sm font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Epic War Sequence Graphic Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-stone-black border-b border-antique-gold/10 py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596638069695-17796d11dc50?auto=format&fit=crop&q=80&w=2000" 
            alt="Ancient Battle Graphic" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity sepia-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-black via-transparent to-stone-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-black via-transparent to-stone-black"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold-gradient tracking-widest mb-6 font-bold uppercase drop-shadow-lg">
              The War Sequence
            </h2>
            <div className="w-24 h-1 bg-antique-gold/50 mx-auto mb-8 rounded-full"></div>
            <p className="font-inter text-lg md:text-xl text-warm-ivory/80 leading-relaxed font-medium">
              Every victory on the battlefield leaves a scar on the soul. The graphic reality of war is not written in the history books, but etched in the memories of the solitary kings who survived it.
            </p>
          </motion.div>
        </div>

        {/* Embers overlay specifically for this graphic section */}
        <div className="absolute inset-0 pointer-events-none z-0">
           {[...Array(15)].map((_, i) => (
             <motion.div
               key={`ember-${i}`}
               className="absolute bottom-[-10px] rounded-full bg-orange-500/60 shadow-[0_0_10px_2px_rgba(255,120,0,0.6)] mix-blend-screen"
               style={{ 
                 width: Math.random() * 4 + 2, 
                 height: Math.random() * 4 + 2, 
                 left: `${Math.random() * 100}%` 
               }}
               animate={{
                 y: ["0vh", "-100vh"],
                 x: ["0px", `${(Math.random() - 0.5) * 200}px`],
                 opacity: [0, 1, 0, 1, 0]
               }}
               transition={{
                 duration: Math.random() * 8 + 6,
                 delay: Math.random() * 5,
                 repeat: Infinity,
                 ease: "easeOut"
               }}
             />
           ))}
        </div>
      </section>
    </div>
  );
}
