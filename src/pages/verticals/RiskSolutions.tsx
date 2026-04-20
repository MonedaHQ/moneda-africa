import Section from '@/components/Section';
import styles from './styles/risksolutions.module.css';
import TextAndImageSection from '@/components/TextAndImageSection';
import GetInTouch from '@/components/GetInTouch';
import Quote from '@/components/Quote';
import VenturesMain from './venturesComponents/VenturesMain';
import VenturesHeading from './venturesComponents/VenturesHeading';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';
import VenturesComponents from './venturesComponents/VenturesComponents';
import { riskVentures } from '@/data/ourVentures';

function RiskSolutions() {
  const quote = {
    quote:
      '“Investing in Africa isn’t just a financial decision; it’s about contributing to a legacy of growth and resilience.”',
    caption: 'Strive Masiyiwa - Founder, Econet Wireless Group',
  };

  const riskManagement = {
    heading: 'Risk Handled with Purpose',
    paragraph:
      'In high-volatility sectors like oil, energy, and commodities, intelligent risk is the cornerstone of sustainable trade. At Moneda, we provide strategic advisory and deal structuring to help clients navigate complex markets, manage volatility, and secure long-term value. <br/><br/>We offer bespoke solutions that integrate capital, technical expertise, and advanced risk mitigation—ensuring that every transaction is both viable and value-aligned.',
  };

  return (
    <>
      <Section>
        <VenturesMain>
          <VenturesHeading data={riskManagement} />
          <AnimatedLineHorizontal color="black" opacity={0.2} duration={1.6} />
          <VenturesComponents dataArray={riskVentures} />
        </VenturesMain>
      </Section>
      <Quote quote={quote.quote} caption={quote.caption} />
      <GetInTouch venture="Risk Advisory services" />
    </>
  );
}

export default RiskSolutions;
