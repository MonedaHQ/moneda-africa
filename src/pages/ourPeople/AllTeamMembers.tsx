import Section from '@/components/Section';
import TeamComponent from './components/TeamComponent';
import { advisoryBoard, managementTeam } from '@/data/team';

import styles from './styles/allteammembers.module.css';

function AllTeamMembers() {
  return (
    <Section>
      <div className={styles.main}>
        <TeamComponent title="Board Members" teamArray={advisoryBoard} />
        <TeamComponent title="Management Team" teamArray={managementTeam} />
      </div>
    </Section>
  );
}

export default AllTeamMembers;
