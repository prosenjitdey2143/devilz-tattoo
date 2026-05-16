import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ASSETS } from '../assets/assets';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const slides = [
  {
    type: 'video',
    url: ASSETS.videos.heroBgVideo,
    title: 'CINEMATIC',
    subtitle: '& ARTISTRY',
    bgText: 'DESIGN'
  },
  {
    type: 'image',
    url: ASSETS.images.heroImpact,
    title: 'EXPERT TATTOOS',
    subtitle: '& PIERCINGS',
    bgText: 'TATTOO'
  },
  {
    type: 'image',
    url: ASSETS.images.heroImgThird,
    title: 'PREMIUM STUDIO',
    subtitle: '& EXPERIENCE',
    bgText: 'STUDIO'
  }
];

export const HeroSection = () => {
  const { openBooking } = useBooking();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Only set a timer for image slides. Videos handle their own transition via onEnded.
    if (slides[currentSlide].type === 'image') {
      const timer = setInterval(nextSlide, 8000); // 8 seconds for images
      return () => clearInterval(timer);
    }
  }, [currentSlide]);

  useEffect(() => {
    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !bgTextRef.current) return;

      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(bgTextRef.current, {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: 'power2.out'
      });

      gsap.to('.hero-bg-media', {
        scale: 1.05 + (clientX / window.innerWidth) * 0.05,
        duration: 2,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.2,
      filter: 'blur(10px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        x: { type: 'spring' as const, stiffness: 100, damping: 30 },
        opacity: { duration: 1.2 },
        scale: { duration: 2, ease: 'easeOut' as const },
        filter: { duration: 1.5 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)',
      transition: {
        x: { type: 'spring' as const, stiffness: 100, damping: 30 },
        opacity: { duration: 1.2 },
        scale: { duration: 1.5 },
        filter: { duration: 1 }
      }
    })
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#050505] text-white font-inter"
    >
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            {slides[currentSlide].type === 'image' ? (
              <div
                className="hero-bg-media w-full h-full bg-cover bg-center transition-transform duration-[3000ms] ease-out"
                style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
              </div>
            ) : (
              <div className="w-full h-full relative">
                <video
                  autoPlay
                  muted
                  playsInline
                  onEnded={nextSlide}
                  className="hero-bg-media w-full h-full object-cover transition-transform duration-[3000ms] ease-out"
                >
                  <source src={slides[currentSlide].url} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Header Overlay (Editorial Style) */}
      <header className="absolute top-0 left-0 w-full z-30 flex justify-between items-start px-6 py-6 md:px-20 md:py-10">
        <Link to="/" className="flex flex-col">
          <img src={ASSETS.images.logo} alt="Devilz Tattooz Logo" className="h-10 md:h-12 w-auto object-contain brightness-110" />
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="hidden lg:block text-[10px] uppercase tracking-[0.5em] font-medium mt-3"
        >
          DELHI • GURGAON • LUXEMBOURG
        </motion.div>

        <div className="flex items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold"
          >
            <a href="#" className="hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
          </motion.div>
          <button className="flex flex-col gap-2 group">
            <div className="w-10 h-[1.5px] bg-white group-hover:w-12 transition-all duration-300" />
            <div className="w-10 h-[1.5px] bg-white group-hover:w-7 transition-all duration-300 ml-auto" />
          </button>
        </div>
      </header>

      {/* Background Large Outlined Text */}
      <div
        ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center z-1 pointer-events-none select-none opacity-10"
      >
        <AnimatePresence mode="wait">
          <motion.h2
            key={slides[currentSlide].bgText}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 2, ease: "easeOut" as const }}
            className="text-[20vw] md:text-[30vw] font-black leading-none tracking-tighter"
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.3)',
              color: 'transparent'
            }}
          >
            {slides[currentSlide].bgText}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-[100] h-full flex flex-col justify-center px-8 md:px-20 pointer-events-none">
        <div className="max-w-5xl pointer-events-auto" ref={titleRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-black leading-[0.85] tracking-[2px] uppercase mb-2">
                {slides[currentSlide].title}
              </h1>
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-black leading-[0.85] tracking-[2px] uppercase opacity-30">
                {slides[currentSlide].subtitle}
              </h1>
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 flex flex-col gap-8 items-start">
            <motion.button
              onClick={() => openBooking()}
              whileHover={{ x: 10 }}
              className="group flex flex-col gap-2 cursor-pointer relative z-[9999] text-left pointer-events-auto bg-transparent border-none outline-none"
            >
              <span className="text-sm md:text-base font-bold uppercase tracking-[0.3em]">Schedule an appointment</span>
              <div className="w-full h-[1px] bg-white/40 overflow-hidden">
                <div className="w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Right Side Work Preview */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-end px-20">
        <motion.div
          key={`work-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative group cursor-pointer"
        >
          <div className="text-right mb-6">
            <span className="text-xs uppercase tracking-[0.5em] font-black block opacity-40 mb-1">OUR</span>
            <span className="text-4xl font-black block tracking-tighter">WORK</span>
          </div>
          <div className="w-56 h-80 overflow-hidden relative border border-white/10">
            <img
              src={ASSETS.images.tattooMachine}
              alt="Featured Work"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-white text-black flex items-center justify-center rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
              <ArrowRight size={24} />
            </div>
          </div>

          <div className="absolute -left-12 bottom-20 origin-bottom-left -rotate-90">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">Featured</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation & Pagination */}
      <div className="absolute bottom-12 left-0 w-full z-[80] px-8 md:px-20 flex justify-between items-end">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <button
              onClick={prevSlide}
              className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ChevronLeft size={16} />
              </div>
            </button>
            <button
              onClick={nextSlide}
              className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ChevronRight size={16} />
              </div>
            </button>
          </div>
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentSlide ? 1 : -1);
                  setCurrentSlide(i);
                }}
                className={`h-[2px] transition-all duration-500 ${i === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] font-black opacity-30 origin-center rotate-90 whitespace-nowrap mb-8 translate-y-[-20px]">
              Scroll down
            </span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent opacity-20" />
          </motion.div>
        </div>
      </div>

      {/* Slide Counter Overlay */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none hidden md:block">
        <span className="text-[12vw] font-black opacity-[0.03] leading-none">0{currentSlide + 1}</span>
      </div>
    </section>
  );
};
