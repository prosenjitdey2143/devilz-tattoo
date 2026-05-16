import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '../assets/assets';

const services = [
  { id: "01", title: "Tattooing", desc: "Custom artistic expressions tailored to your vision.", image: ASSETS.images.shivaTattoo },
  { id: "02", title: "Cover-Up", desc: "Transform old ink into new masterpieces.", image: ASSETS.images.portrait },
  { id: "03", title: "Cosmetic", desc: "Enhance your natural beauty with precision.", image: ASSETS.images.serviceCosmetic },
  { id: "04", title: "SMP", desc: "Scalp Micro Pigmentation for a confident look.", image: ASSETS.images.serviceSmp },
  { id: "05", title: "Piercing", desc: "Safe, professional piercing services.", image: ASSETS.images.servicePiercing },
];

export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-20 md:py-32 bg-[#F5F5F5] rounded-t-[5vw] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 gap-8 text-center md:text-left">
          <div>
            <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold">What We Do</span>
            <h2 className="text-7xl md:text-9xl font-bebas text-[#050505] leading-none mt-4">SERVICES</h2>
          </div>
          <p className="max-w-xs text-[#050505]/60 text-sm uppercase tracking-widest font-medium mx-auto md:mx-0">
            From conceptual art to technical excellence, we offer the full spectrum of body art.
          </p>
        </div>

        <div className="flex flex-col border-t border-[#050505]/10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-[#050505]/10 py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between cursor-pointer gap-6 md:gap-0"
            >
              <div className="flex items-center gap-8 md:gap-16 relative z-10">
                <span className="text-xl md:text-2xl font-bebas text-accent">{service.id}</span>
                <h3 className="text-5xl md:text-7xl font-bebas text-[#050505] transition-transform duration-500 md:group-hover:translate-x-4">
                  {service.title}
                </h3>
              </div>

              {/* Mobile Image Container */}
              <div className="md:hidden w-full aspect-video rounded-xl overflow-hidden relative z-10 shadow-lg">
                <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
              </div>

              <div className="relative z-10 md:max-w-xs opacity-70 md:opacity-40 md:group-hover:opacity-100 transition-opacity">
                <p className="text-[#050505] text-base md:text-sm tracking-wide font-medium">{service.desc}</p>
              </div>

              {/* Hover Image Reveal (Desktop) */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                    className="absolute right-[20%] top-1/2 -translate-y-1/2 w-64 h-80 pointer-events-none z-20 rounded-2xl overflow-hidden shadow-2xl hidden lg:block"
                  >
                    <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Red Line Highlight */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-accent z-10"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
