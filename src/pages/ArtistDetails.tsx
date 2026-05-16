import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ARTISTS } from '../data/artists';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Instagram } from '../components/Icons';
import { useEffect, useState } from 'react';
import { Footer } from '../sections/Footer';
import { Navbar } from '../components/Navbar';
import { useBooking } from '../context/BookingContext';

export const ArtistDetails = () => {
  const { id } = useParams();
  const artist = ARTISTS.find(a => a.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { openBooking } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!artist) return <div>Artist not found</div>;

  return (
    <div className="bg-[#050505] min-h-screen text-white font-inter overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col lg:flex-row items-center pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
            <h1 className="text-[25vw] font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 whitespace-nowrap uppercase tracking-tighter">
                {artist.name}
            </h1>
        </div>

        {/* Left Side: Info */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
              {artist.role}
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8 tracking-[2px]">
              {artist.name}
            </h1>
            <p className="text-lg text-white/60 max-w-md mb-12 leading-relaxed">
              {artist.bio}
            </p>

            <div className="flex flex-wrap gap-8 items-center">
                <a 
                    href={`https://instagram.com/${artist.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold hover:text-accent transition-colors group"
                >
                    <Instagram size={18} />
                    <span>@{artist.instagram}</span>
                    <ArrowRight size={14} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </a>
                
                <button 
                    onClick={() => openBooking(artist.name)}
                    className="px-10 py-5 bg-accent text-white text-xs uppercase tracking-[0.3em] font-black hover:bg-white hover:text-black transition-all duration-500 rounded-sm"
                >
                    Book This Artist
                </button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Portrait */}
        <div className="w-full lg:w-1/2 h-full relative z-10 mt-12 lg:mt-0 px-8 lg:px-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" as const }}
            className="w-full h-[80vh] lg:h-full relative overflow-hidden"
          >
            <img 
              src={artist.portrait} 
              alt={artist.name} 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#050505] lg:via-transparent lg:to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Bio / Achievements */}
      <section className="py-32 px-8 md:px-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.5em] font-black text-accent mb-8">Artistic Philosophy</h2>
            <p className="text-3xl md:text-4xl font-light italic text-white/90 leading-tight">
              "{artist.philosophy}"
            </p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.5em] font-black text-accent mb-8">Recognition & Achievements</h2>
            <ul className="space-y-6">
              {artist.achievements.map((achievement, i) => (
                <li key={i} className="flex gap-4 items-start text-white/70 hover:text-white transition-colors">
                  <CheckCircle2 size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm uppercase tracking-widest leading-loose">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-8 md:px-20 bg-[#080808]">
        <div className="text-center mb-20">
            <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold">Selected Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase mt-4 tracking-[2px]">Artistic Mastery</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {artist.works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-zoom-in overflow-hidden rounded-xl border border-white/5"
              onClick={() => setSelectedImage(work)}
            >
              <img 
                src={work} 
                alt={`Work by ${artist.name}`} 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold border border-white/20 px-4 py-2 backdrop-blur-md">View Work</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 md:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
            <button 
                className="absolute top-8 right-8 text-white/50 hover:text-white text-xs uppercase tracking-widest"
                onClick={() => setSelectedImage(null)}
            >
                Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky CTA */}
      <div className="fixed bottom-12 right-12 z-50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openBooking(artist.name)}
            className="w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center shadow-2xl shadow-accent/20 border border-white/10 group overflow-hidden relative"
          >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <ArrowRight size={24} className="z-10 group-hover:text-black transition-colors" />
          </motion.button>
          <div className="absolute right-24 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
              <span className="text-[10px] uppercase tracking-widest font-black">Book {artist.name.split(' ')[0]} Now</span>
          </div>
      </div>
    </div>
  );
};
