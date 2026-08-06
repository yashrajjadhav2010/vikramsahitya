import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function AboutAuthor() {
  return (
    <section id="author" className="py-24 md:py-32 bg-stone-black relative overflow-hidden">
       {/* Background gradient */}
       <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-antique-gold/5 blur-[150px] rounded-full -z-10"></div>
       
       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <SectionHeading 
                title="Prajwal Patil" 
                subtitle="Author, Historian, Storyteller"
                centered={false}
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-lora text-lg text-muted-sandstone leading-relaxed space-y-6"
              >
                <p>
                  Prajwal Patil masterfully weaves historical grandeur with deep psychological insight. Drawing from a profound passion for ancient Indian texts and historical architecture, he reimagines the legends of Bharat to explore the timeless human condition.
                </p>
                <p>
                  "The stories of our past are not just chronicles of war; they are the blueprints of the human soul. I wrote <em className="text-warm-ivory">Victory's Hidden Defeat</em> to understand the man behind the myth—the agonizing choices that define a true leader when the world expects perfection."
                </p>
                
                <div className="pt-8">
                   <p className="font-cinzel tracking-widest text-antique-gold text-sm uppercase">Follow the Author</p>
                   <div className="flex gap-6 mt-4">
                      <a href="https://instagram.com/Vikram_Sahitya_04" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-warm-ivory hover:text-soft-gold transition-colors font-inter text-sm">
                         <Instagram size={20} />
                         @Vikram_Sahitya_04
                      </a>
                   </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, rotateZ: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="lg:col-span-7 order-1 lg:order-2 relative cursor-pointer"
            >
               <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] overflow-hidden rounded-2xl border-4 border-antique-gold/20 grayscale hover:grayscale-0 transition-all duration-1000 group">
                  <div className="absolute inset-0 bg-stone-black/20 z-10 group-hover:bg-transparent transition-colors duration-1000"></div>
                  <img 
                    src="https://i.ibb.co/rYSQB70/file-00000000844082088272ea3e6f447ad9.png" 
                    alt="Prajwal Patil - Author Portrait" 
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Decorative Frame */}
                  <div className="absolute inset-4 border border-antique-gold/30 z-20 pointer-events-none group-hover:border-antique-gold/60 transition-colors duration-1000"></div>
               </div>
            </motion.div>

         </div>
       </div>
    </section>
  );
}
