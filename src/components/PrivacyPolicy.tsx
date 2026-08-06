import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

export default function PrivacyPolicy() {
  return (
    <section className="py-24 md:py-32 relative bg-dark-charcoal min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="Privacy Policy" 
          subtitle="How we handle your information" 
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-stone-black p-8 md:p-12 rounded-2xl border border-antique-gold/20 shadow-xl space-y-8 font-inter text-muted-sandstone leading-relaxed"
        >
          <div>
            <h3 className="font-cinzel text-xl text-antique-gold mb-4">1. Information Collection</h3>
            <p>
              We collect information that you provide directly to us, such as when you subscribe to our newsletter or contact us. This may include your email address and any other information you choose to provide.
            </p>
          </div>
          
          <div>
            <h3 className="font-cinzel text-xl text-antique-gold mb-4">2. Use of Information</h3>
            <p>
              The information we collect is used solely to communicate with you, provide updates regarding "Victory's Hidden Defeat", and send newsletters. We do not sell or share your personal information with third parties.
            </p>
          </div>
          
          <div>
            <h3 className="font-cinzel text-xl text-antique-gold mb-4">3. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:prajwal61716@gmail.com" className="text-antique-gold hover:text-soft-gold">prajwal61716@gmail.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
