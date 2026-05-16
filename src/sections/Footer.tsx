import { Mail, Globe } from 'lucide-react';
import { ASSETS } from '../assets/assets';

export const Footer = () => {
  return (
    <footer className="py-20 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <img src={ASSETS.images.logo} alt="Devilz Tattooz Logo" className="h-14 w-auto object-contain brightness-110 mb-8" />
            <p className="max-w-md text-soft-white/40 text-sm leading-relaxed mb-8">
              India's premier luxury tattoo studio chain. Combining world-class artistry with the highest standards of hygiene and client care since 2003.
            </p>
            <div className="flex gap-4">
              {[Mail, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Artists', 'Services', 'Tattoo Styles', 'Studios'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-soft-white/40 hover:text-white transition-colors text-sm uppercase tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Locations</h3>
            <ul className="space-y-4">
              {['New Delhi, India', 'Gurgaon, NCR', 'Luxembourg, Europe'].map((loc) => (
                <li key={loc} className="text-soft-white/40 text-sm uppercase tracking-wide">
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-soft-white/20 text-[10px] uppercase tracking-widest">
            © 2024 Devilz Tattooz. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-soft-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-soft-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
