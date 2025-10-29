import Link from 'next/link';
import styles from './styles/button.module.css';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

function Button({
  children,
  onClick,
  href = null,
  variant,
  onMouseEnter = null,
  onMouseLeave = null,
  type = 'button',
  active = false,
  disabled = false,
  scrollOffset, // <-- added: optional per-call offset in px
}) {
  const scrollTo = useSmoothScroll(); // hook for hash links

  const commonClassName = `${styles.button} ${styles[variant]} ${
    active ? styles[`active-${variant}`] : ''
  } ${disabled ? styles.disabled : ''}`;

  if (href) {
    const isHashLink = typeof href === 'string' && href.startsWith('#');

    return (
      <Link
        href={href}
        className={commonClassName}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }

          // If it's an internal hash link, prevent default navigation and smooth scroll
          if (isHashLink) {
            e.preventDefault();
            if (onClick) onClick(e);
            // pass optional per-call offset (explicit 0 respected)
            scrollTo(href, scrollOffset);
            return;
          }

          // otherwise preserve any onClick behavior and allow normal navigation
          if (onClick) onClick(e);
        }}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={commonClassName}
        type={type}
        onClick={disabled ? undefined : onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

export default Button;
