import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { ASSETS } from '../assets/assets';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openBooking } = useBooking();
  const isHomePage = location?.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Awards', href: '/#awards' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Legacy', href: '/#legacy' },
    { name: 'Services', href: '/#services' },
    { name: 'Styles', href: '/#styles' },
    { name: 'Artists', href: '/#artists' },
    { name: 'Studios', href: '/#studios' },
    { name: 'Contact', href: '/#booking' },
  ];

  // Navbar is always visible on non-home pages
  const isVisible = scrolled || !isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isVisible
          ? 'translate-y-0 opacity-100 bg-[#050505]/95 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl'
          : '-translate-y-full opacity-0 pointer-events-none py-8'
        }`}
    >
      <div className="container mx-auto px-8 md:px-6 lg:px-8 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <img src={ASSETS.images.logo} alt="Devilz Tattooz Logo" className="h-10 md:h-12 w-auto object-contain brightness-110" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[9px] xl:text-[10px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-black text-white/50 hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openBooking()}
            className="px-4 py-2 xl:px-8 xl:py-3 rounded-sm bg-accent text-white text-[9px] xl:text-[10px] uppercase tracking-[0.2em] font-black hover:bg-white hover:text-black transition-all duration-500"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#050505] z-[60] flex flex-col p-12 overflow-y-auto"
            data-lenis-prevent="true"
          >
            <div className="flex justify-between items-center mb-20">
              <img src={ASSETS.images.logo} alt="Devilz Tattooz Logo" className="h-10 w-auto object-contain brightness-110" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white/40 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 mb-4">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full py-6 bg-accent text-white font-black uppercase tracking-widest text-sm"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
