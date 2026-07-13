import { homeMenuLinks } from '@/data/menu';
import styles from './styles/mobilenavigation.module.css';
import MobileNavLinks from './MobileNavLinks';
import { useState } from 'react';

function MobileNavigation() {
  const [openDropdown, setOpenDropdown] = useState(null);

  function handleDropdownToggle(label) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }
  return (
    <div className={styles.nav}>
      <ul className={styles.mainNavLinks}>
        {homeMenuLinks.map((link, i) => {
          return (
            <MobileNavLinks
              data={{ nav: link, index: i }}
              key={`b_${i}`}
              isOpen={openDropdown === link.label}
              onDropdownToggle={handleDropdownToggle}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MobileNavigation;
