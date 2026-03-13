import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Homeowner",
      text: "RK Glass House transformed our living room with their stunning glass partition work. The quality of workmanship and attention to detail were exceptional. Highly professional service from start to finish."
    },
    {
      name: "Amit Verma",
      role: "Business Owner",
      text: "We hired them for aluminium partition work in our new office in Jaipur. They delivered on time, and the durable installations have given our workspace a modern, premium feel. Highly recommended."
    },
    {
      name: "Sneha Gupta",
      role: "Interior Designer",
      text: "As an interior designer, I need reliable partners. RK Glass House consistently provides top-tier toughened glass fitting and decorative glass designing. Their expert craftsmanship is unmatched."
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[var(--color-brand-gray)]">
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
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-yellow)] uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Hear from our satisfied customers who have experienced our premium glass and aluminium services.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-[var(--color-brand-yellow)]/50 transition-all duration-300 relative group"
            >
              <Quote size={48} className="text-[var(--color-brand-yellow)] opacity-20 absolute top-6 right-6 group-hover:opacity-40 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-brand-yellow)] flex items-center justify-center text-black font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-[var(--color-brand-yellow)] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
