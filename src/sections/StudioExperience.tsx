import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../assets/assets';

const pinLocations = [
  { id: 1, top: '40%', left: '52%', name: 'Luxembourg' },
  { id: 2, top: '55%', left: '72%', name: 'New Delhi' },
  { id: 3, top: '58%', left: '71%', name: 'Gurgaon' },
];

const studioCards = [
  { 
    id: 'delhi',
    name: "NEW DELHI", 
    img: ASSETS.images.heroImgThird, 
    position: "top-1/4 left-1/2 -translate-x-1/2" // Top Center
  },
  { 
    id: 'luxembourg',
    name: "LUXEMBOURG", 
    img: ASSETS.images.aboutPortrait, 
    position: "bottom-20 left-[10%]" // Bottom Left
  },
  { 
    id: 'gurgaon',
    name: "GURGAON", 
    img: ASSETS.images.studioEquipment, 
    position: "bottom-20 right-[10%]" // Bottom Right
  },
];

export const StudioExperience = () => {

  return (
    <section id="studios" className="relative min-h-screen bg-[#050505] pt-32 pb-16 overflow-hidden flex flex-col justify-center">
      {/* Cinematic Background Grain & Ambient Light */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-accent text-xs uppercase tracking-[0.6em] font-bold">Global Studios</span>
          <h2 className="text-6xl md:text-[8vw] font-bebas text-white leading-[0.85] mt-4 tracking-[2px]">
            WORLDWIDE PRESENCE.
          </h2>
        </motion.div>
      </div>

      {/* Map Container */}
      <div className="relative w-full max-w-7xl mx-auto aspect-[16/9] px-6">
        <div className="relative w-full h-full">
          {/* World Map SVG Background */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
            className="w-full h-full object-contain opacity-10 grayscale invert brightness-200"
            alt="World Map"
          />

          {/* Pin Markers */}
          {pinLocations.map((pin) => (
            <motion.div
              key={pin.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + pin.id * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              style={{ top: pin.top, left: pin.left }}
              className="absolute group cursor-pointer z-20"
            >
              <div className="relative">
                {/* Ping Animation */}
                <div className="absolute inset-0 w-full h-full bg-accent rounded-full animate-ping opacity-75" />
                {/* Dot */}
                <div className="w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(139,0,0,0.8)] relative z-10 border border-white/20" />
                
                {/* Hover Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-white text-black text-[8px] uppercase tracking-widest font-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {pin.name}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Floating Studio Cards */}
          {studioCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`absolute ${card.position} z-30 group`}
            >
              <div className="relative w-48 md:w-72 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm bg-white/5 p-1 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-accent/10">
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <img 
                    src={card.img} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    alt={card.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Card Info */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <h3 className="text-xl md:text-2xl font-bebas text-white tracking-widest">{card.name}</h3>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:text-black transition-all">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Text Bottom */}
      <div className="mt-20 text-center opacity-20">
        <span className="text-[10px] uppercase tracking-[1em] font-black">MASTERPIECES WITHOUT BORDERS</span>
      </div>
    </section>
  );
};
