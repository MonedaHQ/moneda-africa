import { useState } from 'react';

import Button from '@/components/Button';
import DropDown from './DropDown';

import styles from './styles/navlink.module.css';

function NavLink({ link, darkHero, isActive }) {
  const [isHovered, setIsHovered] = useState(false);

  let icon = null;
  if (link.icon) {
    icon = isHovered ? link.icon2 : link.icon;
  }

  return (
    <li key={link.label}>
      <div className={styles.navLink}>
        <Button
          variant={`${darkHero ? 'primary-dark' : 'primary'}`}
          href={link.path || null}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          active={isActive}
        >
          {link.label} {icon}
        </Button>
        {link.dropdown && (
          <DropDown
            dropdownList={link.dropdown}
            setIsHovered={setIsHovered}
            isHovered={isHovered}
          />
        )}
      </div>
    </li>
  );
}

export default NavLink;
