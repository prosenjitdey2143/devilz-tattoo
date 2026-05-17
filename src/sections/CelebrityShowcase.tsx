import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const celebrities = [
  {
    name: "Esha Gupta",
    title: "Indian Actress",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/8/81/Esha_Gupta_promotes_%27Jannat_2%27_%282%29.jpg",
  },
  {
    name: "Tapsee Pannu",
    title: "Indian Actress",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/1/15/Taapsee_Pannu_in_March_2022.jpg",
  },
  {
    name: "Ishant Sharma",
    title: "Indian Cricketer",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/06/Ishant_Sharma_4.jpg",
  },
  {
    name: "Umesh Yadav",
    title: "Indian Cricketer",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Umesh_Yadav.jpg",
  },
  {
    name: "Remo D'Souza",
    title: "Choreographer",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Remo_d_souza_did_final.jpg",
  },
  {
    name: "Shikhar Dhawan",
    title: "Indian Cricketer",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/SHIKHAR_DHAWAN_%2816005494418%29.jpg/960px-SHIKHAR_DHAWAN_%2816005494418%29.jpg",
  },
  {
    name: "Swara Bhaskar",
    title: "Indian Actress",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/2/25/Swara_Bhaskar.jpg",
  },
  {
    name: "Richa Chadha",
    title: "Indian Actress",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Richa_Chadda_promotes_Amazon_web_series.jpg",
  },
  {
    name: "Jeeveshu",
    title: "Standup Comedian",
    imageSrc: "https://www.tattoosnewdelhi.com/images/celeb-media/jeeveshu-ahluwalia-tattoo-devilz-tattooz.jpg",
  }
];

export const CelebrityShowcase = () => {
  return (
    <section className="pt-24 pb-4 bg-[#050505] relative z-10 border-t border-white/5 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-accent"></span>
            <span className="text-white/50 text-xs uppercase tracking-[0.4em] font-bold">
              Wall of Fame
            </span>
            <span className="w-12 h-[1px] bg-accent"></span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bebas text-white tracking-widest leading-none"
          >
            LOVED BY <span className="text-white/20 italic">CELEBRITIES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-sm md:text-base font-light pt-4"
          >
            From Bollywood superstars to international sports icons, Devilz Tattooz is the trusted sanctuary for visionaries seeking world-class art.
          </motion.p>
        </div>
      </div>

      {/* 3D Coverflow Carousel */}
      <div className="w-full relative z-20 pb-4">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0, // No rotation, just depth
            stretch: 0, // Space between slides
            depth: 250, // Depth of 3D effect
            modifier: 1.5, // Multiplier for effect
            slideShadows: true, // Shadows on the sides
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="w-full !py-10"
        >
          {celebrities.map((celeb, idx) => (
            <SwiperSlide key={idx} className="!w-[280px] md:!w-[350px]">
              <div className="group flex flex-col items-center">
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={celeb.imageSrc}
                    alt={`${celeb.name} Tattoo`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Internal Overlay just for aesthetic */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-60 z-10" />
                </div>
                
                {/* External Text for clean look */}
                <div className="mt-6 text-center opacity-50 group-[.swiper-slide-active]:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white font-bebas text-3xl tracking-widest drop-shadow-md">
                    {celeb.name}
                  </h3>
                  <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mt-1">
                    {celeb.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
