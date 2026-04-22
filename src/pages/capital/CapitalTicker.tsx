import styles from './styles/capitalticker.module.css';

const companies = [
  'Vitol',
  'Trafigura',
  'Eni',
  'Shell',
  'Chevron',
  'TotalEnergies',
  'Glencore',
  'Gunvor',
  'Mercuria',
  'Vitol',
  'Trafigura',
  'Eni',
  'Shell',
  'Chevron',
  'TotalEnergies',
  'Glencore',
  'Gunvor',
  'Mercuria',
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
