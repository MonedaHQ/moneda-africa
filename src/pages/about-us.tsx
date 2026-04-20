import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import CoreValues from './aboutUs/CoreValues';
import Footer from '@/components/Footer';
import TransformingAfrica from './aboutUs/TransformingAfrica';
import Milestones from './aboutUs/Milestones';
import ScalingAfrica from './aboutUs/ScalingAfrica';
import AboutHero from './aboutUs/AboutHero';
import DiscoverOurPeople from './aboutUs/DiscoverOurPeople';
import DiversifiedInvestments from './aboutUs/DiversifiedInvestments';

function WhoWeAre() {
  return (
    <>
      <MetaTags
        title="What We Do - Moneda | Bridging Africa's Credit Gap"
        description="We are dedicated to driving positive change through our diversified investment portfolio. We believe that by investing across multiple sectors, including energy, mining, construction, and commodities, we can contribute to a more sustainable and prosperous future."
      />
      <Navigation />
      <MobileNavigationHeader />
      <AboutHero />
      <CoreValues />
      <TransformingAfrica />
      <Milestones />
      <ScalingAfrica />
      <DiversifiedInvestments />
      <DiscoverOurPeople />
      <Footer />
    </>
  );
}

export default WhoWeAre;
