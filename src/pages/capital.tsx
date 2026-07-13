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
        title="Fund Management - Moneda | Bridging Africa's Credit Gap"
        description="Moneda fund management connects institutional capital partnerships with African real-economy execution through Moneda Capital Management Limited, regulated by the Financial Services Commission of the Republic of Mauritius."
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
