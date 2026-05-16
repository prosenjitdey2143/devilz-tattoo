import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ASSETS } from '../assets/assets';

const portfolioItems = [
  { type: 'image', src: ASSETS.images.shivaTattoo, title: "Sacred Spirit", size: "w-[400px] md:w-[600px]" },
  { type: 'video', src: ASSETS.videos.inkVideo, title: "Ink Motion", size: "w-[300px] md:w-[450px]" },
  { type: 'image', src: ASSETS.images.realisticTattooV2, title: "Portraiture", size: "w-[350px] md:w-[500px]" },
  { type: 'image', src: ASSETS.images.sleeveTattoo, title: "The Flow", size: "w-[450px] md:w-[700px]" },
  { type: 'video', src: ASSETS.videos.processVideo, title: "The Process", size: "w-[400px] md:w-[600px]" },
  { type: 'image', src: ASSETS.images.colorTattoo, title: "Chrome", size: "w-[300px] md:w-[450px]" },
  { type: 'image', src: ASSETS.images.geometricTattoo, title: "Geometry", size: "w-[400px] md:w-[550px]" },
];

export const MarqueeSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2;
    
    const animation = gsap.to(marquee, {
      x: -totalWidth,
      duration: 45,
      ease: "none",
      repeat: -1,
    });

    return () => animation.kill();
  }, []);

  return (
    <section id="portfolio" className="relative py-40 bg-[#050505] overflow-hidden border-y border-white/5">
      {/* Absolute Header Overlay */}
      <div className="container mx-auto px-6 mb-24 relative z-20 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent text-xs uppercase tracking-[0.8em] font-black mb-6"
        >
          Signature Media
        </motion.span>
        <h2 className="text-7xl md:text-[12vw] font-black tracking-[2px] text-white leading-none uppercase select-none">
            CINEMATIC <br />
            <span className="opacity-10 italic tracking-[2px]">EXHIBIT.</span>
        </h2>
      </div>

      {/* Mixed-Media Cinematic Marquee */}
      <div className="relative z-10">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div ref={marqueeRef} className="flex items-center gap-6 md:gap-12 px-6">
            {[...portfolioItems, ...portfolioItems].map((item, i) => (
              <motion.div 
                key={i} 
                className={`${item.size} aspect-[4/5] md:aspect-video shrink-0 group relative overflow-hidden rounded-sm bg-[#111] border border-white/10`}
                whileHover={{ scale: 0.98, transition: { duration: 0.5 } }}
              >
                {/* Media Content */}
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000"
                  />
                ) : (
                  <img 
                    src={item.src} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110 transition-all duration-1000" 
                    alt={item.title} 
                  />
                )}
                
                {/* Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute bottom-10 left-10">
                    <span className="text-[10px] uppercase tracking-[2px] text-accent font-black block mb-2">
                        {item.type === 'video' ? 'Behind The Scenes' : 'Masterpiece'}
                    </span>
                    <h4 className="text-4xl font-bebas text-white tracking-[2px] uppercase">{item.title}</h4>
                  </div>
                </div>

                {/* Subtle Cinematic Bars */}
                <div className="absolute top-0 left-0 w-full h-12 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center px-8">
                    <span className="text-[8px] uppercase tracking-[2px] text-white/40 font-bold">DVZ.PRO.REELS</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Vertical Background Text */}
      <div className="absolute top-0 right-10 h-full flex flex-col justify-between py-20 pointer-events-none opacity-[0.03] select-none z-0">
        {[...Array(5)].map((_, i) => (
            <span key={i} className="text-9xl font-black rotate-90 origin-right uppercase tracking-[2px]">DEVILZ</span>
        ))}
      </div>

      {/* Footer Branded Bar */}
      <div className="container mx-auto px-6 mt-24 flex flex-col md:flex-row justify-between items-center gap-8 opacity-30">
        <div className="flex items-center gap-8">
            <span className="text-[10px] uppercase tracking-[2px] font-black">Collection v.24</span>
            <div className="w-12 h-[1px] bg-white" />
            <span className="text-[10px] uppercase tracking-[2px] font-black">All Media Copyrighted</span>
        </div>
        <div className="flex items-center gap-12">
            <div className="flex flex-col items-end">
                <span className="text-[8px] uppercase tracking-[2px] font-bold">Location</span>
                <span className="text-[10px] uppercase tracking-[2px] font-black">New Delhi, IN</span>
            </div>
            <div className="h-10 w-[1px] bg-white/20" />
            <div className="flex flex-col items-end">
                <span className="text-[8px] uppercase tracking-[2px] font-bold">Status</span>
                <span className="text-[10px] uppercase tracking-[2px] font-black text-accent">Booking Open</span>
            </div>
        </div>
      </div>

    </section>
  );
};
