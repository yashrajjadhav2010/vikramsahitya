import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import SectionHeading from './SectionHeading';
import { 
  Scale, 
  Crown, 
  Flame, 
  EyeOff, 
  Swords, 
  Sun, 
  Hourglass, 
  ScrollText, 
  Compass 
} from 'lucide-react';

const themes = [
  { name: "Dharma & Duty", icon: Scale, desc: "The cosmic law that binds the king to his people." },
  { name: "The Anatomy of Ego", icon: Crown, desc: "The silent poison that corrupts absolute power." },
  { name: "Sacrifice of the Self", icon: Flame, desc: "Burning personal desires in the fire of responsibility." },
  { name: "Leadership in Isolation", icon: EyeOff, desc: "The lonely summit of the throne of Ujjayini." },
  { name: "Psychological Conflict", icon: Swords, desc: "The invisible war fought within the mind." },
  { name: "Redemption & Grace", icon: Sun, desc: "Finding light after the darkest internal defeats." },
  { name: "The Illusion of Power", icon: Hourglass, desc: "How time turns the greatest empires to dust." },
  { name: "Ancient Wisdom", icon: ScrollText, desc: "Lessons etched in the palm-leaf scriptures." },
  { name: "Destiny vs Will", icon: Compass, desc: "Forging a path when the stars dictate otherwise." }
];

export default function Themes() {
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

  const mouseBgX = useTransform(springX, [0, 1], ["-2%", "2%"]);
  const mouseBgY = useTransform(springY, [0, 1], ["-2%", "2%"]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const silhouetteY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section 
      id="themes" 
      ref={containerRef}
      className="py-24 md:py-32 bg-stone-black relative overflow-hidden border-y border-antique-gold/10"
      onMouseMove={handleMouseMove}
    >
      
      {/* Raj Mahal Silhouette CSS Overlay (Scroll Parallax) */}
      <motion.div 
        className="raj-mahal-silhouette"
        style={{ y: silhouetteY }}
      />

      {/* Raj Mahal Palace Background Texture */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ x: mouseBgX, y: mouseBgY }}
      >
        <img 
          src="https://images.unsplash.com/photo-1596414597022-2977ff266014?auto=format&fit=crop&q=80" 
          alt="Ancient Palace Texture" 
          className="w-[110%] h-[110%] max-w-none object-cover opacity-10 mix-blend-luminosity animate-majestic-breath -translate-x-[5%] -translate-y-[5%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-black via-transparent to-stone-black"></div>
      </motion.div>
      
      {/* Decorative Royal Pillars (Left & Right) */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-4 w-12 border-x-2 border-antique-gold/20 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-overlay"></div>
      <div className="hidden lg:block absolute top-0 bottom-0 right-4 w-12 border-x-2 border-antique-gold/20 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-overlay"></div>

      {/* Decorative corners */}
      <div className="absolute top-10 left-10 w-24 h-24 border-t-4 border-l-4 border-antique-gold/30 rounded-tl-[3rem] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-24 h-24 border-t-4 border-r-4 border-antique-gold/30 rounded-tr-[3rem] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border-b-4 border-l-4 border-antique-gold/30 rounded-bl-[3rem] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border-b-4 border-r-4 border-antique-gold/30 rounded-br-[3rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <SectionHeading 
          title="The Palace of Thoughts" 
          subtitle="Explore the philosophical pillars that hold up the grand narrative of Samrat Vikramaditya." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                delay: index * 0.1 
              }}
              className="group relative bg-dark-charcoal p-8 border-2 border-antique-gold/30 hover:border-antique-gold/80 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col items-center text-center transition-colors duration-500 rounded-t-[4rem] rounded-b-md border-b-[8px]"
            >
              {/* Palace Arch Illusion inside card */}
              <div className="absolute inset-2 border border-antique-gold/20 rounded-t-[3.5rem] rounded-b-sm pointer-events-none group-hover:border-antique-gold/40 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-antique-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[4rem] rounded-b-md pointer-events-none"></div>
              
              <div className="w-16 h-16 shrink-0 bg-stone-black border-2 border-antique-gold/60 rounded-full flex items-center justify-center group-hover:bg-antique-gold/20 group-hover:rotate-12 transition-all duration-500 shadow-inner shadow-black mb-6 z-10">
                <theme.icon className="text-antique-gold w-8 h-8 group-hover:text-soft-gold transition-colors" />
              </div>
              
              <div className="z-10">
                <h4 className="font-cinzel tracking-widest text-warm-ivory text-xl font-bold mb-3 group-hover:text-soft-gold transition-colors drop-shadow-md">
                  {theme.name}
                </h4>
                <p className="font-inter text-sm text-muted-sandstone leading-relaxed font-medium">
                  {theme.desc}
                </p>
              </div>
              
              {/* Decorative motif at bottom */}
              <div className="mt-6 w-8 h-1 bg-gradient-to-r from-transparent via-antique-gold/50 to-transparent z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
