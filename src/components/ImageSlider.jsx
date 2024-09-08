import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './styles/imageslider.module.css';

function ImageSlider({ imageArray }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500, // Slightly slower transition to delay the next image
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // Slower autoplay interval
    cssEase: 'ease-in-out', // Smoother and more gradual easing
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <Slider {...settings}>
      {imageArray.map((image, index) => (
        <div key={index} className={styles.sliderContainer}>
          {typeof image === 'string' ? (
            <Image
              src={image}
              width={861}
              height={1117}
              alt={`Slide ${index + 1}`}
            />
          ) : (
            <main className={styles.heroMain}>
              <div>
                <h1>{image.heading}</h1>
                <p>{image.paragraph}</p>
                <p>{image.cta.label}</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={image.image}
                  width={861}
                  height={1117}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </main>
          )}
        </div>
      ))}
    </Slider>
  );
}

export default ImageSlider;
