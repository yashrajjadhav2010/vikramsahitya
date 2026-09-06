import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, BookOpen } from 'lucide-react';

interface ChapterOneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChapterOneModal({ isOpen, onClose }: ChapterOneModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-5xl bg-dark-charcoal border border-antique-gold/30 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 flex flex-col my-auto max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-antique-gold/20 bg-stone-black/70">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-antique-gold/10 border border-antique-gold/30 flex items-center justify-center text-antique-gold">
                  <BookOpen size={16} />
                </div>
                <div>
                  <h3 className="font-cinzel text-base md:text-lg font-bold text-warm-ivory tracking-wide">
                    Victory's Hidden Defeat — Chapter One
                  </h3>
                  <p className="font-inter text-xs text-muted-sandstone">
                    Official New Edition Preview • By Prajwal Patil
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://drive.google.com/file/d/1wqtHLhswDWAahb5NRpcebmu3N_oJlGXq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-cinzel tracking-wider text-antique-gold hover:text-soft-gold border border-antique-gold/30 hover:border-antique-gold rounded-lg transition-colors"
                >
                  <span>Open in Drive</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-muted-sandstone hover:text-warm-ivory hover:bg-stone-black transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Document Frame */}
            <div className="relative flex-1 w-full bg-stone-black min-h-[500px] md:min-h-[640px]">
              <iframe
                src="https://drive.google.com/file/d/1wqtHLhswDWAahb5NRpcebmu3N_oJlGXq/preview"
                title="Victory's Hidden Defeat - Chapter 1"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[500px] md:min-h-[640px] border-none bg-white"
                allow="autoplay"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-3 border-t border-antique-gold/20 bg-stone-black/90 gap-3 text-center sm:text-left">
              <p className="font-inter text-xs text-muted-sandstone">
                Enjoyed the prologue? The complete new edition is now shipping across India.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://amzn.in/d/04qmUrKx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-duo-gold px-4 py-1.5 font-cinzel text-xs tracking-wider whitespace-nowrap"
                >
                  ORDER ON AMAZON
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
