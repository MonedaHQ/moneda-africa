import Section from '@/components/Section';
import styles from './styles/transformerawards.module.css';
import Image from 'next/image';
import WordAnimator from '@/components/WordAnimator';

function TransformerAwards() {
  return (
    <div className={styles.transformerAwards}>
      <div className={styles.backgroundImg}>
        <Image
          src="/assets/heroImages/background-img.jpg"
          width={400}
          height={400}
          alt="Moneda Motif"
        />
      </div>
      <div className={styles.coin}>
        <Image
          src="/assets/coin.png"
          width={400}
          height={400}
          alt="Moneda Motif"
        />
      </div>
      <section className={styles.content}>
        <Heading />
        <Paragraph />
        <TransformerImage />
      </section>
    </div>
  );
}

function Heading() {
  return (
    <div className={styles.heading}>
      <p>Introducing the</p>
      <WordAnimator as="h2" text="Moneda Transformer Awards" />
    </div>
  );
}

function Paragraph() {
  return (
    <p className={styles.paragraph}>
      To be launched at our 10th anniversary event, Moneda 10 over 10, the{' '}
      <strong>Moneda Transformer Awards</strong> will honour individuals and
      institutions who embody the spirit of transformation, the bold thinkers
      and doers redefining what it means to build, invest, and lead in Africa. 
      <br />
      <br />
      These are the catalysts whose impact continues to prove that Africa’s
      growth will be financed, built, and owned by its own people. 
    </p>
  );
}

function TransformerImage() {
  return (
    <div className={styles.transformerImage}>
      <Image
        src="/assets/tenoverten/transformer-sideways.png"
        width={1353.3667}
        height={1183.3849}
        alt="Moneda Transformer Award"
        draggable={false}
      />
    </div>
  );
}

export default TransformerAwards;
