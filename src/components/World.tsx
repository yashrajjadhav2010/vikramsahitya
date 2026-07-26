import { useRef } from 'react';
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
        className="absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none flex items-center justify-center z-0"
        style={{ x: mouseBgX, y: mouseBgY }}
      >
         <img 
           src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=2000" 
           alt="Texture" 
           className="w-[110%] h-[110%] max-w-none object-cover blur-[1px] grayscale contrast-125 animate-majestic-breath" 
         />
      </motion.div>

      <div className="absolute inset-0 opacity-[0.07] pointer-events-none flex items-center justify-center overflow-hidden">
         <div className="w-[800px] h-[800px] border-[2px] border-antique-gold rounded-full flex items-center justify-center">
            <div className="w-[700px] h-[700px] border-[1px] border-antique-gold rounded-full flex items-center justify-center border-dashed">
               <div className="w-[600px] h-[600px] border-[2px] border-antique-gold rounded-full rotate-45 border-dotted"></div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
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
              className="glass-card p-8 rounded-2xl group relative overflow-hidden border-2 border-antique-gold/20 hover:border-antique-gold bg-stone-black/80"
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
  );
}
