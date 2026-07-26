import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { ShoppingCart } from 'lucide-react';

export default function Purchase() {
  return (
    <section id="purchase" className="py-24 md:py-32 bg-[url('https://images.unsplash.com/photo-1596791986429-c4524458b6cb?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed relative">
      <div className="absolute inset-0 bg-stone-black/85 backdrop-blur-[1px]"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
         <SectionHeading 
           title="Secure Your Copy" 
           subtitle="The battle begins now. Order the physical or digital edition today."
         />

         <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 mt-12">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://amzn.in/d/0hChBPW8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-duo-gold px-8 py-4 font-cinzel tracking-widest text-base gap-3 flex items-center justify-center"
            >
               <ShoppingCart size={20} />
               AMAZON
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://dl.flipkart.com/dl/victory-s-hidden-defeat-won-many-wars-end-defeated-myself/p/itm70195bba3b632?pid=9789364523080&lid=LSTBOK9789364523080HFKIC6&_refId=&_appId=CL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-duo-dark px-8 py-4 font-cinzel tracking-widest text-base gap-3 flex items-center justify-center"
            >
               <ShoppingCart size={20} />
               FLIPKART
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://bookscape.com/product-details/victorys-hidden-defeat-i-won-many-wars-but-in-the-end-i-defeated-myself-9789364523080?srsltid=AfmBOopORtccmxCeL2eMD_3EokpfeKg-ZuZTmXCPA1SuaxJulgqNG5IE"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-antique-gold/40 text-warm-ivory px-8 py-4 font-cinzel tracking-widest text-base gap-3 hover:bg-antique-gold/20 hover:border-antique-gold transition-colors duration-300 flex items-center justify-center rounded-sm"
            >
               <ShoppingCart size={20} />
               BOOKSCAPE
            </motion.a>
         </div>
         <p className="mt-10 font-inter text-sm text-muted-sandstone tracking-wide">
           International editions coming soon.
         </p>
      </div>
    </section>
  );
}
