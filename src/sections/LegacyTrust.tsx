import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Star, Globe, Users, Trophy } from 'lucide-react';
import { ASSETS } from '../assets/assets';

gsap.registerPlugin(ScrollTrigger);

const medallions = [
  {
    icon: <Trophy className="w-10 h-10 md:w-14 md:h-14" />,
    title: "GUINNESS RECORD",
    subtitle: "RELATED WORK",
    color: "from-[#BF953F] via-[#FCF6BA] to-[#B38728]" // Gold
  },
  {
    icon: <Award className="w-10 h-10 md:w-14 md:h-14" />,
    title: "20+ YEARS",
    subtitle: "OF EXCELLENCE",
    color: "from-[#E2E2E2] via-[#FFFFFF] to-[#999999]" // Silver
  },
  {
    icon: <Star className="w-10 h-10 md:w-14 md:h-14" />,
    title: "AWARD WINNING",
    subtitle: "ARTISTS",
    color: "from-[#BF953F] via-[#FCF6BA] to-[#B38728]" // Gold
  },
  {
    icon: <Globe className="w-10 h-10 md:w-14 md:h-14" />,
    title: "GLOBAL",
    subtitle: "STUDIOS",
    color: "from-[#E2E2E2] via-[#FFFFFF] to-[#999999]" // Silver
  },
  {
    icon: <Users className="w-10 h-10 md:w-14 md:h-14" />,
    title: "CELEBRITY",
    subtitle: "TRUSTED",
    color: "from-[#BF953F] via-[#FCF6BA] to-[#B38728]" // Gold
  }
];

const stats = [
  { value: "50K+", label: "Tattoos Crafted" },
  { value: "100+", label: "Global Awards" },
  { value: "100%", label: "Hygiene Protocol" },
  { value: "5", label: "Art Studios" }
];

export const LegacyTrust = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Text Parallax
      gsap.to(".legacy-bg-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        x: -400,
        ease: "none"
      });

      // Medallions reveal
      gsap.from(".badge-container", {
        scrollTrigger: {
          trigger: ".badges-row",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 1.2,
        ease: "back.out(1.7)"
      });

      // Stats reveal
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="legacy"
      ref={containerRef}
      className="relative bg-[#050505] overflow-hidden py-24 md:py-40"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-[20%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent rotate-[-5deg]" />
        
        {/* Parallax Background Text */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200vw] whitespace-nowrap opacity-[0.02] select-none">
          <h2 className="legacy-bg-text text-[35vh] font-black uppercase tracking-tighter">
            TRUST — AUTHORITY — LEGACY — TRUST — AUTHORITY — LEGACY
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 1. Narrative Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32 md:mb-48">
          <div className="lg:col-span-7">
            <span className="text-accent text-xs md:text-sm uppercase tracking-[0.6em] font-bold block mb-8">
              ESTABLISHED 2003
            </span>
            <h2 className="text-6xl md:text-[8.5vw] font-black leading-[0.85] tracking-[2px] uppercase mb-12">
              MORE THAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30">
                TATTOOS
              </span>
            </h2>
            <p className="max-w-3xl text-soft-white/60 text-xl md:text-3xl font-light leading-relaxed">
              Founded by <span className="text-white font-medium">Lokesh Verma</span> with a vision to redefine the tattoo experience, Devilz Tattooz has grown into a global sanctuary for artistry. We blend <span className="text-accent/80">hospital-grade hygiene</span> with museum-quality mastery.
            </p>
          </div>
          
          {/* Pinterest-style Cinematic Visual */}
          <div className="lg:col-span-5 relative group">
            <motion.div 
              style={{ y: parallaxY }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
            >
              <img 
                src={ASSETS.images.artistWorking1} 
                alt="Legacy of Art" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Floating Badge Overlay */}
              <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-white/5 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold block mb-1">Legacy of Art</span>
                <span className="text-lg font-black tracking-[2px] text-white uppercase">Redefining Excellence</span>
              </div>
            </motion.div>

            {/* Decorative Offset Text */}
            <div className="absolute -top-10 -right-10 text-[10vw] font-black text-white/[0.03] select-none pointer-events-none">
              2003
            </div>
          </div>
        </div>

        {/* 2. Metallic Award Medallions */}
        <div className="badges-row grid grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 items-start mb-32 md:mb-48 max-w-7xl mx-auto">
          {medallions.map((award, i) => (
            <div key={i} className="badge-container flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 md:w-44 md:h-44 mb-8">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${award.color} p-[1.5px] shadow-[0_0_40px_rgba(0,0,0,0.5)]`}>
                  <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-40" />
                    <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-700">
                      {award.icon}
                    </div>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </div>
                <div className={`absolute inset-[-10px] rounded-full bg-gradient-to-br ${award.color} blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
              </div>
              <div className="space-y-1">
                <span className="block text-xs md:text-sm font-black tracking-[0.3em] text-white/90 uppercase">{award.title}</span>
                <span className="block text-[10px] font-medium tracking-[0.4em] text-accent uppercase opacity-70">{award.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Core Statistics Grid */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 max-w-6xl mx-auto border-t border-white/5 pt-20">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item flex flex-col items-center text-center">
              <div className="text-5xl md:text-8xl font-black tracking-[2px] text-white mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-accent font-bold opacity-60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Final Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};
