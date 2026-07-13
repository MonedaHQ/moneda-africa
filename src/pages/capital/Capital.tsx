import CapitalTicker from './CapitalTicker';
import CapitalOpportunity from './CapitalOpportunity';
import CapitalSectors from './CapitalSectors';
import CapitalHowItWorks from './CapitalHowItWorks';
import CapitalSpeakWithUs from './CapitalSpeakWithUs';
import styles from './styles/capital.module.css';

function Capital() {
  return (
    <div className={styles.container}>
      <CapitalTicker />
      <CapitalOpportunity />
      <CapitalSectors />
      <CapitalHowItWorks />
      <CapitalSpeakWithUs />
    </div>
  );
}

export default Capital;
