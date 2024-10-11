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

function TeamComponent({ title, teamArray }) {
  if (!title || !teamArray) return;

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
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageAndTitle}>
        <MemberTitle
          name={team.name}
          position={team.position}
          occupation={team.occupation}
          imageData={team.imageData}
        />
      </div>
      <div className={styles.contentBox}>
        <div className={styles.icons}>
          {team.linkedIn && (
            <a href={team.linkedIn} target="blank" className={styles.icon}>
              <PiLinkedinLogo />
            </a>
          )}
          {team.wikipedia && (
            <a href={team.wikipedia} target="blank" className={styles.icon}>
              <ImWikipedia />
            </a>
          )}
        </div>
        <p>{team.paragraph}</p>
      </div>
    </div>
  );
}

function MemberTitle({ name, position, occupation, imageData }) {
  return (
    <div className={styles.titleBox}>
      <Image
        src={imageData.src}
        alt={imageData.alt}
        width={160}
        height={160}
        className={styles.image}
        draggable={false}
      />

      <div>
        <h4>{name}</h4>
        <p>{position}</p>
        {occupation && <h6>{occupation}</h6>}
      </div>
    </div>
  );
}

export default TeamComponent;
