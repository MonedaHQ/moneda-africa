import Section from '@/components/Section';
import Quote from '@/components/Quote';
import GetInTouch from '@/components/GetInTouch';
import VenturesComponents from './venturesComponents/VenturesComponents';
import { tradingVentures } from '@/data/ourVentures';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';
import VenturesHeading from './venturesComponents/VenturesHeading';
import VenturesMain from './venturesComponents/VenturesMain';

function Trading() {
  const quote = {
    quote:
      '“Our continent holds enormous resources and potential. It is our duty to unlock this potential sustainably, creating value and ensuring shared prosperity for future generations.”',
    caption: 'Akinwumi Adesina - President, African Development Bank',
  };

  const tradingHeader = {
    heading: 'Transforming Trade into Impact',
    paragraph:
      "At Moneda, trade is a deliberate act of the continent’s building. Our ventures are designed to transform Africa’s vast agricultural and mineral wealth into structured, inclusive, and scalable value. We provide execution expertise, build efficient ecosystems, strengthen supply chains, ensuring that Africa's resources work for its people.",
  };

  return (
    <>
      <Section>
        <VenturesMain>
          <VenturesHeading data={tradingHeader} />
          <AnimatedLineHorizontal color="black" opacity={0.2} duration={1.6} />
          <VenturesComponents dataArray={tradingVentures} />
        </VenturesMain>
      </Section>
      <Quote quote={quote.quote} caption={quote.caption} />
      <GetInTouch venture="Trading activites" />
    </>
  );
}

export default Trading;
