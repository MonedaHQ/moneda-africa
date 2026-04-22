import type { AppProps } from 'next/app';
import Script from 'next/script';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Cormorant_Garamond, Poppins } from 'next/font/google';

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

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-capital-heading',
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      {/* Microsoft Clarity — site-wide session recording & heatmaps */}
      <Script
        id="clarity-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","wf7r3lzs75");`,
        }}
      />
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <SmoothScrollProvider>
          <MenuTogglerProvider>
            <main
              className={`${poppins.className} ${cormorantGaramond.variable}`}
            >
              <Component {...pageProps} />
              <ResponsiveToaster mobileBreakpoint={1200} />
            </main>
          </MenuTogglerProvider>
        </SmoothScrollProvider>
      </QueryClientProvider>
    </>
  );
}
