import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-stone-black">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="font-cinzel text-3xl md:text-4xl text-warm-ivory mb-6">Continue the Journey</h2>
          <p className="font-lora text-lg text-muted-sandstone mb-10 leading-relaxed">
            Join the royal court. Receive exclusive character artwork, deleted scenes, and updates on future novels directly from Prajwal Patil.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" action="https://formsubmit.co/prajwal61716@gmail.com" method="POST">
             <input 
               type="email" 
               name="email"
               placeholder="Enter your email address" 
               className="flex-grow bg-dark-charcoal border-2 border-antique-gold/30 px-6 py-4 text-warm-ivory font-inter focus:outline-none focus:border-antique-gold transition-colors rounded-2xl shadow-inner shadow-black"
               required
             />
             <button type="submit" className="btn-duo-gold px-8 py-4 tracking-widest flex items-center justify-center gap-2 whitespace-nowrap font-cinzel text-lg">
                SUBSCRIBE <Send size={20} />
             </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
