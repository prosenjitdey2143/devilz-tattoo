import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../assets/assets';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.15, 0]);

  const stats = [
    { label: "Years Experience", value: "20+" },
    { label: "Tattoos Crafted", value: "50K+" },
    { label: "Global Studios", value: "5" },
    { label: "Award Wins", value: "12" },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen py-40 flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Cinematic Video */}
      <motion.div 
        style={{ opacity: videoOpacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale"
        >
          <source src={ASSETS.videos.processVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ y: textY, opacity }}
          className="flex flex-col items-center text-center space-y-12"
        >
          <span className="text-accent text-xs uppercase tracking-[0.5em] font-bold">The Legacy</span>
          
          <h2 className="text-6xl md:text-9xl font-bebas leading-none tracking-tighter max-w-4xl">
            MORE THAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">TATTOOS</span>
          </h2>

          <p className="max-w-2xl text-soft-white/60 text-lg md:text-xl font-light leading-relaxed">
            At Devilz Tattooz, we don't just ink skin; we immortalize stories. Founded with a vision to redefine the tattoo experience, we blend hygiene excellence with unmatched artistic mastery.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 w-full max-w-5xl">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-4xl md:text-6xl font-bebas text-white tracking-tighter">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">{stat.label}</span>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </section>
  );
};
