import type { Variants } from 'framer-motion';

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

export const overlayVariants: Variants = {
  initial: { opacity: 0.3 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0 },
};

export const menuSlide: Variants = {
  initial: { x: 'calc(100% + 100px)' },
  enter: { x: '0', transition: { duration: 0.6, ease } },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease },
  },
};

export const slide: Variants = {
  initial: { x: 80, opacity: 0 },
  enter: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease, delay: 0.08 * i },
  }),
  exit: (i: number) => ({
    x: 80,
    opacity: 0,
    transition: { duration: 0.8, ease, delay: 0.02 * i },
  }),
};

export const slideUp: Variants = {
  initial: { y: 80, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease, delay: 0.08 },
  },
};

export const scaleUpSlow: Variants = {
  initial: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.1,
      type: 'spring' as const,
      mass: 1,
      damping: 12,
    },
  },
};

export const headerAnimation: Variants = {
  initial: { y: '100%' },
  enter: {
    y: '0',
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
      delay: 0.075,
      repeat: Infinity,
      repeatType: 'loop' as const,
      repeatDelay: 20,
    },
  },
};

export const delayedFade: Variants = {
  initial: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.6 } },
};
