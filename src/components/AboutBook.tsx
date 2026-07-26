import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Link } from 'react-router-dom';

export default function AboutBook() {
  return (
    <section id="book" className="relative py-24 md:py-32 bg-stone-black overflow-hidden">
      {/* Decorative side elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-royal-navy/30 blur-[100px] rounded-full"></div>
      <div className="absolute right-0 top-0 w-96 h-96 bg-royal-crimson/10 blur-[120px] rounded-full"></div>
      
      {/* Subtle Sanskrit/Hindi watermark text in background */}
      <div className="absolute top-1/4 right-10 -rotate-90 opacity-[0.02] text-9xl font-cinzel pointer-events-none whitespace-nowrap">
        धर्मो रक्षति रक्षितः
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, rotateZ: -2 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative mx-auto w-full max-w-md lg:max-w-full aspect-[2/3] lg:aspect-auto lg:h-[700px] cursor-pointer"
          >
            {/* Book Cover Container */}
            <div className="absolute inset-0 bg-dark-charcoal border-4 border-antique-gold/50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
              <img 
                src="https://i.ibb.co/V4jNxY8/mn.png" 
                alt="Victory's Hidden Defeat Cover"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-antique-gold/20 blur-2xl -z-10 rounded-lg"></div>
          </motion.div>

          <div className="flex flex-col justify-center">
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
                <strong className="text-warm-ivory font-inter font-normal tracking-wide">Victory's Hidden Defeat</strong> is an emotionally gripping psychological drama draped in the grandeur of mythological fiction. It strips away the myth of the flawless emperor to reveal a profoundly human leader engaged in a devastating internal war against pride, responsibility, and the crushing isolation of supreme power.
              </p>
              
              <div className="pt-8">
                <Link to="/purchase" className="inline-flex items-center gap-3 text-antique-gold font-cinzel tracking-widest hover:text-soft-gold transition-colors group">
                  EXPLORE THE EPIC 
                  <span className="w-8 h-[1px] bg-antique-gold group-hover:w-12 transition-all duration-300 relative">
                     <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-antique-gold group-hover:bg-soft-gold transition-colors"></span>
                  </span>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
