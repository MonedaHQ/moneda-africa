import { footer } from '@/data/footer';

import styles from './styles/footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <ul className={styles.linkList}>
        {footer.map((link) => (
          <a key={link.label} href={link.link}>
            {link.label}
          </a>
        ))}
      </ul>
      <p>&copy; 2024 Moneda Africa</p>
    </div>
  );
}

export default Footer;
