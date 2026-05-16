import { motion } from 'framer-motion';
import { MessageCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../assets/assets';
import { ARTISTS } from '../data/artists';

const WHATSAPP_NUMBER = "+919811611111"; // Placeholder number

const styles = [
  { name: "Religious Tattoos", size: "h-[400px]", img: ASSETS.images.religiousTattoo, artistId: "lokesh-verma" },
  { name: "Lord Shiva Tattoos", size: "h-[500px]", img: ASSETS.images.shivaTattoo, artistId: "lokesh-verma" },
  { name: "Small Tattoos", size: "h-[300px]", img: ASSETS.images.smallTattoo, artistId: "angel-zimik" },
  { name: "Geometric Tattoos", size: "h-[450px]", img: ASSETS.images.geometricTattoo, artistId: "pallavi" },
  { name: "Travel Tattoos", size: "h-[350px]", img: ASSETS.images.travelTattoo, artistId: "angel-zimik" },
  { name: "Calligraphy Tattoos", size: "h-[400px]", img: ASSETS.images.calligraphyTattoo, artistId: "angel-zimik" },
  { name: "Realistic Tattoos", size: "h-[500px]", img: ASSETS.images.realisticTattooV2, artistId: "alex-shimray" },
  { name: "Fan Art Tattoo", size: "h-[350px]", img: ASSETS.images.artistWorking1, artistId: "lokesh-verma" },
  { name: "Pet Tattoos", size: "h-[400px]", img: ASSETS.images.petTattoo, artistId: "minal-goyari" },
  { name: "Sleeve Tattoos", size: "h-[550px]", img: ASSETS.images.sleeveTattoo, artistId: "lokesh-verma" },
  { name: "Watercolor Tattoo", size: "h-[450px]", img: ASSETS.images.watercolorTattoo, artistId: "prem-negi" },
  { name: "Couple Tattoos", size: "h-[350px]", img: ASSETS.images.coupleTattoo, artistId: "angel-zimik" },
  { name: "Anime Tattoos", size: "h-[500px]", img: ASSETS.images.animeStyle, artistId: "toshi-ltr" },
  { name: "Dotwork Tattoos", size: "h-[400px]", img: ASSETS.images.dotworkTattoo, artistId: "pallavi" },
  { name: "Color Tattoo", size: "h-[450px]", img: ASSETS.images.colorTattoo, artistId: "prem-negi" },
];

export const StylesExplorer = () => {
  const handleWhatsAppInquiry = (styleName: string) => {
    const message = `Hi Devilz Tattooz, I'm interested in getting a ${styleName}. Can we discuss further?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const getArtist = (id: string) => ARTISTS.find(a => a.id === id);

  return (
    <section id="styles" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent text-xs uppercase tracking-[0.5em] font-bold">Inspiration</span>
          <h2 className="text-7xl md:text-9xl font-bebas text-white leading-none mt-4">FIND YOUR STYLE</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {styles.map((style, i) => {
            const artist = getArtist(style.artistId);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative group overflow-hidden rounded-3xl cursor-pointer ${style.size}`}
              >
                <img
                  src={style.img}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  alt={style.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-accent text-[10px] uppercase tracking-widest font-bold">Category</span>
                    <h3 className="text-3xl font-bebas text-white tracking-wider leading-none">{style.name}</h3>
                  </div>
                  
                  {artist && (
                    <Link 
                      to={`/artists/${artist.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 mb-6 group/artist"
                    >
                      <User size={12} className="text-white/40 group-hover/artist:text-accent transition-colors" />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 group-hover/artist:text-white transition-colors">
                        By <span className="font-bold underline decoration-accent/30 underline-offset-4">{artist.name}</span>
                      </span>
                    </Link>
                  )}
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppInquiry(style.name);
                    }}
                    className="w-full py-4 bg-accent/20 border border-accent text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 rounded-full hover:bg-accent hover:text-black transition-all duration-300"
                  >
                    <MessageCircle size={18} className="text-white" />
                    Inquire Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
