import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Highlight() {
  return (
    <section className="py-32 relative overflow-hidden bg-animated-gradient">
      {/* Decorative Separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-brand-yellow)]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel-yellow rounded-3xl p-12 md:p-20 text-center border border-[var(--color-brand-yellow)]/30 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Motion Accents */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-64 h-64 border border-[var(--color-brand-yellow)]/20 rounded-full opacity-50"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -left-32 w-80 h-80 border border-[var(--color-brand-yellow)]/10 rounded-full opacity-30"
          />

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-[var(--color-brand-yellow)] fill-[var(--color-brand-yellow)] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              The Standard for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-yellow)] to-yellow-200">
                Modern Architectural Glass Solutions
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              We combine premium quality materials with expert craftsmanship to deliver durable installations that redefine spaces across Rajasthan.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold tracking-wider uppercase text-[var(--color-brand-yellow)]">
              <span className="px-4 py-2 rounded-full border border-[var(--color-brand-yellow)]/30 bg-black/20 backdrop-blur-sm">Premium Quality Materials</span>
              <span className="px-4 py-2 rounded-full border border-[var(--color-brand-yellow)]/30 bg-black/20 backdrop-blur-sm">Expert Craftsmanship</span>
              <span className="px-4 py-2 rounded-full border border-[var(--color-brand-yellow)]/30 bg-black/20 backdrop-blur-sm">Durable Installations</span>
            </div>

            {/* Hidden SEO Keywords */}
            <div className="sr-only">
              best glass work in Jaipur, professional aluminium fabricators Jaipur, modern glass solutions Rajasthan
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
