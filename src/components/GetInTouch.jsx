import Button from './Button';
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
        <Button variant="link-underline">Contact us</Button>
      </div>
    </Section>
  );
}

export default GetInTouch;
