import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { ShoppingCart, ShieldCheck, Truck, Award, Star, ExternalLink, Sparkles } from 'lucide-react';

const retailers = [
  {
    name: 'Amazon India',
    badge: 'Popular Choice',
    url: 'https://amzn.in/d/04qmUrKx',
    delivery: 'Prime Fast Dispatch',
    highlight: 'Latest revised edition with verified reader reviews and rapid delivery.',
    buttonClass: 'btn-duo-gold text-stone-black',
    accentColor: 'border-antique-gold/50',
  },
  {
    name: 'Flipkart',
    badge: 'Official Distributor',
    url: 'https://dl.flipkart.com/s/PbGzr3uuuN',
    delivery: 'Pan-India Express',
    highlight: 'Latest version in stock with verified packaging and express shipping.',
    buttonClass: 'btn-duo-dark text-antique-gold hover:text-soft-gold',
    accentColor: 'border-antique-gold/30',
  },
  {
    name: 'Astitva Prakashan',
    badge: 'Publisher Direct',
    url: 'https://astitvaprakashan.com/product/victorys-hidden-defeat-i-won-many-wars-but-in-the-end-i-defeated-myself/',
    delivery: 'Direct from Press',
    highlight: 'Order directly from the official publishing house with authentic first-run copies.',
    buttonClass: 'btn-duo-gold text-stone-black',
    accentColor: 'border-antique-gold/50',
  },
];

const bookSpecs = [
  { label: 'Edition', value: '2026 Revised & Expanded Launch Edition' },
  { label: 'Author', value: 'Prajwal Patil' },
  { label: 'Publisher', value: 'Astitva Prakashan' },
  { label: 'Format', value: 'Paperback & Digital' },
  { label: 'Language', value: 'English' },
  { label: 'Genre', value: 'Mythological Fiction / Psychological Epic' },
];

export default function Purchase() {
  return (
    <section id="purchase" className="py-20 md:py-28 relative bg-stone-black overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-royal-crimson/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-antique-gold/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Launch Edition Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-antique-gold/40 bg-dark-charcoal text-soft-gold text-xs md:text-sm font-cinzel tracking-widest uppercase shadow-[0_0_25px_rgba(212,175,55,0.2)]"
          >
            <Sparkles size={14} className="text-antique-gold animate-pulse" />
            <span>Launch Store • Order The New Edition</span>
          </motion.div>
        </div>

        <SectionHeading 
          title="Claim Your Copy" 
          subtitle="Experience the newly launched, definitive edition of Victory's Hidden Defeat. In stock and shipping now across India."
        />

        {/* Retailer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {retailers.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-2xl bg-dark-charcoal/90 border ${item.accentColor} shadow-2xl relative flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-cinzel text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-antique-gold/10 text-antique-gold border border-antique-gold/30">
                    {item.badge}
                  </span>
                  <div className="flex text-antique-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#C5A059" stroke="none" />
                    ))}
                  </div>
                </div>

                <h3 className="font-cinzel text-2xl text-warm-ivory font-bold mb-2 group-hover:text-antique-gold transition-colors">
                  {item.name}
                </h3>

                <p className="font-inter text-xs text-soft-gold/90 font-medium mb-4 flex items-center gap-1.5">
                  <Truck size={14} className="text-antique-gold" />
                  <span>{item.delivery}</span>
                </p>

                <p className="font-inter text-sm text-muted-sandstone leading-relaxed mb-6">
                  {item.highlight}
                </p>
              </div>

              <div className="pt-4 border-t border-antique-gold/15">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 font-cinzel text-xs md:text-sm font-bold tracking-widest flex items-center justify-center gap-2 rounded-xl transition-all duration-300 shadow-md ${item.buttonClass}`}
                >
                  <ShoppingCart size={16} />
                  <span>ORDER ON {item.name.toUpperCase()}</span>
                  <ExternalLink size={14} className="opacity-70" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Book Specifications & Collector Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 md:p-10 rounded-2xl bg-stone-black border border-antique-gold/20 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-antique-gold" size={22} />
            <h3 className="font-cinzel text-xl text-warm-ivory font-bold tracking-wide">
              Official Edition Specifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-inter text-sm">
            {bookSpecs.map((spec) => (
              <div key={spec.label} className="p-4 rounded-xl bg-dark-charcoal/60 border border-antique-gold/10">
                <p className="text-xs uppercase tracking-wider text-antique-gold/80 font-cinzel mb-1">
                  {spec.label}
                </p>
                <p className="text-warm-ivory font-medium">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-antique-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-sandstone font-inter text-center sm:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-antique-gold" />
              <span>100% Genuine Publisher Stock Guaranteed • Astitva Prakashan</span>
            </div>
            <p>
              For bulk orders or literary inquiries: <a href="mailto:prajwal61716@gmail.com" className="text-antique-gold underline hover:text-soft-gold">prajwal61716@gmail.com</a>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
