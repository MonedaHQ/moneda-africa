const { useScroll, useTransform } = require('framer-motion');
const { useRef } = require('react');

export function useParallax(endScroll = '130vh') {
  const parallaxRef = useRef();
  const { scrollYProgress } = useScroll({
    target: parallaxRef,

    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', endScroll]);

  return { y, parallaxRef };
}
