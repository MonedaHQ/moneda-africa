import ResponsiveToaster from '@/components/ResponsiveToaster';
import { MenuTogglerProvider } from '@/context/MenuToggleContext';
import { SmoothScrollProvider } from '@/context/SmoothScrollContext';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        <MenuTogglerProvider>
          <Component {...pageProps} />
          <ResponsiveToaster mobileBreakpoint={1200} />
        </MenuTogglerProvider>
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
}
