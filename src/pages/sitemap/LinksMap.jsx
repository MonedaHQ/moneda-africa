import Section from '@/components/Section';
import styles from './styles/linksmap.module.css';
import { homeMenuLinks } from '@/data/menu';
import { footer } from '@/data/footer';
import Button from '@/components/Button';
import CharacterAnimator from '@/components/CharacterAnimator';

const menu = [...homeMenuLinks, ...footer];

function LinksMap() {
  return (
    <Section color="darkBrown">
      <main className={styles.main}>
        <AllLinks />
        <RotatingImage />
      </main>
    </Section>
  );
}

function AllLinks() {
  return (
    <div>
      <CharacterAnimator text="Pages" as="h1" />
      <ul className={styles.linkList}>
        {menu.map((linkData) => (
          <li className={linkData.path ? styles.hoverLink : styles.noHoverLink}>
            <div className={styles.line} />
            <LinkBox data={linkData} key={linkData.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function LinkBox({ data }) {
  const { path } = data;
  if (!path) {
    return (
      <div className={styles.dropDownList}>
        <h2>{data.label}</h2>

        {data.dropdown.map((link) => (
          <Button variant="link-dark-big" href={link.path}>
            {link.label}
          </Button>
        ))}
      </div>
    );
  } else {
    return (
      <Button variant="link-dark-big" href={data.path}>
        {data.label}
      </Button>
    );
  }
}

function RotatingImage() {
  return (
    <img
      src="/assets/coin.png"
      alt="kwa afrika logo"
      className={styles.coin}
      draggable={false}
    />
  );
}

export default LinksMap;
