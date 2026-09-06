import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { Instagram, Video, ExternalLink, Play } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  url: string;
  caption: string;
}

const videos: VideoItem[] = [
  {
    id: 'Dc6bhF3IahP',
    title: 'The Philosophy of Defeat in Victory',
    url: 'https://www.instagram.com/reel/Dc6bhF3IahP/',
    caption: 'Prajwal Patil shares the core contemplation behind ancient Bharat and Samrat Vikramaditya.',
  },
  {
    id: 'Dc6gw0ftDiK',
    title: 'Unveiling the New Launch Edition',
    url: 'https://www.instagram.com/reel/Dc6gw0ftDiK/',
    caption: 'A personal message from the author celebrating the expanded release of the novel.',
  },
  {
    id: 'DcxD2vPjJsh',
    title: 'Echoes of Ujjayini & Dharma',
    url: 'https://www.instagram.com/reel/DcxD2vPjJsh/',
    caption: 'Exploring the eternal weight of Dharma and royal solitary sacrifice.',
  },
];

export default function AuthorVideos() {
  return (
    <section id="videos" className="py-24 md:py-32 bg-stone-black relative overflow-hidden border-b border-antique-gold/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-royal-navy/20 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-antique-gold/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-antique-gold/30 bg-dark-charcoal text-soft-gold text-xs font-cinzel tracking-widest uppercase shadow-md"
          >
            <Video size={14} className="text-antique-gold" />
            <span>Author's Chronicles • Watch On Instagram</span>
          </motion.div>
        </div>

        <SectionHeading
          title="Insights from the Author"
          subtitle="Watch author Prajwal Patil dive into the philosophy, mythological inspirations, and newly launched edition of Victory's Hidden Defeat."
        />

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-dark-charcoal/90 rounded-2xl border border-antique-gold/25 p-4 flex flex-col justify-between shadow-2xl hover:border-antique-gold/50 transition-all duration-300 group"
            >
              {/* Header with Title and Instagram Link */}
              <div className="flex items-center justify-between gap-3 mb-3 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-antique-gold/10 border border-antique-gold/30 flex items-center justify-center text-antique-gold">
                    <Play size={12} fill="#C5A059" />
                  </div>
                  <h3 className="font-cinzel text-sm font-semibold text-warm-ivory group-hover:text-soft-gold transition-colors truncate max-w-[200px]">
                    {video.title}
                  </h3>
                </div>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-sandstone hover:text-soft-gold transition-colors p-1"
                  title="Open reel on Instagram"
                >
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Instagram Embedded Frame */}
              <div className="relative w-full rounded-xl overflow-hidden bg-stone-black border border-antique-gold/20 flex items-center justify-center min-h-[460px]">
                <iframe
                  src={`https://www.instagram.com/reel/${video.id}/embed/`}
                  title={video.title}
                  className="w-full h-[460px] border-none bg-white rounded-xl"
                  loading="lazy"
                  allow="encrypted-media"
                />
              </div>

              {/* Caption & Profile Link */}
              <div className="mt-4 px-2 pt-3 border-t border-antique-gold/15 flex flex-col gap-2">
                <p className="font-inter text-xs text-muted-sandstone leading-relaxed">
                  {video.caption}
                </p>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-cinzel tracking-wider text-antique-gold hover:text-soft-gold transition-colors mt-1 font-semibold"
                >
                  <Instagram size={13} />
                  <span>VIEW ON @VIKRAM_SAHITYA_04</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Follow Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-dark-charcoal via-stone-black to-dark-charcoal border border-antique-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 p-[2px] shrink-0">
              <div className="w-full h-full bg-stone-black rounded-full flex items-center justify-center text-warm-ivory">
                <Instagram size={22} />
              </div>
            </div>
            <div>
              <h4 className="font-cinzel text-base md:text-lg font-bold text-warm-ivory">
                Join the Author's Literary Community
              </h4>
              <p className="font-inter text-xs md:text-sm text-muted-sandstone">
                Follow <strong className="text-antique-gold">@vikram_sahitya_04</strong> for behind-the-scenes discussions, reader interactions, and upcoming works.
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com/vikram_sahitya_04"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-duo-gold px-6 py-3 font-cinzel text-xs tracking-widest uppercase font-bold flex items-center gap-2 whitespace-nowrap shadow-lg shrink-0"
          >
            <Instagram size={15} />
            <span>FOLLOW ON INSTAGRAM</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
