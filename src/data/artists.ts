import { ASSETS } from '../assets/assets';

export interface Artist {
  id: string;
  name: string;
  role: string;
  portrait: string;
  bio: string;
  specialties: string[];
  philosophy: string;
  achievements: string[];
  instagram: string;
  works: string[];
}

export const ARTISTS: Artist[] = [
  {
    id: 'lokesh-verma',
    name: "Lokesh Verma",
    role: "Master Artist / Founder",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/lokesh-verma-tattoo-artist.jpg",
    bio: "Lokesh Verma is a world-renowned tattoo artist and the founder of Devilz Tattooz. With over two decades of experience, he has pioneered many techniques in the Indian tattoo scene.",
    specialties: ["Realism", "Portrait", "Soundwave Tattoos"],
    philosophy: "Tattooing is not just about the ink; it's about the story and the connection between the artist and the canvas.",
    achievements: [
      "Founder of Devilz Tattooz",
      "Pioneer of Soundwave Tattoos in India",
      "Founder of Heartwork Tattoo Festival",
      "International tattoo educator",
      "First Asian invited to teach in Italian tattoo university"
    ],
    instagram: "devilztattoozlokesh",
    works: [
      ASSETS.images.portrait,
      ASSETS.images.classicPortrait,
      ASSETS.images.floralRealism,
      ASSETS.images.mandalaBack
    ]
  },
  {
    id: 'alex-shimray',
    name: "Alex Shimray",
    role: "Realism Specialist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/alex-shimray-tattoo-artist.jpg",
    bio: "Alex is known for his breathtaking realism and attention to detail. His work often blurs the line between photography and skin art.",
    specialties: ["Hyper-Realism", "Black & Gray", "Cinematic Portraits"],
    philosophy: "Precision is my religion. Every shade, every line must serve the ultimate realism.",
    achievements: [
      "Winner of Best Realism at International Tattoo Expo",
      "Featured in Tattoo Master Magazine",
      "Specialist in 3D realistic textures"
    ],
    instagram: "alexshimray",
    works: [
      ASSETS.images.portrait,
      ASSETS.images.heroImpact,
      ASSETS.images.tattooMachine
    ]
  },
  {
    id: 'amar',
    name: "Amar",
    role: "Traditional Master",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/amar-tattoo-artist.jpg",
    bio: "Amar brings a contemporary twist to traditional tattoo art. His bold lines and timeless designs have earned him a dedicated following.",
    specialties: ["Neo-Traditional", "Bold Color", "Illustrative"],
    philosophy: "Respect the old, embrace the new. A tattoo should stand the test of time.",
    achievements: [
      "15+ years of experience in Traditional art",
      "Expert in custom illustrative compositions"
    ],
    instagram: "amar_devilz",
    works: [
      ASSETS.images.classicPortrait,
      ASSETS.images.animeStyle
    ]
  },
  {
    id: 'vivek-dauze',
    name: "Vivek Dauze",
    role: "Tattoo Artist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/vivek-dauze-tattoo-artist.jpg",
    bio: "Vivek focuses on highly detailed custom pieces, bringing unique visions to life on skin.",
    specialties: ["Custom Tattoos", "Detailed Art"],
    philosophy: "Every tattoo is a unique journey and a permanent piece of your soul.",
    achievements: ["Featured Artist at Devilz Tattooz"],
    instagram: "vivekdauze",
    works: [ASSETS.images.portrait]
  },
  {
    id: 'pallavi',
    name: "Pallavi",
    role: "Fine Line Specialist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/pallavi-tattoo-artist.jpg",
    bio: "Pallavi specializes in delicate, intricate fine-line work and geometric mandalas. Her art is a study in grace and precision.",
    specialties: ["Fine Line", "Geometric Mandalas", "Minimalist"],
    philosophy: "There is immense power in the delicate. Minimalist art speaks volumes.",
    achievements: [
      "Pioneer of Fine Line Geometric art in the studio",
      "Specialist in micro-realism"
    ],
    instagram: "thedmtuniverse",
    works: [
      ASSETS.images.mandalaFineLine,
      ASSETS.images.mandalaBack
    ]
  },
  {
    id: 'toshi-ltr',
    name: "Toshi Ltr",
    role: "Illustrative Specialist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/toshi-ltr-tattoo-artist.jpg",
    bio: "Toshi's work is inspired by Japanese illustration and dark blackwork. His unique style is both haunting and beautiful.",
    specialties: ["Japanese Illustrative", "Blackwork", "Dark Art"],
    philosophy: "Every piece is a narrative. I illustrate stories on the skin.",
    achievements: [
      "Award-winning blackwork artist",
      "Featured in international tattoo conventions"
    ],
    instagram: "dr_ink6",
    works: [
      ASSETS.images.animeStyle,
      ASSETS.images.geometricTattoo
    ]
  },
  {
    id: 'prem-negi',
    name: "Prem Negi",
    role: "Color Realism Expert",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/prem-negi-tattoo-artist.jpg",
    bio: "Prem is a master of vibrant colors and realistic floral compositions. His work captures the essence of nature with incredible depth.",
    specialties: ["Color Realism", "Floral", "Vibrant Art"],
    philosophy: "Color is the soul of the image. I bring life to skin through vibrant hues.",
    achievements: [
      "Specialist in custom color blending",
      "Winner of Best Color Tattoo at local expos"
    ],
    instagram: "shangrila_ink",
    works: [
      ASSETS.images.floralRealism,
      ASSETS.images.fashionTattoo
    ]
  },
  {
    id: 'minal-goyari',
    name: "Minal Goyari",
    role: "Portrait Specialist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/minal-goyari-tattoo-artist.jpg",
    bio: "Minal focuses on the human face and emotion. Her portraits are deeply personal and technically flawless.",
    specialties: ["Portraits", "Emotional Realism", "Fine Details"],
    philosophy: "A portrait is a window to the soul. I aim to capture the essence of the person.",
    achievements: [
      "Expert in hyper-realistic human features",
      "Known for soft shading and skin texture"
    ],
    instagram: "minalgoyari",
    works: [
      ASSETS.images.aboutPortrait,
      ASSETS.images.classicPortrait
    ]
  },
  {
    id: 'angel-zimik',
    name: "Angel Zimik",
    role: "Minimalist / Script",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/angel-zimik-tattoo-artist.jpg",
    bio: "Angel specializes in minimalist designs and elegant script work. Her clean lines and subtle compositions are perfect for first-timers and veterans alike.",
    specialties: ["Minimalist", "Script", "Subtle Art"],
    philosophy: "Simplicity is the ultimate sophistication.",
    achievements: [
      "Specialist in fine line script and lettering",
      "Highly sought after for delicate first-time tattoos"
    ],
    instagram: "angel_inkylicious",
    works: [
      ASSETS.images.mandalaBack,
      ASSETS.images.mandalaFineLine
    ]
  },
  {
    id: 'sayantan',
    name: "Sayantan",
    role: "Tattoo Artist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/sayantan-tattoo-artist.jpg",
    bio: "Sayantan is known for his unique artistic flair and dedication to creating custom, one-of-a-kind tattoos.",
    specialties: ["Custom Art", "Contemporary"],
    philosophy: "Tattooing is a collaboration between the artist's vision and the client's skin.",
    achievements: ["Resident Artist at Devilz Tattooz"],
    instagram: "pirate_jax",
    works: [ASSETS.images.animeStyle]
  },
  {
    id: 'aman-mani',
    name: "Aman Mani",
    role: "Tattoo Artist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/aman-mani-tattoo-artist.jpg",
    bio: "Aman creates striking visual pieces that leave a lasting impact, focusing on strong lines and dynamic shading.",
    specialties: ["Dynamic Shading", "Bold Lines"],
    philosophy: "Ink is permanent, so make it powerful.",
    achievements: ["Resident Artist at Devilz Tattooz"],
    instagram: "a.mani24",
    works: [ASSETS.images.classicPortrait]
  },
  {
    id: 'saunak-roy',
    name: "Saunak Roy",
    role: "Tattoo Artist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/saunak-roy-tattoo-artist.jpg",
    bio: "Saunak's expertise lies in blending modern aesthetics with traditional techniques.",
    specialties: ["Modern Traditional", "Blending"],
    philosophy: "Your body is a temple, adorn it beautifully.",
    achievements: ["Resident Artist at Devilz Tattooz"],
    instagram: "saunakcruze",
    works: [ASSETS.images.floralRealism]
  },
  {
    id: 'sahil-bali',
    name: "Sahil Bali",
    role: "Tattoo Artist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/sahil-bali-tattoo-artist.jpg",
    bio: "Sahil excels in whip shading and complex geometric patterns.",
    specialties: ["Whip Shading", "Geometry"],
    philosophy: "Every pattern holds a deeper meaning.",
    achievements: ["Resident Artist at Devilz Tattooz"],
    instagram: "sahil.whipking",
    works: [ASSETS.images.mandalaBack]
  },
  {
    id: 'navjot',
    name: "Navjot",
    role: "Tattoo Artist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/navjot-tattoo-artist.jpg",
    bio: "Navjot's distinct style is recognized by its immaculate precision and creativity.",
    specialties: ["Precision Art", "Creative Concepts"],
    philosophy: "Art should always challenge the boundaries of reality.",
    achievements: ["Resident Artist at Devilz Tattooz"],
    instagram: "masternav_",
    works: [ASSETS.images.tattooMachine]
  },
  {
    id: 'amandeep',
    name: "Amandeep",
    role: "Tattoo Artist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/amandeep-tattoo-artist.jpg",
    bio: "Amandeep specializes in bringing cultural and artistic motifs into contemporary tattoo designs.",
    specialties: ["Cultural Art", "Motifs"],
    philosophy: "Keep the culture alive through art.",
    achievements: ["Resident Artist at Devilz Tattooz"],
    instagram: "kalakaar_amandeep",
    works: [ASSETS.images.mandalaFineLine]
  },
  {
    id: 'sagar-sajwan',
    name: "Sagar Sajwan",
    role: "Tattoo Artist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/sagar-sajwan-tattoo-artist.jpg",
    bio: "Sagar's love for the ocean and nature translates into his fluid and organic tattoo styles.",
    specialties: ["Fluid Art", "Nature-inspired"],
    philosophy: "Go with the flow of the ink.",
    achievements: ["Resident Artist at Devilz Tattooz"],
    instagram: "ocean_arts__",
    works: [ASSETS.images.fashionTattoo]
  },
  {
    id: 'shankey',
    name: "Shankey",
    role: "Tattoo Artist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/shankey-tattoo-artist.jpg",
    bio: "Shankey is known as a true artisan, mastering various styles to cater to every client's unique request.",
    specialties: ["Versatile", "Custom Designs"],
    philosophy: "Be a master of all trades.",
    achievements: ["Resident Artist at Devilz Tattooz"],
    instagram: "artisan_shankey",
    works: [ASSETS.images.geometricTattoo]
  },
  {
    id: 'varun',
    name: "Varun",
    role: "Tattoo Artist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/varun-tattoo-artist.jpg",
    bio: "Varun creates deep, immersive tattoos that capture the imagination.",
    specialties: ["Immersive Art", "Dark Aesthetics"],
    philosophy: "Find beauty in the shadows.",
    achievements: ["Resident Artist at Devilz Tattooz"],
    instagram: "sleepdeprivedbot",
    works: [ASSETS.images.heroImpact]
  },
  {
    id: 'param-negi',
    name: "Param Negi",
    role: "Tattoo Artist",
    portrait: "https://www.tattoosnewdelhi.com/images/tattoo-artists/param-negi-tattoo-artist.jpg",
    bio: "Param is a rising star with a keen eye for striking, bold compositions.",
    specialties: ["Bold Compositions", "Modern Line Art"],
    philosophy: "Make your mark undeniable.",
    achievements: ["Resident Artist at Devilz Tattooz"],
    instagram: "negiparam",
    works: [ASSETS.images.portrait]
  }
];
