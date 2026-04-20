import DoubleSection from './DoubleSection';

const doubleSectionData = [
  {
    imageData: {
      src: 'https://bumblebee-dev-files.s3.amazonaws.com/agwa87-oduduwas-descent.JPG',
      art: true,
      metadata: {
        artistName: 'Ademola Ojo',
        artistUrl:
          'https://www.1952africa.art/artists/5b6fd4f0-8aa4-4cce-9751-362f55cf913a',
        work: "Oduduwa's Descent",
        workUrl:
          'https://www.1952africa.art/works/71bb2985-5c02-4b2d-ac51-9f7efb5d0602',
      },
    },
    heading: 'The Path Forward – Scaling for Impact',
    paragraph:
      'As we look to the next decade, Moneda is more committed than ever to scaling its operations and impact. <strong>We are raising $250 million through our Moneda Capital Credit Fund, which will continue to support SMEs in Africa’s most critical sectors.</strong> With the FNB MoU, the Moneda-Ino merger, and our focus on sustainable projects, we are poised to expand our footprint and continue empowering African SMEs to execute projects that benefit their communities and contribute to economic growth.',
    contentFirst: true,
  },
  {
    imageData: {
      src: 'https://bumblebee-dev-files.s3.amazonaws.com/tm4sel-22.jpg',
      art: true,
      metadata: {
        artistName: 'Ed Saleem',
        artistUrl:
          'https://www.1952africa.art/artists/3fb12faa-cd0f-49ee-a9a6-814354c15302',
        work: 'In search for greener pastures',
        workUrl:
          'https://www.1952africa.art/works/46eb1e2c-c523-4869-975d-e53191215b38',
      },
    },
    heading: 'Join Us in Shaping Africa’s Future',
    paragraph:
      'The journey we’ve embarked on is just the beginning. As we continue to unlock new opportunities for African businesses, we invite investors, partners, and stakeholders to join us in this mission. Together, we can build a future where Africa’s natural resources are fully harnessed, its communities are empowered, and its SMEs are the driving force behind a sustainable, prosperous continent. ',
    contentFirst: false,
    button: true,
    buttonData: { label: 'Partner with us', link: '/contact' },
  },
];

function ScalingAfrica() {
  return <DoubleSection doubleSectionData={doubleSectionData} />;
}

export default ScalingAfrica;
