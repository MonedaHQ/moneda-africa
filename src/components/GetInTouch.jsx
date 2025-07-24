import Button from './Button';
import LearnMoreButton from './LearnMoreButton';
import Section from './Section';
import styles from './styles/getintouch.module.css';
import WordAnimator from './WordAnimator';

function GetInTouch({ venture, color = 'white' }) {
  return (
    <Section color={color}>
      <div className={styles.container}>
        <WordAnimator
          text={`Get in touch to discover more about our ${venture}`}
          as="h2"
        />
        <LearnMoreButton buttonLabel="Contact us" buttonLink="/contact" />
      </div>
    </Section>
  );
}

export default GetInTouch;
