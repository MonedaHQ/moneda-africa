import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';

import styles from './styles/capitalbutton.module.css';

type CapitalButtonProps = {
  children: ReactNode;
  /**
   * solid  — orange filled pill (primary CTA, dark or light bg)
   * ghost  — transparent with white border (secondary CTA on dark bg)
   * toggle — outline selector button for form toggle groups
   * nav    — plain text link style for navigation items
   */
  variant: 'solid' | 'ghost' | 'toggle' | 'nav';
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'button' | 'submit' | 'reset';
  /** Toggle variant only: whether this button is the selected option */
  active?: boolean;
  /** Makes button full-width with no border-radius and larger padding */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Extra class for layout-specific overrides (e.g. border-top on card CTA) */
  className?: string;
};

function CapitalButton({
  children,
  variant,
  href,
  onClick,
  type = 'button',
  active = false,
  fullWidth = false,
  disabled = false,
  className,
}: CapitalButtonProps) {
  const scrollTo = useSmoothScroll();

  const cls = [
    styles.btn,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    active && variant === 'toggle' ? styles.toggleActive : '',
    disabled ? styles.disabled : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    const isHash = href.startsWith('#');
    return (
      <Link
        href={href}
        className={cls}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          if (isHash) {
            e.preventDefault();
            onClick?.(e);
            scrollTo(href);
            return;
          }
          onClick?.(e);
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cls}
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default CapitalButton;
