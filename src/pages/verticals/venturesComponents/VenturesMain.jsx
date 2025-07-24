import styles from './styles/venturesmain.module.css';

function VenturesMain({ children }) {
  return <main className={styles.main}>{children}</main>;
}

export default VenturesMain;
