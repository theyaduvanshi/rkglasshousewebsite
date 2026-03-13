import { motion } from 'motion/react';
import { LayoutGrid, Maximize, Layers, Shield, Square, Columns, Paintbrush } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "U.P.V.C Window Gate & Partition",
      desc: "Durable and energy-efficient UPVC window installation Jaipur for modern homes.",
      icon: <LayoutGrid size={32} className="text-[var(--color-brand-yellow)]" />
    },
    {
      title: "Aluminium Partition & Window Gate",
      desc: "Professional aluminium partition work Jaipur for commercial and residential spaces.",
      icon: <Columns size={32} className="text-[var(--color-brand-yellow)]" />
    },
    {
      title: "A.C.P Glazing Work",
      desc: "High-quality ACP glazing work Jaipur enhancing building exteriors.",
      icon: <Layers size={32} className="text-[var(--color-brand-yellow)]" />
    },
    {
      title: "12mm Toughened Glass Fitting Work",
      desc: "Secure and elegant toughened glass fitting Jaipur for safety and style.",
      icon: <Shield size={32} className="text-[var(--color-brand-yellow)]" />
    },
    {
      title: "P.V.C Wall Panel",
      desc: "Stylish and low-maintenance PVC wall paneling solutions.",
      icon: <Square size={32} className="text-[var(--color-brand-yellow)]" />
    },
    {
      title: "Steel Railing Work",
      desc: "Modern glass railing installation combined with sturdy steel frameworks.",
      icon: <Maximize size={32} className="text-[var(--color-brand-yellow)]" />
    },
    {
      title: "Glass Designing Work",
      desc: "Custom decorative glass designing Jaipur for unique interior aesthetics.",
      icon: <Paintbrush size={32} className="text-[var(--color-brand-yellow)]" />
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[var(--color-brand-black)]">
      {/* Decorative Separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-brand-yellow)]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-yellow)] uppercase mb-3">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium Glass & Aluminium Solutions
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We provide a comprehensive range of architectural glass and aluminium services, tailored to meet the highest standards of quality and design.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-[var(--color-brand-yellow)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-yellow)]/0 to-[var(--color-brand-yellow)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl glass-panel-yellow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[var(--color-brand-yellow)]/20">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--color-brand-yellow)] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
