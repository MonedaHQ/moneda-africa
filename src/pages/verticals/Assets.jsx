import { assetsVentures } from '@/data/ourVentures';

import Section from '@/components/Section';
import VenturesMain from './venturesComponents/VenturesMain';
import VenturesHeading from './venturesComponents/VenturesHeading';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';
import VenturesComponents from './venturesComponents/VenturesComponents';
import GetInTouch from '@/components/GetInTouch';
import Quote from '@/components/Quote';

function Assets() {
  const quote = {
    quote:
      '“Energy is the backbone of development, and Africa must harness its resources to empower our people, grow our industries, and shape our future.”',
    caption: 'Folorunsho Alakija - Executive Vice Chair, Famfa Oil',
  };

  const assetsHeader = {
    heading: 'Asset-Driven. Impact-Led',
    paragraph:
      'We identify, acquire, and optimize high-potential physical and operational assets across energy, mining, and commodity logistics—prioritizing long-term value, sustainability, and national development.<br/><br/>Our capabilities span the full asset cycle—from opportunity identification and risk evaluation to performance optimization and execution expertise, we align financial proficiency with real-sector insight, and deploy capital where it multiplies impact.',
  };

  return (
    <>
      <Section>
        <VenturesMain>
          <VenturesHeading data={assetsHeader} />
          <AnimatedLineHorizontal color="black" opacity={0.2} duration={1.6} />
          <VenturesComponents dataArray={assetsVentures} />
        </VenturesMain>
      </Section>
      <Quote quote={quote.quote} caption={quote.caption} />
      <GetInTouch venture="Trading activites" />
    </>
  );
}

export default Assets;
