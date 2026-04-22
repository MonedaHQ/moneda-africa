import Footer from '@/components/Footer';
import MetaTags from '@/components/head';
import CapitalNavigation from '@/components/capitalNav/CapitalNavigation';
import CapitalMobileNavigationHeader from '@/components/capitalNav/CapitalMobileNavigationHeader';
import CapitalHero from './capital/CapitalHero';
import Capital from './capital/Capital';

function CapitalPage() {
  return (
    <>
      <MetaTags
        title="Capital - Moneda | Bridging Africa's Credit Gap"
        description="Moneda Africa Capital — Africa's real economy. Your capital. Working."
      />
      <CapitalNavigation />
      <CapitalMobileNavigationHeader />
      <CapitalHero />
      <Capital />
      <Footer />
    </>
  );
}

export default CapitalPage;
