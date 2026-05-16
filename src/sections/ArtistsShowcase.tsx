import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Instagram } from '../components/Icons';
import { ARTISTS } from '../data/artists';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

export const ArtistsShowcase = () => {
  const { openBooking } = useBooking();
  return (
    <section id="artists" className="pt-32 pb-8 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent text-xs uppercase tracking-[0.4em] font-bold"
            >
              The Collective
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl font-black text-white leading-none mt-4 tracking-[2px]"
            >
              THE ARTISTS
            </motion.h2>
          </div>
          
          <Link 
            to="/artists" 
            className="flex items-center gap-4 text-white/40 hover:text-white transition-all group"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-black">Meet All Masters</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      <div className="pl-6 md:pl-20">
        <Swiper
          modules={[Mousewheel, FreeMode, Autoplay]}
          spaceBetween={40}
          slidesPerView={'auto'}
          loop={true}
          speed={5000}
          freeMode={true}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="artists-swiper !overflow-visible"
        >
          {ARTISTS.map((artist) => (
            <SwiperSlide key={artist.id} className="!w-[300px] md:!w-[450px]">
              <Link to={`/artists/${artist.id}`} className="group block">
                <div className="relative aspect-square overflow-hidden rounded-sm border border-white/5 bg-[#111]">
                  {/* Base Image */}
                  <img 
                    src={artist.portrait} 
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                  
                  {/* Red Ambient Glow on Hover */}
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay" />
                  
                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex justify-between items-end">
                      <div>
                        <motion.span className="text-accent text-[10px] uppercase tracking-[0.4em] font-black block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                          {artist.role.split('/')[0]}
                        </motion.span>
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-[2px] leading-none">
                          {artist.name}
                        </h3>
                      </div>
                      
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-500 scale-50 group-hover:scale-100">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-8 right-8 w-8 h-[1px] bg-white/20 group-hover:bg-accent group-hover:w-12 transition-all duration-700" />
                  <div className="absolute top-8 right-8 h-8 w-[1px] bg-white/20 group-hover:bg-accent group-hover:h-12 transition-all duration-700" />
                </div>
                
                {/* External Links */}
                <div className="mt-8 flex justify-between items-center px-2">
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openBooking(artist.name);
                        }}
                        className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 hover:text-accent transition-colors"
                    >
                        Book Artist
                    </button>
                    <div className="flex items-center gap-4">
                        <Instagram size={14} className="text-white/20 group-hover:text-white transition-colors" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 group-hover:text-white transition-colors">
                            @{artist.instagram}
                        </span>
                    </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Decorative Animated Marquee */}
      <div className="mt-12 pointer-events-none select-none opacity-[0.03] overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
            }}
            className="flex whitespace-nowrap"
          >
              <h2 className="text-[20vw] font-black uppercase tracking-tighter leading-none pr-20">
                  MASTERS OF THE CRAFT • MASTERS OF THE CRAFT • MASTERS OF THE CRAFT • MASTERS OF THE CRAFT
              </h2>
              <h2 className="text-[20vw] font-black uppercase tracking-tighter leading-none pr-20">
                  MASTERS OF THE CRAFT • MASTERS OF THE CRAFT • MASTERS OF THE CRAFT • MASTERS OF THE CRAFT
              </h2>
          </motion.div>
      </div>
    </section>
  );
};
