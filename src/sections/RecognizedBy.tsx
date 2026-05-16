import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
  { name: 'GUINNESS WORLD RECORD', lines: ['GUINNESS', 'WORLD', 'RECORD.'], className: 'text-sm md:text-xl font-bold tracking-tight leading-[0.9] font-sans' },
  { name: 'GQ', lines: ['GQ'], className: 'text-3xl md:text-5xl font-black tracking-tighter leading-none font-sans' },
  { name: 'Forbes', lines: ['Forbes'], className: 'text-2xl md:text-4xl font-serif tracking-tighter leading-none italic font-bold' },
  { name: 'INDIA TODAY', lines: ['INDIA', 'TODAY'], className: 'text-sm md:text-xl font-medium tracking-widest leading-[1] font-sans' },
  { name: 'CELEBRITY RECOGNITION', lines: ['CELEBRITY', 'RECOGNITION'], className: 'text-sm md:text-xl font-black tracking-tighter leading-[0.85] font-sans' },
  { name: 'THE HINDU', lines: ['THE HINDU'], className: 'text-xl md:text-3xl font-serif tracking-widest font-bold uppercase' },
  { name: 'ECONOMIC TIMES', lines: ['ECONOMIC', 'TIMES'], className: 'text-sm md:text-xl font-bold tracking-tight leading-[1] font-sans' },
  { name: 'GLOBAL AUTHORITY', lines: ['GLOBAL', 'AUTHORITY'], className: 'text-sm md:text-xl font-black tracking-[0.2em] leading-[0.9] font-sans' },
];

export const RecognizedBy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  useEffect(() => {
    const m = marqueeRef.current;

    if (m) {
      gsap.to(m, {
        x: "-50%",
        duration: 50,
        repeat: -1,
        ease: "none",
      });
    }

    const ctx = gsap.context(() => {
      gsap.from(".recognized-content > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  const MarqueeItem = ({ item }: { item: any }) => (
    <div className="flex items-center gap-16 md:gap-32 px-10 md:px-16 group shrink-0">
      <div className={`${item.className} text-white/40 group-hover:text-white transition-all duration-500 flex flex-col items-start hover:scale-105 cursor-default`}>
        {item.lines.map((line: string, idx: number) => (
          <span key={idx}>{line}</span>
        ))}
      </div>
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#8B0000] shadow-[0_0_15px_rgba(139,0,0,0.8)] opacity-20 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
    </div>
  );

  return (
    <section 
      id="awards"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-b border-white/5"
    >
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-accent/5 rounded-full blur-[150px] opacity-20" />
      </div>

      {/* Top Content */}
      <div className="container mx-auto px-6 relative z-10 mb-20 md:mb-32 text-center max-w-4xl recognized-content">
        <motion.span 
          style={{ opacity, y }}
          className="inline-block text-[10px] md:text-xs uppercase tracking-[0.5em] text-accent font-bold mb-8"
        >
          GLOBAL RECOGNITION
        </motion.span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-none">
          CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">MASTERPIECES</span> SINCE 2003
        </h2>
        <p className="text-soft-white/60 text-lg md:text-xl font-light leading-relaxed">
          A symbol of technical mastery and artistic excellence, Devilz Tattooz has been featured across major global publications. From pioneering hygiene standards to winning international accolades, our work continues to define the pinnacle of tattoo artistry in India and beyond.
        </p>
      </div>

      {/* Single Marquee Row */}
      <div className="relative z-10">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div ref={marqueeRef} className="flex items-center">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <MarqueeItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-64 z-20 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-64 z-20 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};
