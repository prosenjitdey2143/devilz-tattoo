import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Star, Globe, Users, Trophy } from 'lucide-react';
import { ASSETS } from '../assets/assets';

gsap.registerPlugin(ScrollTrigger);

const awards = [
  {
    icon: <Trophy className="w-8 h-8 md:w-12 md:h-12" />,
    title: "GUINNESS WORLD RECORD",
    subtitle: "RELATED WORK",
    color: "from-[#BF953F] via-[#FCF6BA] to-[#B38728]" // Gold
  },
  {
    icon: <Award className="w-8 h-8 md:w-12 md:h-12" />,
    title: "20+ YEARS",
    subtitle: "EXPERIENCE",
    color: "from-[#E2E2E2] via-[#FFFFFF] to-[#999999]" // Silver
  },
  {
    icon: <Star className="w-8 h-8 md:w-12 md:h-12" />,
    title: "AWARD WINNING",
    subtitle: "ARTISTS",
    color: "from-[#BF953F] via-[#FCF6BA] to-[#B38728]" // Gold
  },
  {
    icon: <Globe className="w-8 h-8 md:w-12 md:h-12" />,
    title: "INTERNATIONAL",
    subtitle: "STUDIOS",
    color: "from-[#E2E2E2] via-[#FFFFFF] to-[#999999]" // Silver
  },
  {
    icon: <Users className="w-8 h-8 md:w-12 md:h-12" />,
    title: "CELEBRITY",
    subtitle: "TRUSTED",
    color: "from-[#BF953F] via-[#FCF6BA] to-[#B38728]" // Gold
  }
];

const marqueeItems = [
  "Forbes", "GQ India", "India Today", "CELEBRITY RECOGNITION", "GLOBAL AUTHORITY", "INTERNATIONAL MEDIA"
];

export const TrustAwards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
        y: 100,
        opacity: 0,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "power4.out"
      });

      // Badges stagger reveal
      gsap.from(".award-badge", {
        scrollTrigger: {
          trigger: ".awards-row",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 1.2,
        ease: "back.out(1.7)"
      });

      // Marquee animation
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          duration: 30,
          repeat: -1,
          ease: "none"
        });
      }

      // Light leaks movement
      gsap.to(".light-leak", {
        x: "100%",
        y: "50%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-28 md:py-36 bg-[#050505] overflow-hidden"
    >
      {/* Background Visuals */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background Cinematic Video */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={ASSETS.videos.inkVideo} type="video/mp4" />
          </video>
        </div>

        {/* Gradients & Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(184,134,11,0.05)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(184,134,11,0.05)_0%,transparent_40%)]" />
        
        {/* Animated Light Leaks */}
        <div className="light-leak absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-accent/5 to-transparent blur-[120px] opacity-30 rotate-12" />
        
        {/* Smoke Effect */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ 
              x: [-20, 20], 
              y: [-10, 10],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay opacity-10"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Title */}
        <div className="text-center mb-20 md:mb-32">
          <h2 
            ref={titleRef}
            className="text-4xl sm:text-6xl md:text-[8vw] font-black tracking-tighter uppercase leading-none"
            style={{
              background: 'linear-gradient(to bottom, #E2E2E2 0%, #BF953F 50%, #B38728 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 10px 30px rgba(184,134,11,0.2)'
            }}
          >
            TRUST & AWARDS
          </h2>
        </div>

        {/* Awards Row */}
        <div className="awards-row grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-8 items-start max-w-7xl mx-auto mb-32">
          {awards.map((award, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="award-badge flex flex-col items-center text-center group cursor-default"
            >
              {/* Medallion */}
              <div className="relative w-32 h-32 md:w-44 md:h-44 mb-6">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${award.color} p-[1px] shadow-2xl`}>
                  <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center relative overflow-hidden">
                    {/* Inner Metallic Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50" />
                    <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-700">
                      {award.icon}
                    </div>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                </div>
                {/* Outer Glow */}
                <div className={`absolute inset-[-10px] rounded-full bg-gradient-to-br ${award.color} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              </div>
              
              <div className="space-y-1">
                <span className="block text-[10px] md:text-xs font-black tracking-[0.3em] text-white/90 uppercase">{award.title}</span>
                <span className="block text-[8px] md:text-[10px] font-medium tracking-[0.4em] text-accent uppercase">{award.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#BF953F]/40 to-transparent mb-24 md:mb-32 relative">
          <div className="absolute inset-0 blur-[2px] bg-gradient-to-r from-transparent via-[#BF953F]/20 to-transparent" />
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="relative w-full bg-gradient-to-b from-transparent to-white/[0.02] py-12 md:py-16 border-y border-white/5">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div ref={marqueeRef} className="flex items-center gap-16 md:gap-32">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-32 group">
                <h4 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight uppercase transition-all duration-700 
                               text-white/20 hover:text-white cursor-default select-none group-hover:scale-105"
                    style={{
                      fontFamily: 'Inter, sans-serif'
                    }}>
                  {item}
                </h4>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#BF953F] shadow-[0_0_10px_rgba(191,149,63,0.8)]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Cinematic Gradients */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};
