import WordAnimator from '@/components/WordAnimator';
import styles from './styles/celebrateadecade.module.css';
import Button from '@/components/Button';
import Section from '@/components/Section';

function CelebrateADecade() {
  return (
    <Section paddingTop={false} paddingBottom={false}>
      <div className={styles.heading}>
        <WordAnimator text="Celebrate a Decade." as="h3" />
        <span>
          <WordAnimator text="Shape the Next." as="h3" />
        </span>
        <div className={styles.buttonContainer}>
          <Button variant="secondary" href="#rsvp" scrollOffset={80}>
            Confirm Your Attendance
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default CelebrateADecade;
