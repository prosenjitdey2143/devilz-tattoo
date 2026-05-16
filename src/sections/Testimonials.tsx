import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const reviews = [
  { 
    name: "Sanyukta Ray", 
    text: "I’m absolutely in love with my tattoos! Every line, every shade, every tiny detail was done with such precision and care. The artist truly turned my ideas into living art. They made me feel comfortable throughout the entire process.", 
    rating: 5, 
    tag: "Artistic Precision" 
  },
  { 
    name: "Prabhsharan Kaur", 
    text: "I got my first tattoo from Amar almost 15 years back till date I have the same artist who does all my tattoos. From the first studio till now it’s the same energy. I love it. Everyone around there is just so sweet.", 
    rating: 5, 
    tag: "15 Years of Loyalty" 
  },
  { 
    name: "Anushka Das", 
    text: "I got two of my tattoos done at this studio about three years ago, and I came back today for two more, and once again, the experience was amazing. This time my tattoos were done by Sahil.", 
    rating: 5, 
    tag: "Returning Client" 
  },
  { 
    name: "Rishita Baveja", 
    text: "I got my second tattoo done at Devil’s and the experience was amazing both the times. The entire process was super smooth. I got it done by Shankey and would definitely recommend him.", 
    rating: 5, 
    tag: "Highly Recommended" 
  },
  { 
    name: "Sneha Mohanty", 
    text: "Had an abstract idea of what I wanted in mind and Priyam reaffirmed it so beautifully that it just made everything seem so amazing! Got my first colour tattoo and the process was truly seamless and painless.", 
    rating: 5, 
    tag: "Seamless Experience" 
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="pt-16 pb-32 bg-[#050505] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-accent text-xs uppercase tracking-[0.6em] font-bold">Kind Words</span>
            <h2 className="text-6xl md:text-8xl font-bebas text-white leading-none mt-4 tracking-[2px]">THE REVIEWS</h2>
          </div>
          <a 
            href="https://maps.app.goo.gl/bz2fHtCqxEYGWyyw5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-black text-white/40 hover:text-white transition-all group"
          >
            <span>View All on Google</span>
            <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="relative min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <div className="relative inline-block mb-12">
                <Quote className="absolute -top-12 -left-12 w-24 h-24 text-white/5 -z-10" />
                <p className="text-3xl md:text-5xl font-light italic text-white/90 leading-tight tracking-tight">
                  "{reviews[current].text}"
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-black mb-2">
                  {reviews[current].tag}
                </span>
                <h3 className="text-2xl md:text-4xl font-bebas text-white tracking-[2px] uppercase">
                  {reviews[current].name}
                </h3>
                <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Verified Google Review</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button 
              onClick={prev}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-white hover:border-accent transition-all pointer-events-auto backdrop-blur-sm group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={next}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-white hover:border-accent transition-all pointer-events-auto backdrop-blur-sm group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-4 mt-20">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-12 h-1 transition-all duration-500 ${i === current ? 'bg-accent w-20' : 'bg-white/10 hover:bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
