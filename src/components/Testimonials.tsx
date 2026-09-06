import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Quote, Star, Sparkles } from 'lucide-react';

const reviews = [
  {
    quote: "A breathtaking descent into the mind of a legendary king. Patil writes with the precision of a historian and the soul of a poet. The revised edition elevates the prose to a whole new level.",
    author: "ARIHANT CHANDRAKAR",
    role: "Fantasy Literature Review",
    rating: 5,
  },
  {
    quote: "Unlike any mythological fiction I've read. The internal battles of Vikramaditya are far more thrilling than the physical wars. The author's foreword is deeply philosophical.",
    author: "Abhinav",
    role: "Goodreads Top Reviewer",
    rating: 5,
  },
  {
    quote: "A cinematic, immersive masterpiece that redefines how we view ancient Bharat's greatest heroes. This new edition is an essential addition to every Indian literature shelf.",
    author: "Pravin",
    role: "Literary Critic & Blogger",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-dark-charcoal relative border-y border-antique-gold/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Rating summary bar */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-black border border-antique-gold/30 text-soft-gold text-xs font-cinzel tracking-widest uppercase">
            <Sparkles size={12} className="text-antique-gold" />
            <span>Reader Acclaim • 4.8 / 5.0 Average Rating</span>
          </div>
        </div>

        <SectionHeading 
          title="Echoes of the Empire" 
          subtitle="What readers and literary critics are saying about Victory's Hidden Defeat."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                delay: i * 0.1 
              }}
              className="p-8 border border-antique-gold/20 bg-stone-black rounded-2xl relative flex flex-col hover:border-antique-gold/50 transition-all duration-300 group shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="text-antique-gold/30 w-10 h-10 group-hover:text-antique-gold/60 transition-colors" />
                <div className="flex text-antique-gold">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} size={14} fill="#C5A059" stroke="none" />
                  ))}
                </div>
              </div>

              <p className="font-lora text-lg text-warm-ivory italic relative z-10 flex-grow leading-relaxed mb-6">
                "{review.quote}"
              </p>

              <div className="pt-6 border-t border-antique-gold/15">
                <h4 className="font-cinzel text-antique-gold font-bold tracking-wide text-sm">{review.author}</h4>
                <span className="font-inter text-xs text-muted-sandstone">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
