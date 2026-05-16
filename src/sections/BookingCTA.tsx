import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../assets/assets';
import { useBooking } from '../context/BookingContext';

export const BookingCTA = () => {
  const { openBooking } = useBooking();

  return (
    <section id="booking" className="relative h-screen bg-[#050505] overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 md:px-24 relative z-10 bg-[#050505]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-[10px] md:text-xs uppercase tracking-[0.6em] font-black mb-8 block">
              The Final Step
            </span>
            
            <h2 className="text-5xl md:text-[7vw] font-bebas text-white leading-[0.9] mb-8 tracking-[2px] uppercase">
              YOUR STORY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">IN INK.</span>
            </h2>

            <p className="text-white/50 text-lg max-w-md mb-12 font-light leading-relaxed">
              Every masterpiece begins with a conversation. Connect with our master artists and bring your vision to life in the heart of our world-class studio.
            </p>

            <div className="flex justify-start">
              {/* Primary Action */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openBooking()}
                className="h-16 px-16 bg-white text-black rounded-sm overflow-hidden transition-all duration-500 relative group"
              >
                <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-black group-hover:text-white transition-colors flex items-center justify-center gap-4">
                  Book Appointment <ArrowRight size={14} />
                </span>
              </motion.button>
            </div>

          </motion.div>
        </div>

        {/* Right Side: Image Showcase */}
        <div className="w-full lg:w-1/2 h-full relative overflow-hidden group">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full h-full"
          >
            <img 
              src={ASSETS.images.readyForMaster} 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 transition-transform duration-[2s]"
              alt="Devilz Tattooz Masterpiece"
            />
            {/* Visual Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:hidden" />
            
            {/* Minimal Tag */}
            <div className="absolute bottom-12 right-12 flex items-center gap-4 pointer-events-none">
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-white/40">DEVILZ TATTOOZ STUDIO</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Decorative Floating Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/5 rounded-full pointer-events-none z-0 rotate-45" />
    </section>
  );
};
