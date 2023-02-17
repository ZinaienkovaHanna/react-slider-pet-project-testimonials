import { useState } from 'react';
import slides from '../data/slides';
import styles from './Testimonials.module.css';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className={styles.bgContainer}>
        <div className={styles.textContainer}>
          <p>" {slides[currentIndex].text} "</p>
          <h3>{slides[currentIndex].name}</h3>
          <h4>{slides[currentIndex].profession}</h4>
        </div>
        <div className={styles.imgContainer}>
          <img
            src={`../images/image-${slides[currentIndex].img}.jpg`}
            alt="tanya"
            className={styles.imgName}
          />
          <div className={styles.btns}>
            <button onClick={goToPrevious}>
              <img src="../images/icon-prev.svg" alt="prev" />
            </button>
            <button onClick={goToNext}>
              <img src="../images/icon-next.svg" alt="next" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
