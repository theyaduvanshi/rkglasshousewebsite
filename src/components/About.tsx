import { motion } from 'motion/react';
import { CheckCircle2, Award, ShieldCheck, ThumbsUp } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <Award className="text-[var(--color-brand-yellow)]" size={24} />, title: "11+ Years Experience", desc: "Proven track record in glass and aluminium work." },
    { icon: <ShieldCheck className="text-[var(--color-brand-yellow)]" size={24} />, title: "High-Quality Materials", desc: "We use only the best materials for durability." },
    { icon: <CheckCircle2 className="text-[var(--color-brand-yellow)]" size={24} />, title: "Skilled Craftsmanship", desc: "Expert technicians ensuring flawless execution." },
    { icon: <ThumbsUp className="text-[var(--color-brand-yellow)]" size={24} />, title: "Customer Satisfaction", desc: "Reliable installations that exceed expectations." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--color-brand-gray)]">
      {/* Decorative Separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-brand-yellow)]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-yellow)] uppercase mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Trusted Glass Contractor in Jaipur
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                At RK Glass House, we bring over a decade of expertise to every project. Specializing in premium glass partition installation, aluminium work services Jaipur, and custom mirror installation services, we are dedicated to transforming spaces with modern architectural solutions.
              </p>
              <p>
                Whether it's toughened glass fitting Jaipur for commercial buildings or elegant residential glass designs, our skilled craftsmanship ensures precision and reliability. We pride ourselves on using high-quality materials to deliver durable and aesthetically pleasing results.
              </p>
            </div>

            {/* Hidden SEO Keywords */}
            <div className="sr-only">
              glass contractor in Jaipur, aluminium work services Jaipur, glass partition installation, toughened glass fitting Jaipur, mirror installation services
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[var(--color-brand-yellow)]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full glass-panel-yellow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
