import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Quote } from 'lucide-react';

const reviews = [
  {
    quote: "A breathtaking descent into the mind of a legendary king. Patil writes with the precision of a historian and the soul of a poet.",
    author: "ARIHANT CHANDRAKAR",
    role: "Fantasy Literature Review"
  },
  {
    quote: "Unlike any mythological fiction I've read. The internal battles of Vikramaditya are far more thrilling than the physical wars.",
    author: "Abhinav",
    role: "Goodreads Top Reviewer"
  },
  {
    quote: "A cinematic, immersive masterpiece that redefines how we view ancient Bharat's greatest heroes.",
    author: "pravin",
    role: "Literary Blog"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-dark-charcoal relative border-y border-antique-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
         <SectionHeading 
          title="Echoes of the Empire" 
          subtitle="What early readers are saying about the novel."
         />

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  delay: i * 0.1 
                }}
                className="p-8 border-2 border-antique-gold/10 bg-stone-black rounded-2xl relative flex flex-col hover:border-antique-gold/40 transition-colors duration-500 group shadow-lg shadow-black/50"
              >
                <Quote className="text-antique-gold/20 w-12 h-12 absolute top-6 left-6 group-hover:text-antique-gold/40 transition-colors duration-500 group-hover:scale-110" />
                <p className="font-lora text-lg text-warm-ivory italic relative z-10 pt-10 flex-grow leading-relaxed">
                  "{review.quote}"
                </p>
                <div className="mt-8 pt-6 border-t border-antique-gold/10">
                   <h4 className="font-cinzel text-antique-gold tracking-wide">{review.author}</h4>
                   <span className="font-inter text-sm text-muted-sandstone">{review.role}</span>
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
