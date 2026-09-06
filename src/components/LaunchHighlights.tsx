import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Sparkles, Scroll, Feather, ShieldAlert, Award, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const launchFeatures = [
  {
    icon: Feather,
    tag: 'Narrative Craft',
    title: 'Enhanced & Polished Prose',
    description: 'Every chapter has been meticulously refined to heighten psychological tension, emotional resonance, and the existential weight borne by Samrat Vikramaditya.',
  },
  {
    icon: Scroll,
    tag: 'Exclusive Content',
    title: "Author's New Foreword",
    description: 'Features a never-before-seen personal introduction by Prajwal Patil, sharing the intimate philosophical genesis and untold inspirations behind the novel.',
  },
  {
    icon: Sparkles,
    tag: 'Collector Aesthetics',
    title: 'Ornamental Layout & Shlokas',
    description: 'Enhanced interior layout featuring sacred Sanskrit invocations and ancient astronomical motifs celebrating the golden era of ancient Ujjayini.',
  },
  {
    icon: ShieldAlert,
    tag: 'Lore & Warfare',
    title: 'Expanded Moral Climax',
    description: 'Deepened scenes exploring the brutal philosophical dilemma after the dust settled—where victory leaves a deeper scar than defeat ever could.',
  },
];

interface LaunchHighlightsProps {
  onOpenSample?: () => void;
}

export default function LaunchHighlights({ onOpenSample }: LaunchHighlightsProps) {
  return (
    <section className="py-24 md:py-32 bg-stone-black relative overflow-hidden border-b border-antique-gold/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-antique-gold/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Launch Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-antique-gold/40 bg-gradient-to-r from-antique-gold/15 via-antique-gold/5 to-antique-gold/15 text-soft-gold text-xs md:text-sm font-cinzel tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <Award size={16} className="text-antique-gold animate-pulse" />
            <span>2026 Revised & Expanded Edition</span>
          </motion.div>
        </div>

        <SectionHeading 
          title="What's New in This Launch" 
          subtitle="A revitalized edition crafted for discerning readers of epic Indian mythology and psychological drama."
        />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {launchFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl bg-dark-charcoal/80 border border-antique-gold/20 hover:border-antique-gold/60 transition-all duration-300 relative group flex flex-col justify-between shadow-xl"
              >
                {/* Top Corner Glow on hover */}
                <div className="absolute -top-px -left-px -right-px h-1 bg-gradient-to-r from-transparent via-antique-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-stone-black border border-antique-gold/30 flex items-center justify-center text-antique-gold mb-6 group-hover:scale-110 group-hover:border-antique-gold transition-all duration-300 shadow-md">
                    <Icon size={22} />
                  </div>

                  <span className="font-cinzel text-[11px] tracking-widest uppercase text-antique-gold/80 block mb-2 font-medium">
                    {feature.tag}
                  </span>

                  <h3 className="font-cinzel text-xl text-warm-ivory mb-3 font-semibold group-hover:text-soft-gold transition-colors">
                    {feature.title}
                  </h3>

                  <p className="font-inter text-sm text-muted-sandstone leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-antique-gold/10 flex items-center text-xs font-cinzel text-antique-gold group-hover:text-soft-gold gap-1">
                  <span>Included in New Edition</span>
                  <Sparkles size={12} className="opacity-70" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Author's Launch Note Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-stone-black via-dark-charcoal to-stone-black border border-antique-gold/30 relative shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-royal-crimson/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-antique-gold" />
                <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-antique-gold font-bold">
                  Author's Launch Note
                </span>
              </div>

              <blockquote className="font-lora text-lg md:text-xl text-warm-ivory/95 italic leading-relaxed">
                "This new edition brings the story closest to what I envisioned in my quietest hours of contemplation. Vikramaditya's journey is not just ancient history; it is a timeless mirror for every soul fighting silent, invisible wars."
              </blockquote>

              <p className="font-cinzel text-sm text-antique-gold font-semibold tracking-wider">
                — Prajwal Patil, <span className="font-inter font-normal text-muted-sandstone text-xs">Author of Victory's Hidden Defeat</span>
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-stretch lg:border-l lg:border-antique-gold/20 lg:pl-8">
              <Link
                to="/purchase"
                className="btn-duo-gold px-6 py-3.5 font-cinzel text-sm tracking-widest text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <span>ORDER NEW EDITION</span>
                <ArrowRight size={16} />
              </Link>

              {onOpenSample ? (
                <button
                  type="button"
                  onClick={onOpenSample}
                  className="btn-duo-dark px-6 py-3.5 font-cinzel text-sm tracking-widest text-center flex items-center justify-center gap-2"
                >
                  <BookOpen size={16} />
                  <span>PREVIEW CHAPTER 1</span>
                </button>
              ) : (
                <Link
                  to="/themes"
                  className="btn-duo-dark px-6 py-3.5 font-cinzel text-sm tracking-widest text-center flex items-center justify-center gap-2"
                >
                  <BookOpen size={16} />
                  <span>PREVIEW CHAPTER 1</span>
                </Link>
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
