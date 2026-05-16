import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ARTISTS } from '../data/artists';
import { Navbar } from '../components/Navbar';
import { Footer } from '../sections/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const ArtistsPage = () => {
  const { openBooking } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden selection:bg-accent selection:text-white">
      <Navbar />
      
      {/* Intro Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2 }}
            className="text-[40vw] font-black text-white leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none"
          >
            ARTISTS
          </motion.h1>
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent text-xs uppercase tracking-[1em] font-black block mb-6">The Collective</span>
            <h2 className="text-7xl md:text-[12vw] font-bebas text-white leading-none tracking-[2px] uppercase">
              MASTERS <br /> OF INK.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Alternating Split Sections */}
      <div className="relative">
        {ARTISTS.map((artist, i) => (
          <section key={artist.id} className="relative h-screen w-full flex items-center border-b border-white/5 overflow-hidden">
            <div className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} w-full h-full`}>
              
              {/* Image Column - Full Height */}
              <div className="w-full md:w-1/2 h-[45vh] md:h-full relative overflow-hidden group">
                <motion.div 
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  <img 
                    src={artist.portrait} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    alt={artist.name}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                
                {/* Floating Identifier */}
                <div className={`absolute top-10 ${i % 2 === 1 ? 'left-10' : 'right-10'} z-20`}>
                  <span className="text-white/20 text-[8px] md:text-[10px] uppercase tracking-[1em] font-black md:rotate-90 origin-left block whitespace-nowrap">
                    MASTER ARTIST 0{i + 1}
                  </span>
                </div>
              </div>

              {/* Text Column - Full Height & Centered */}
              <div className="w-full md:w-1/2 h-[55vh] md:h-full flex items-center justify-center p-8 md:p-20 lg:p-32 relative bg-[#080808]">
                <div className="max-w-xl w-full relative z-10 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 1 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-[1px] bg-accent" />
                        <span className="text-accent text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-black">{artist.role}</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bebas text-white tracking-[2px] uppercase mb-6 md:mb-8 leading-[0.85]">
                      {artist.name.split(' ').map((part, idx) => (
                        <span key={idx} className="block">{part}</span>
                      ))}
                    </h2>

                    <p className="text-white/40 text-sm md:text-lg font-light leading-relaxed mb-8 md:mb-10 border-l border-accent/20 pl-6 italic line-clamp-3 md:line-clamp-none">
                      "{artist.bio}"
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12">
                      {artist.specialties.slice(0, 3).map((spec, idx) => (
                        <span key={idx} className="text-[7px] md:text-[9px] uppercase tracking-widest text-white/30 px-4 py-2 border border-white/5 bg-white/[0.02]">
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                        <button 
                          onClick={() => openBooking(artist.name)}
                          className="flex-1 py-4 md:py-6 bg-accent text-white text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black hover:bg-white hover:text-black transition-all duration-500 rounded-sm"
                        >
                          Book Artist
                        </button>
                        <Link 
                            to={`/artists/${artist.id}`}
                            className="flex-1 py-4 md:py-6 border border-white/10 text-white text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-black hover:border-white transition-all duration-500 rounded-sm flex items-center justify-center gap-4 group"
                        >
                            Gallery <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Overlapping Text */}
                <div className={`absolute bottom-6 md:bottom-10 ${i % 2 === 1 ? 'right-6 md:right-10' : 'left-6 md:left-10'} opacity-[0.02] pointer-events-none select-none z-0`}>
                    <h3 className="text-[12vw] font-black uppercase leading-none">
                        {artist.name.split(' ')[0]}
                    </h3>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
};
