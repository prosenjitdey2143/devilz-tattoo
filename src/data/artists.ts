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
    portrait: ASSETS.images.lokesh_verma,
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
    instagram: "lokeshverma",
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
    portrait: ASSETS.images.alex_shimray,
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
    portrait: ASSETS.images.amar_master,
    bio: "Amar brings a contemporary twist to traditional tattoo art. His bold lines and timeless designs have earned him a dedicated following.",
    specialties: ["Neo-Traditional", "Bold Color", "Illustrative"],
    philosophy: "Respect the old, embrace the new. A tattoo should stand the test of time.",
    achievements: [
      "15+ years of experience in Traditional art",
      "Expert in custom illustrative compositions"
    ],
    instagram: "amar_tattoo",
    works: [
      ASSETS.images.classicPortrait,
      ASSETS.images.animeStyle
    ]
  },
  {
    id: 'pallavi',
    name: "Pallavi",
    role: "Fine Line Specialist",
    portrait: ASSETS.images.pallavi_fineline,
    bio: "Pallavi specializes in delicate, intricate fine-line work and geometric mandalas. Her art is a study in grace and precision.",
    specialties: ["Fine Line", "Geometric Mandalas", "Minimalist"],
    philosophy: "There is immense power in the delicate. Minimalist art speaks volumes.",
    achievements: [
      "Pioneer of Fine Line Geometric art in the studio",
      "Specialist in micro-realism"
    ],
    instagram: "pallavi_ink",
    works: [
      ASSETS.images.mandalaFineLine,
      ASSETS.images.mandalaBack
    ]
  },
  {
    id: 'toshi-ltr',
    name: "Toshi Ltr",
    role: "Illustrative Specialist",
    portrait: ASSETS.images.toshi_illustrative,
    bio: "Toshi's work is inspired by Japanese illustration and dark blackwork. His unique style is both haunting and beautiful.",
    specialties: ["Japanese Illustrative", "Blackwork", "Dark Art"],
    philosophy: "Every piece is a narrative. I illustrate stories on the skin.",
    achievements: [
      "Award-winning blackwork artist",
      "Featured in international tattoo conventions"
    ],
    instagram: "toshi_ltr",
    works: [
      ASSETS.images.animeStyle,
      ASSETS.images.geometricTattoo
    ]
  },
  {
    id: 'prem-negi',
    name: "Prem Negi",
    role: "Color Realism Expert",
    portrait: ASSETS.images.prem_color,
    bio: "Prem is a master of vibrant colors and realistic floral compositions. His work captures the essence of nature with incredible depth.",
    specialties: ["Color Realism", "Floral", "Vibrant Art"],
    philosophy: "Color is the soul of the image. I bring life to skin through vibrant hues.",
    achievements: [
      "Specialist in custom color blending",
      "Winner of Best Color Tattoo at local expos"
    ],
    instagram: "premnegi_tattoos",
    works: [
      ASSETS.images.floralRealism,
      ASSETS.images.fashionTattoo
    ]
  },
  {
    id: 'minal-goyari',
    name: "Minal Goyari",
    role: "Portrait Specialist",
    portrait: ASSETS.images.minal_portrait,
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
    portrait: ASSETS.images.angel_minimalist,
    bio: "Angel specializes in minimalist designs and elegant script work. Her clean lines and subtle compositions are perfect for first-timers and veterans alike.",
    specialties: ["Minimalist", "Script", "Subtle Art"],
    philosophy: "Simplicity is the ultimate sophistication.",
    achievements: [
      "Specialist in fine line script and lettering",
      "Highly sought after for delicate first-time tattoos"
    ],
    instagram: "angelzimik",
    works: [
      ASSETS.images.mandalaBack,
      ASSETS.images.mandalaFineLine
    ]
  }
];
