/**
 * TeamComponent renders a section with a title and a list of team members.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the team section.
 * @param {Array.<{name: string, position: string, occupation: string, paragraph: string, imageData: {src: string, alt: string}, linkedIn: string, wikipedia: string}>} props.teamArray - An array of objects representing team members.
 * Each object should contain `name` and `role` as strings.
 * @returns {JSX.Element} The rendered team component.
 */

import Image from 'next/image';
import styles from './styles/teamcomponent.module.css';
import { PiLinkedinLogo } from 'react-icons/pi';
import { ImWikipedia } from 'react-icons/im';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';

function TeamComponent({ title, teamArray }) {
  if (!title || !teamArray) return null;

  return (
    <div className={styles.mainParent}>
      <h3 className={styles.heading}>{title}</h3>
      <div className={styles.membersContainer}>
        {teamArray.map((team) => (
          <TeamMember team={team} key={team.name} />
        ))}
      </div>
    </div>
  );
}

function TeamMember({ team }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={styles.cardContainer}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
    >
      <div className={styles.imageAndTitle}>
        <MemberTitle team={team} hovered={hovered} />
      </div>
    </div>
  );
}

function MemberTitle({ team, hovered }) {
  return (
    <div className={styles.titleBox}>
      <Image
        src={team.imageData.src}
        alt={team.imageData.alt}
        width={160}
        height={160}
        className={styles.image}
        draggable={false}
      />

      <AnimatePresence mode="wait">
        {!hovered ? (
          <motion.div
            key="text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={styles.nameBox}
          >
            <h4>{team.name}</h4>
            <p>{team.position}</p>
            {team.occupation && <h6>{team.occupation}</h6>}
          </motion.div>
        ) : (
          <motion.div
            key="bio"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={styles.paragraphBox}
          >
            <AnimatedLineHorizontal />
            <p>{team.paragraph}</p>
            {team.linkedIn && (
              <a href={team.linkedIn} target="blank" className={styles.icon}>
                <PiLinkedinLogo />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TeamComponent;
