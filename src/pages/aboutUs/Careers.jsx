import WordAnimator from '@/components/WordAnimator';
import styles from './styles/careers.module.css';
import Button from '@/components/Button';
import Image from 'next/image';
import Metadata from '@/components/Metadata';

const imageData = {
  src: 'https://bumblebee-dev-files.s3.amazonaws.com/e8cmal-reflecting-ourselves.jpg',
  artistName: 'Oluwaseun Solomon',
  artistUrl:
    'https://www.1952africa.art/artists/b6b315c0-464d-439a-9337-53e8ece97e91',
  work: 'Reflecting Ourselves',
  workUrl:
    'https://www.1952africa.art/works/971f164e-3058-4759-8c91-1ea681cd9219',
};

function Careers() {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image
          width={300}
          height={300}
          src={imageData.src}
          alt={imageData.work}
        />
        <Metadata
          work={imageData.work}
          workUrl={imageData.workUrl}
          artistName={imageData.artistName}
          artistUrl={imageData.artistUrl}
        />
      </div>
      <div className={styles.content}>
        <h3>
          We combine integrity, entrepreneurial drive, and relentless excellence
          — with the humility and teamwork to thrive in dynamic environments.
        </h3>
        <Button variant="secondary" href="/our-people">
          Discover Our People
        </Button>
      </div>
    </section>
  );
}

export default Careers;
