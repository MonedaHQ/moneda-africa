import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function useParallax(endScroll = '130vh') {
  const parallaxRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', endScroll]);

  return { y, parallaxRef };
}
