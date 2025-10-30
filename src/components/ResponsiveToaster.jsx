import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export default function ResponsiveToaster({ mobileBreakpoint = 600 }) {
  const [position, setPosition] = useState('top-center');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);

    // handler for MediaQueryListEvent (modern)
    const mqHandler = (e) =>
      setPosition(e.matches ? 'bottom-center' : 'top-right');

    // fallback handler using window resize for older browsers
    const resizeHandler = () =>
      setPosition(
        window.innerWidth <= mobileBreakpoint ? 'bottom-center' : 'top-right'
      );

    // initialize
    setPosition(mq.matches ? 'bottom-center' : 'top-right');

    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', mqHandler);
      return () => mq.removeEventListener('change', mqHandler);
    }

    // fallback (avoids deprecated addListener/removeListener)
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [mobileBreakpoint]);

  return (
    <Toaster
      position={position}
      gutter={12}
      containerStyle={{ margin: '8px' }}
      toastOptions={{
        success: { duration: 3000 },
        error: { duration: 5000 },
        style: {
          fontSize: '14px',
          maxWidth: '500px',
          padding: '14px 22px',
          backgroundColor: '#FFF',
          color: '#210d00',
        },
      }}
    />
  );
}
