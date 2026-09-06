import { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Link } from 'react-router-dom';
import { Sparkles, ShoppingBag, BookOpen } from 'lucide-react';
import ChapterOneModal from './ChapterOneModal';

export default function AboutBook() {
  const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);

  return (
    <section id="book" className="relative py-24 md:py-32 bg-stone-black overflow-hidden">
      {/* Decorative side elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-royal-navy/40 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-royal-crimson/15 blur-[130px] rounded-full pointer-events-none" />
      
      {/* Subtle Sanskrit watermark */}
      <div className="absolute top-1/4 right-10 -rotate-90 opacity-[0.03] text-9xl font-cinzel pointer-events-none whitespace-nowrap">
        धर्मो रक्षति रक्षितः
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Book Cover Presentation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative mx-auto w-full max-w-md lg:max-w-full aspect-[2/3] lg:aspect-auto lg:h-[680px] group"
          >
            {/* Book Cover Container */}
            <div className="absolute inset-0 bg-dark-charcoal border-2 border-antique-gold/50 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
              
              {/* Corner Ribbon */}
              <div className="absolute top-4 right-4 z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-antique-gold to-burnished-copper text-stone-black font-cinzel font-bold text-[10px] tracking-wider uppercase shadow-lg">
                  <Sparkles size={11} />
                  NEW VERSION
                </span>
              </div>

              <img 
                src="https://i.ibb.co/V4jNxY8/mn.png" 
                alt="Victory's Hidden Defeat - 2026 Edition"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-antique-gold/20 blur-2xl -z-10 rounded-2xl" />
          </motion.div>

          <div className="flex flex-col justify-center">
            
            {/* Launch Callout */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-antique-gold/10 border border-antique-gold/30 text-soft-gold text-xs font-cinzel tracking-widest uppercase">
                <Sparkles size={12} className="text-antique-gold" />
                Newly Released • 2026 Edition
              </span>
            </div>

            <SectionHeading 
              title="The Unseen War" 
              subtitle="Beyond the battlefield, the greatest empire is the mind."
              centered={false}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 font-lora text-lg text-muted-sandstone leading-relaxed"
            >
              <p>
                History remembers Samrat Vikramaditya as the invincible warrior, the architect of a golden era whose sword never tasted defeat. His name became synonymous with courage, his throne the ultimate symbol of supreme justice in ancient Bharat.
              </p>
              <p>
                Yet, the chronicles etched in stone omit the silent battles fought within the dimly lit corridors of his own mind. As the borders of his empire expanded, the weight of Dharma pressed heavier upon his soul. What is the true cost of perfection? How does a king govern a realm when his own ego threatens to consume the very wisdom he is worshipped for?
              </p>
              <p>
                <strong className="text-warm-ivory font-inter font-normal tracking-wide">Victory's Hidden Defeat (2026 Edition)</strong> is an emotionally gripping psychological drama draped in the grandeur of mythological fiction. It strips away the myth of the flawless emperor to reveal a profoundly human leader engaged in a devastating internal war against pride, responsibility, and the crushing isolation of supreme power.
              </p>
              
              <div className="pt-6 flex flex-wrap gap-4 items-center">
                <Link 
                  to="/purchase" 
                  className="btn-duo-gold px-6 py-3 font-cinzel tracking-widest text-xs md:text-sm flex items-center gap-2 shadow-lg"
                >
                  <ShoppingBag size={16} />
                  <span>ORDER THIS EDITION</span>
                </Link>

                <button 
                  type="button"
                  onClick={() => setIsChapterModalOpen(true)}
                  className="btn-duo-dark px-6 py-3 font-cinzel tracking-widest text-xs md:text-sm flex items-center gap-2"
                >
                  <BookOpen size={16} />
                  <span>PREVIEW CHAPTER 1</span>
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <ChapterOneModal 
        isOpen={isChapterModalOpen}
        onClose={() => setIsChapterModalOpen(false)}
      />
    </section>
  );
}
