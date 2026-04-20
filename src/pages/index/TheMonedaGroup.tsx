import Section from '@/components/Section';
import styles from './styles/themonedagroup.module.css';

function TheMonedaGroup() {
  return (
    <Section>
      <div>
        <Title />
        <h2>Unlocking Africa’s Resource Potential</h2>
      </div>
    </Section>
  );
}

function Title() {
  return (
    <div className={styles.title}>
      <div className={styles.line} />
      <h5>The Moneda Group</h5>
    </div>
  );
}

export default TheMonedaGroup;
