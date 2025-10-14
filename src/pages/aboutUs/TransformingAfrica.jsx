import DoubleSection from './DoubleSection';

const doubleSectionData = [
  {
    imageData: {
      src: 'https://bumblebee-dev-files.s3.amazonaws.com/osqdd4-illusion-of-plenty.jpg',
      art: true,
      metadata: {
        artistName: 'Tochuwku Orazulike',
        artistUrl:
          'https://www.1952africa.art/artists/7dea794e-4ab3-4202-bbbc-67beb8f0d257',
        work: 'Illusion of Plenty',
        workUrl:
          'https://www.1952africa.art/works/9804467c-c5ea-45c0-b7aa-4ed36e30ec9c',
      },
    },
    heading: 'Transforming Africa’s Future',
    paragraph:
      'Moneda has been at the forefront of reshaping <strong>Africa’s credit landscape</strong>, pioneering <strong>alternative credit</strong> solutions for <strong>critical SMEs</strong> across agriculture, energy, mining, and infrastructure. What began as a mission to close financing gaps with <strong>African alternative credit</strong> and execution expertise</strong> has evolved into a dynamic force for empowerment, sustainable growth, and continental transformation. Our journey has been transformative not only for the businesses we support but also for the wider African economy.',
    contentFirst: false,
  },
  {
    imageData: {
      src: 'https://bumblebee-dev-files.s3.amazonaws.com/mby9ny-fading-riches.jpg',
      art: true,
      metadata: {
        artistName: 'Tochuwku Orazulike',
        artistUrl:
          'https://www.1952africa.art/artists/7dea794e-4ab3-4202-bbbc-67beb8f0d257',
        work: 'Fading Riches',
        workUrl:
          'https://www.1952africa.art/works/56560b08-1841-4a57-9b55-7a1043d156b5',
      },
    },
    heading: 'A Vision Born from Necessity',
    paragraph:
      'In 2014, Africa’s economy was shaken by the sharp decline in global commodity prices. The crash exposed a systemic issue: while Africa was rich in natural resources, <strong>SMEs in natural resource value chains</strong> struggled to access the capital required to execute profitable contracts. Liquidity shortages left local contractors unable to fulfill their potential, stalling growth and wealth creation. <br/><br/>Moneda was created to solve this challenge. From the start, our purpose has been clear: to provide <strong>private credit in Africa</strong> and technical expertise',
    contentFirst: true,
  },
];

function TransformingAfrica() {
  return <DoubleSection doubleSectionData={doubleSectionData} />;
}

export default TransformingAfrica;
