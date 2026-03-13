import { motion } from 'motion/react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[var(--color-brand-yellow)] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-[var(--color-brand-yellow)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric Shapes */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[15%] w-64 h-64 border border-white/5 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[10%] w-48 h-48 border border-[var(--color-brand-yellow)]/10 rounded-lg transform rotate-45"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-yellow mb-6 border border-[var(--color-brand-yellow)]/30">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-yellow)] animate-ping"></span>
              <span className="text-[var(--color-brand-yellow)] text-sm font-semibold tracking-wider uppercase">
                Trusted Glass & Aluminium Experts with 11+ Years of Experience
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              RK Glass <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-yellow)] to-yellow-200">
                House
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl font-light leading-relaxed">
              Experts in Glass, Aluminium & Modern Architectural Solutions in Jaipur
            </p>

            {/* SEO Keywords hidden visually but available for screen readers or subtle display */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['glass work in Jaipur', 'aluminium partition work Jaipur', 'toughened glass installation Jaipur', 'modern glass solutions Jaipur'].map((keyword, idx) => (
                <span key={idx} className="text-xs text-gray-500 border border-gray-800 rounded-full px-3 py-1">
                  {keyword}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleScroll('#contact')}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--color-brand-yellow)] text-black font-bold text-lg hover:bg-[var(--color-brand-yellow-dark)] transition-all glow-yellow-strong"
              >
                <PhoneCall size={20} className="group-hover:animate-bounce" />
                Call Now
              </button>
              
              <button 
                onClick={() => handleScroll('#contact')}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-panel text-white font-bold text-lg hover:bg-white/10 transition-all border border-white/20 hover:border-[var(--color-brand-yellow)]/50"
              >
                Get a Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Glass UI Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main Glass Panel */}
              <div className="absolute inset-0 glass-panel rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-brand-yellow)] to-yellow-600 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-black font-black text-2xl">RK</span>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 w-1/3 bg-white/20 rounded-full"></div>
                  <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                  <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                </div>

                <div className="mt-auto pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-xl">11+ Years</p>
                      <p className="text-gray-400 text-sm">Experience</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-[var(--color-brand-yellow)] flex items-center justify-center">
                      <span className="text-[var(--color-brand-yellow)] font-bold">100%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 glass-panel-yellow p-6 rounded-2xl border border-[var(--color-brand-yellow)]/30 shadow-xl"
              >
                <p className="text-[var(--color-brand-yellow)] font-bold text-lg">Premium</p>
                <p className="text-white text-sm">Quality Materials</p>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-2xl border border-white/10 shadow-xl"
              >
                <p className="text-white font-bold text-lg">Expert</p>
                <p className="text-gray-400 text-sm">Craftsmanship</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
