import Footer from '@/components/Footer';
import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import TypicalHero from '@/components/TypicalHero';
import LinksMap from './sitemap/LinksMap';

const heroContent = {
  pageTitle: '',
  heading: 'Sitemap',
  paragraph: 'Explore Moneda Africa with the links below',
  imageUrl: '/assets/buildings.jpg',
};

function Sitemap() {
  return (
    <>
      <MetaTags
        title="Sitemap - Moneda | Bridging Africa's Credit Gap"
        description=""
      />
      <Navigation />
      <MobileNavigationHeader />
      <TypicalHero content={heroContent} />
      <LinksMap />
      <Footer />
    </>
  );
}

export default Sitemap;
