import DoubleSection from './DoubleSection';

const data1 = {
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
  heading: 'A Decade of Transforming Africa’s Future',
  paragraph:
    'Over the last decade, Moneda Invest Africa has been at the forefront of reshaping Africa’s credit landscape, providing alternative financing solutions to SMEs operating in critical sectors across the continent. What began as a simple yet powerful mission to provide alternative credit and execution expertise to critical SMEs has evolved into a dynamic force for economic change, empowerment, and sustainable growth. Our journey has been nothing short of transformative, not only for the businesses we support but for the African economy at large. ',
  contentFirst: false,
};

const data2 = {
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
    'In 2014, Africa’s economy was rocked by the sharp decline in global commodity prices. The crash exposed a systemic issue: <strong>while Africa sat on vast natural resources, its local contractors were left unable to access the capital they needed to execute major contracts</strong>. Faced with liquidity crises, many African SMEs, despite having profitable contracts, found themselves unable to fulfill their potential. <br/><br/>Moneda was born to solve this very problem. We set out with a singular purpose: to provide alternative credit solutions and execution expertise to Africa’s critical value chains, ensuring that local contractors could access the capital they needed to scale and thrive. By addressing these financing gaps, we began the process of transforming Africa’s natural resources into wealth that remains in the hands of Africans. ',
  contentFirst: true,
};

function TransformingAfrica() {
  return <DoubleSection data1={data1} data2={data2} />;
}

export default TransformingAfrica;
