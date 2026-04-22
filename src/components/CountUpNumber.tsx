import { type ElementType, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type CountUpNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  as?: ElementType;
  className?: string;
  duration?: number;
  delay?: number;
  decimals?: number;
  onComplete?: () => void;
};

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function CountUpNumber({
  value,
  prefix = '',
  suffix = '',
  as: Tag = 'span',
  className,
  duration = 1800,
  delay = 0,
  decimals = 0,
  onComplete,
}: CountUpNumberProps) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true });
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!inView) return;

    const timeout = window.setTimeout(() => {
      startTime.current = null;

      const step = (timestamp: number) => {
        if (startTime.current === null) startTime.current = timestamp;
        const elapsed = timestamp - startTime.current;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutExpo(progress);
        const current = eased * value;

        setDisplay(
          decimals > 0
            ? current.toFixed(decimals)
            : Math.floor(current).toString(),
        );

        if (progress < 1) {
          rafId.current = requestAnimationFrame(step);
        } else {
          setDisplay(decimals > 0 ? value.toFixed(decimals) : value.toString());
          onCompleteRef.current?.();
        }
      };

      rafId.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [inView, value, duration, delay, decimals]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className}>
      {prefix}
      {display}
      {suffix}
    </Tag>
  );
}

export default CountUpNumber;
