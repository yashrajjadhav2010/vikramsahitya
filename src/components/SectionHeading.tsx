import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-gold-gradient mb-6"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="text-muted-sandstone font-lora text-lg md:text-xl max-w-2xl leading-relaxed mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        className={`flex items-center gap-4 mt-8 ${centered ? 'justify-center' : ''}`}
      >
        <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent to-antique-gold"></div>
        {/* Ancient Indian Lotus/Diamond Motif */}
        <div className="relative w-4 h-4 rotate-45 border border-antique-gold flex items-center justify-center">
          <div className="absolute w-2 h-2 bg-antique-gold rounded-full"></div>
        </div>
        <div className="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent to-antique-gold"></div>
      </motion.div>
    </div>
  );
}
