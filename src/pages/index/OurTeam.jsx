import Section from '@/components/Section';
import WordAnimator from '@/components/WordAnimator';

import styles from './styles/ourteam.module.css';
import Image from 'next/image';
import { managementTeam } from '@/data/team';
import { truncateString } from '@/utils/helpers';

import { PiLinkedinLogo } from 'react-icons/pi';
import { ImWikipedia } from 'react-icons/im';
import Button from '@/components/Button';

import { GoArrowRight } from 'react-icons/go';

function OurTeam() {
  return (
    <Section>
      <div className={styles.main}>
        <WordAnimator text="Our People" as="h3" />
        <div className={styles.teamContainer}>
          {managementTeam.map((member) => (
            <TeamCard member={member} key={member.name} />
          ))}
        </div>
        <div className={styles.cta}>
          <h4></h4>
          <Button variant="link-light">
            View All Members <GoArrowRight />
          </Button>
        </div>
      </div>
    </Section>
  );
}

function TeamCard({ member }) {
  const paragraph = truncateString(member.paragraph, 14);
  return (
    <div className={styles.teamCard}>
      <div className={styles.imageContainer}>
        <Image
          width={343.65}
          height={254.96}
          src={member.imageData.src}
          alt={member.imageData.alt}
          draggable={false}
        />
      </div>
      <div className={styles.content}>
        <h5>{member.name}</h5>
        <h6>{member.position}</h6>
        <p>{paragraph}</p>
        <div className={styles.icons}>
          <a href={member.linkedIn} target="blank" className={styles.icon}>
            <PiLinkedinLogo />
          </a>
          {member.wikipedia && (
            <a href={member.wikipedia} target="blank" className={styles.icon}>
              <ImWikipedia />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
