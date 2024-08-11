import { MenuTogglerProvider } from '@/context/MenuToggleContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <MenuTogglerProvider>
      <Component {...pageProps} />
    </MenuTogglerProvider>
  );
}
