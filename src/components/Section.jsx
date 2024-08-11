import styles from './styles/section.module.css';

function Section({
  children,
  color = 'light',
  paddingTop = true,
  paddingBottom = true,
}) {
  return (
    <section
      className={`${styles.section} ${paddingTop ? '' : styles.noTopPad} ${
        styles[color]
      } ${paddingBottom ? '' : styles.noBottomPad}`}
    >
      <main className={`${styles.margin} `}>{children}</main>
    </section>
  );
}

export default Section;
