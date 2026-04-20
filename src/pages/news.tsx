import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import HeroSection from '@/components/HeroSection';
import Newsletter from './news/Newsletter';
import Newsroom from './news/Newsroom';
import Footer from '@/components/Footer';
import IntelligenceReports from './news/IntelligenceReports';

const heroContent = {
  images: ['/assets/news.jpg'],
  content: {
    heading: 'Newsroom',
    paragraph:
      'Your hub for updates, expert insights, and research on Africa\'s natural resource value chain, energy trends, and policies shaping economic transformation',
  },
};

function NewsHome() {
  return (
    <>
      <MetaTags
        title="News - Moneda | Bridging Africa's Credit Gap"
        description="Get insights on the latest industry news"
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection images={heroContent.images} content={heroContent.content} />
      <Newsroom />
      <Newsletter />
      <IntelligenceReports />
      <Footer />
    </>
  );
}

export default NewsHome;
