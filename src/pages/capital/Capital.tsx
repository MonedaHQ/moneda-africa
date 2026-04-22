import CapitalTicker from './CapitalTicker';
import CapitalOpportunity from './CapitalOpportunity';
import CapitalSectors from './CapitalSectors';
import CapitalHowItWorks from './CapitalHowItWorks';
import CapitalTrackRecord from './CapitalTrackRecord';
import CapitalSpeakWithUs from './CapitalSpeakWithUs';
import CapitalRegisterInterest from './CapitalRegisterInterest';
import styles from './styles/capital.module.css';

function Capital() {
  return (
    <div className={styles.container}>
      <CapitalTicker />
      <CapitalOpportunity />
      <CapitalSectors />
      <CapitalHowItWorks />
      <CapitalTrackRecord />
      <CapitalSpeakWithUs />
      <CapitalRegisterInterest />
    </div>
  );
}

export default Capital;
