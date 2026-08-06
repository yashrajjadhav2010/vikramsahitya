import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

export default function TermsOfService() {
  return (
    <section className="py-24 md:py-32 relative bg-dark-charcoal min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="Documentation & Terms" 
          subtitle="Copyright and legal information" 
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-stone-black p-8 md:p-12 rounded-2xl border border-antique-gold/20 shadow-xl space-y-8 font-inter text-muted-sandstone leading-relaxed"
        >
          <div className="text-center md:text-left space-y-2 border-b border-antique-gold/20 pb-8">
            <h3 className="font-cinzel text-2xl text-antique-gold mb-2 uppercase tracking-widest">ASTITVA PRAKASHAN</h3>
            <p>Parijat Heights, Bilaspur, Chhattisgarh 495001 India</p>
            <p>Published by Astitva Prakashan 2026</p>
            <p className="font-bold text-warm-ivory mt-4">Copyright &copy; Prajwal Patil</p>
          </div>
          
          <div className="space-y-6 pt-4">
            <p>
              The views and opinions expressed in this book are the author's own.
            </p>
            <p>
              The facts contained herein were reported to be true as on the date of publication by the author to the publishers of the book, and the publishers are not in any way liable for their accuracy or veracity.
            </p>
            <p>
              All rights reserved. No part of this publication may be reproduced, transmitted, or stored in a retrieval system in any form or by any means without the written permission of the publisher.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
