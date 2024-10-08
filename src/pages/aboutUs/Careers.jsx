import WordAnimator from '@/components/WordAnimator';
import styles from './styles/careers.module.css';
import Button from '@/components/Button';

function Careers() {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundImage} />
      <h3>
        We seek individuals of exceptional integrity, entrepreneurial drive, and
        a relentless pursuit of excellence, collaborative team players who can
        thrive in a dynamic environment.
      </h3>
      <Button variant="secondary" href="/our-people">
        Discover Our People
      </Button>
    </section>
  );
}

export default Careers;
