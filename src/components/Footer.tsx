import { footer } from '@/data/footer';

import styles from './styles/footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <ul className={styles.linkList}>
        {footer.map((link) => (
          <a key={link.label} href={link.path}>
            {link.label}
          </a>
        ))}
      </ul>
      <p className={styles.disclaimer}>
        Any fund management activity or securities offering referenced by
        Moneda is conducted only through Moneda Capital Management Limited
        (MCML), Moneda&apos;s Mauritian entity licensed by the Financial
        Services Commission (FSC) of the Republic of Mauritius. Nothing on this
        website is a public offer, solicitation, or invitation to invest.
      </p>
      <p>&copy; {year} Moneda Invest Africa</p>
    </div>
  );
}

export default Footer;
