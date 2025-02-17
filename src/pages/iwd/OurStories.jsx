import Section from '@/components/Section';
import styles from './styles/ourstories.module.css';
import { useState } from 'react';
import { getEmbedLink } from '@/utils/helpers';
import Image from 'next/image';
import { IoLogoLinkedin } from 'react-icons/io';
import { PiInstagramLogoFill, PiYoutubeLogoFill } from 'react-icons/pi';

const data = [
  {
    link: 'https://www.youtube.com/watch?v=OrkarwdE364&list=PLTea_v3Y6e-vZkeTMmWqwIg7HPvfQoFaj',
    name: 'Nkechi Amangbo',
    image: {
      imageSrc: '/assets/iwdAssets/nk.jpg',
      alt: 'A photo of Nkechi Amangbo',
    },
  },
  // {
  //   link: 'https://www.youtube.com/watch?v=tnltNkowUqk&list=PLTea_v3Y6e-slle8mBzs1bpQobjMKsyvc&index=2',
  //   name: 'Jumoke Adekanmi',
  //   image: {
  //     imageSrc: '/assets/iwdAssets/jumoke.jpg',
  //     alt: 'A photo of Jumoke Adekanmi',
  //   },
  // },
  // {
  //   link: 'https://www.youtube.com/watch?v=50yF_CbIhiw&list=PLTea_v3Y6e-slle8mBzs1bpQobjMKsyvc&index=1',
  //   name: 'Ebi Sese',
  //   image: {
  //     imageSrc: '/assets/iwdAssets/ebi.jpg',
  //     alt: 'A photo of Ebi Sese',
  //   },
  // },
];

function OurStories() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const socialMedia = [
    {
      icon: <IoLogoLinkedin />,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/company/moneda-invest/',
    },
    {
      icon: <PiInstagramLogoFill />,
      title: 'Instagram',
      link: 'https://www.instagram.com/monedainvest/',
    },
    {
      icon: <PiYoutubeLogoFill />,
      title: 'YouTube',
      link: 'https://www.youtube.com/@monedainvest',
    },
  ];

  return (
    <Section>
      <main className={styles.main}>
        <h2>Listen to our stories</h2>
        <div className={styles.storiesContainer}>
          <iframe
            width="560"
            height="315"
            src={`${getEmbedLink(data.at(currentVideo).link)}?rel=0`}
            title={data.at(0).name}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className={styles.iFrame}
          />
          <div className={styles.content}>
            <p>
              Leadership takes many forms. Hear from inspiring women in
              leadership as they share their experiences, challenges, and the
              power of accelerating action.
            </p>
            <div className={styles.women}>
              {data.map((item, index) => (
                <div
                  key={item.name}
                  onClick={() => setCurrentVideo(index)}
                  className={`${styles.woman} ${
                    currentVideo === index && styles.active
                  }`}
                >
                  <Image
                    width={60}
                    height={60}
                    src={item.image.imageSrc}
                    alt={item.image.alt}
                  />{' '}
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <h4>Follow us on Social Media</h4>
          <div className={styles.socialLinks}>
            {socialMedia.map((link) => (
              <a key={link.link} href={link.link} className={styles.button}>
                {link.icon} <p>{link.title}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
    </Section>
  );
}

export default OurStories;
