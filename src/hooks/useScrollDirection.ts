import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down';

function useScrollDirection(): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>('down');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let previousY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentY = window.scrollY;

      if (Math.abs(currentY - previousY) < 5) {
        ticking = false;
        return;
      }

      setDirection(currentY > previousY ? 'down' : 'up');
      previousY = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return direction;
}

export default useScrollDirection;
