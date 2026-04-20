import { RefObject, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function useCountIncrement(
  initialCount: number,
  totalNumber: number,
  round = true
): [number, RefObject<HTMLDivElement | null>] {
  const [count, setCount] = useState(initialCount);
  const increment = totalNumber / (0.1 * 1000);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '20000px' });

  useEffect(() => {
    if (!inView) {
      return;
    }

    const timer = window.setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + increment < totalNumber) {
          return prevCount + increment;
        }

        window.clearInterval(timer);
        return totalNumber;
      });
    }, 10);

    return () => {
      window.clearInterval(timer);
    };
  }, [increment, totalNumber, inView]);

  let sentCount = +count.toFixed(1);
  if (round) {
    sentCount = Math.floor(count);
  }

  return [sentCount, ref];
}
