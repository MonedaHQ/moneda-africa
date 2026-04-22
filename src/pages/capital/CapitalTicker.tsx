import styles from './styles/capitalticker.module.css';

const companies = [
  'Sahara Energy',
  'Shell Nigeria',
  'Chevron',
  'TotalEnergies',
  'NLNG',
  'Seplat Energy',
  'VodaCom DRC',
  'NPDC',
  'Sahara Energy',
  'Shell Nigeria',
  'Chevron',
  'TotalEnergies',
  'NLNG',
  'Seplat Energy',
  'VodaCom DRC',
  'NPDC',
];

function CapitalTicker() {
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {companies.map((name, i) => (
          <span key={i} className={styles.item}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CapitalTicker;
