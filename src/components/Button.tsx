import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';

import styles from './styles/button.module.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string | null;
  variant: string;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
  disabled?: boolean;
  scrollOffset?: number;
};

function Button({
  children,
  onClick,
  href = null,
  variant,
  onMouseEnter,
  onMouseLeave,
  type = 'button',
  active = false,
  disabled = false,
  scrollOffset,
}: ButtonProps) {
  const scrollTo = useSmoothScroll();

  const commonClassName = `${styles.button} ${styles[variant]} ${
    active ? styles[`active-${variant}`] : ''
  } ${disabled ? styles.disabled : ''}`;

  if (href) {
    const isHashLink = href.startsWith('#');

    return (
      <Link
        href={href}
        className={commonClassName}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }

          if (isHashLink) {
            e.preventDefault();
            onClick?.(e);
            scrollTo(href, scrollOffset);
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

export default Button;
