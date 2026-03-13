import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[var(--color-brand-black)]">
      {/* Decorative Separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-brand-yellow)]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-yellow)] uppercase mb-3">Get in Touch</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Start Your Project?
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed max-w-xl">
              Contact us today for a free consultation and quote. We are your trusted partner for premium glass and aluminium solutions in Jaipur.
            </p>

            <div className="space-y-8">
              <a 
                href="tel:+918209727468" 
                className="group flex items-center gap-6 p-6 rounded-2xl glass-panel border border-white/10 hover:border-[var(--color-brand-yellow)] transition-all duration-300 hover:bg-white/5"
              >
                <div className="w-16 h-16 rounded-full glass-panel-yellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-[var(--color-brand-yellow)]/30">
                  <Phone size={28} className="text-[var(--color-brand-yellow)] group-hover:animate-bounce" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Call Us Directly</p>
                  <p className="text-2xl font-bold text-white group-hover:text-[var(--color-brand-yellow)] transition-colors">+91 8209727468</p>
                </div>
              </a>

              <a 
                href="mailto:rkglasshousemuhana@gmail.com" 
                className="group flex items-center gap-6 p-6 rounded-2xl glass-panel border border-white/10 hover:border-[var(--color-brand-yellow)] transition-all duration-300 hover:bg-white/5"
              >
                <div className="w-16 h-16 rounded-full glass-panel-yellow flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-[var(--color-brand-yellow)]/30">
                  <Mail size={28} className="text-[var(--color-brand-yellow)]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-xl font-bold text-white group-hover:text-[var(--color-brand-yellow)] transition-colors break-all">rkglasshousemuhana@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 rounded-2xl glass-panel border border-white/10">
                <div className="w-16 h-16 rounded-full glass-panel-yellow flex items-center justify-center border border-[var(--color-brand-yellow)]/30 shrink-0">
                  <MapPin size={28} className="text-[var(--color-brand-yellow)]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Visit Us</p>
                  <p className="text-lg font-bold text-white">
                    RK Glass House<br />
                    <span className="text-gray-300 font-normal">Shop no. 2, Plot no. 7, Mandi Rd, Near SMS Colony, Muhana, Rajasthan 302029</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Hidden SEO Keywords */}
            <div className="sr-only">
              contact glass contractor Jaipur, get quote for aluminium work Jaipur, glass installation services Jaipur
            </div>
          </motion.div>

          {/* Call to Action Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-full min-h-[500px] rounded-3xl overflow-hidden glass-panel border border-[var(--color-brand-yellow)]/20 p-12 flex flex-col justify-center items-center text-center"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-brand-yellow)] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
            </div>

            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-[var(--color-brand-yellow)] flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(255,215,0,0.3)]">
                <Phone size={40} className="text-black animate-pulse" />
              </div>
              
              <h4 className="text-4xl font-bold text-white mb-6">Get a Free Quote Today</h4>
              <p className="text-gray-300 text-lg mb-10 max-w-md mx-auto">
                Our experts are ready to discuss your project requirements and provide a detailed estimate.
              </p>
              
              <a 
                href="tel:+918209727468"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[var(--color-brand-yellow)] text-black font-bold text-xl hover:bg-[var(--color-brand-yellow-dark)] transition-all glow-yellow-strong"
              >
                Call Now
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
