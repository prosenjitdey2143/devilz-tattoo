import { useEffect } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

export const SmoothScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle scroll to hash or top on route change
    if (hash && hash !== '#') {
      try {
        const target = document.querySelector(hash);
        if (target) {
          lenis.scrollTo(target as HTMLElement);
        }
      } catch (e) {
        console.error('Invalid hash selector:', hash);
      }
    } else {
      lenis.scrollTo(0, { immediate: true });
    }

    return () => {
      lenis.destroy();
    };
  }, [pathname, hash]);

  return null;
};
