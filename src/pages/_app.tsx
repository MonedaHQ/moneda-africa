import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Poppins } from 'next/font/google';

import ResponsiveToaster from '@/components/ResponsiveToaster';
import { MenuTogglerProvider } from '@/context/MenuToggleContext';
import { SmoothScrollProvider } from '@/context/SmoothScrollContext';

import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <SmoothScrollProvider>
          <MenuTogglerProvider>
            <main className={poppins.className}>
              <Component {...pageProps} />
              <ResponsiveToaster mobileBreakpoint={1200} />
            </main>
          </MenuTogglerProvider>
        </SmoothScrollProvider>
      </QueryClientProvider>
    </>
  );
}
