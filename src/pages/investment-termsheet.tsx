import Footer from '@/components/Footer';
import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import InvestmentTermsheetPage from './investmentTermsheet/InvestmentTermsheetPage';

function InvestmentTermsheet() {
  return (
    <>
      <MetaTags
        title="Investment Termsheet - Moneda | Bridging Africa's Credit Gap"
        description="Register your interest in Moneda's cost-plus investment program through a premium online termsheet and investor declaration form."
      />
      <Navigation />
      <MobileNavigationHeader />
      <InvestmentTermsheetPage />
      <Footer />
    </>
  );
}

export default InvestmentTermsheet;
