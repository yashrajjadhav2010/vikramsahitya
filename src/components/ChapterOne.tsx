import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from './SectionHeading';
import { ChevronDown, BookOpen } from 'lucide-react';

export default function ChapterOne() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="chapter-one" className="py-24 md:py-32 bg-dark-charcoal relative border-y border-antique-gold/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <BookOpen className="w-12 h-12 text-antique-gold mx-auto mb-8 opacity-80" />
        <SectionHeading 
          title="The Throne of Thorns" 
          subtitle="Read the exclusive opening passage from Victory's Hidden Defeat." 
        />
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center justify-center gap-3 mx-auto btn-duo-dark px-10 py-5"
        >
          <span className="font-cinzel tracking-widest text-warm-ivory group-hover:text-antique-gold transition-colors text-sm md:text-base">
            {isOpen ? 'CLOSE CHAPTER' : 'BEGIN READING'}
          </span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <ChevronDown className="text-antique-gold" size={20} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-16 p-8 md:p-16 bg-stone-black border border-antique-gold/20 relative shadow-2xl">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-antique-gold/60 m-4"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-antique-gold/60 m-4"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-antique-gold/60 m-4"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-antique-gold/60 m-4"></div>

                <div className="font-lora text-lg md:text-xl text-muted-sandstone leading-loose text-left space-y-8 relative z-10">
                  <p>
                    <span className="float-left text-6xl md:text-8xl font-cinzel text-antique-gold leading-[0.8] pr-4 pt-2">T</span>
                    he war drums had silenced, but their rhythm still beat against the walls of his skull. Samrat Vikramaditya stood at the edge of the highest balcony in the grand palace of Ujjayini, looking out over a city bathed in the golden light of dusk. It was an empire forged in blood and bound by an unbreakable vow to Dharma. 
                  </p>
                  <p>
                    To the world below, he was a god in mortal flesh. The undisputed sovereign whose very shadow could quench rebellions. Yet, as the cool evening wind brushed against the intricate gold threads of his royal garments, he felt the undeniable, crushing weight of isolation. True victory, he realized, was not the subjugation of rival kings. It was the terrifying mastery over the darkness that lurks when there are no more enemies left to conquer.
                  </p>
                  <p>
                    He closed his eyes, and instead of peace, he saw the faces of those sacrificed on the altar of his legacy. The crown upon his head was not made of gold, but of a thousand invisible thorns, piercing deeper with every judgment he rendered. Tomorrow, the court would gather to sing his praises. Tonight, he had to survive himself.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
