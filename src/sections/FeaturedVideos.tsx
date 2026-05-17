import { motion } from 'framer-motion';
import { Play, ArrowRight, ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { useState, useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const videos = [
  {
    id: "piL4LG-Iuu4",
    title: "Picolaser Tattoo Removal",
    category: "Removal",
    thumbnail: "https://img.youtube.com/vi/piL4LG-Iuu4/maxresdefault.jpg"
  },
  {
    id: "AWVhaXmS_Mg",
    title: "Warrior Tattoo by Saunak",
    category: "Showcase",
    thumbnail: "https://img.youtube.com/vi/AWVhaXmS_Mg/maxresdefault.jpg"
  },
  {
    id: "kSzSWD8y2ng",
    title: "'Hunger' by Minal Goyari",
    category: "Art",
    thumbnail: "https://img.youtube.com/vi/kSzSWD8y2ng/maxresdefault.jpg"
  },
  {
    id: "wn-Vdnaxvy4",
    title: "Avalokiteshvara by Sahil",
    category: "Showcase",
    thumbnail: "https://img.youtube.com/vi/wn-Vdnaxvy4/maxresdefault.jpg"
  },
  {
    id: "V4SHfg-lYII",
    title: "Shiva Tattoo by Navjot",
    category: "Showcase",
    thumbnail: "https://img.youtube.com/vi/V4SHfg-lYII/maxresdefault.jpg"
  }
];

export const FeaturedVideos = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handlePlay = (id: string) => {
    setActiveVideo(id);
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleClose = () => {
    setActiveVideo(null);
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent text-xs uppercase tracking-[0.4em] font-bold"
            >
              Cinematic Showcase
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-bebas text-white leading-none mt-4"
            >
              FEATURED <span className="text-white/20 italic">STORIES</span>
            </motion.h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              ref={prevRef}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-accent hover:text-accent transition-all duration-500 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              ref={nextRef}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-accent hover:text-accent transition-all duration-500 group"
            >
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative px-4 md:px-0">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect={'coverflow'}
          grabCursor={!activeVideo}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          onSwiper={setSwiperInstance}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          className="featured-video-swiper !py-20"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id} className="!w-[85vw] md:!w-[700px] aspect-video">
              <motion.div 
                className="w-full h-full relative group rounded-2xl overflow-hidden border border-white/5 bg-[#111] shadow-2xl"
                whileHover={!activeVideo ? { y: -10 } : {}}
                transition={{ duration: 0.5 }}
              >
                {activeVideo === video.id ? (
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button 
                      onClick={handleClose}
                      className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all group"
                    >
                      <span className="text-xl font-bold group-hover:scale-110 transition-transform">×</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <img 
                      src={video.thumbnail} 
                      className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-700"
                      alt={video.title}
                    />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-bold">
                          {video.category}
                        </span>
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:border-accent transition-colors duration-500">
                          <Play size={20} className="text-white group-hover:text-accent ml-1 transition-colors" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bebas text-white tracking-wider mb-2">
                          {video.title}
                        </h3>
                        <div className="w-0 group-hover:w-20 h-1 bg-accent transition-all duration-700 ease-out" />
                      </div>
                    </div>

                    {/* Play Button Trigger */}
                    <button 
                      onClick={() => handlePlay(video.id)}
                      className="absolute inset-0 w-full h-full z-10"
                    />
                  </>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-accent to-transparent opacity-30" />
    </section>
  );
};
