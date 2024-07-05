import React, { useState, useEffect, useRef, useContext } from "react";
import { AngleLeftCircle } from "../svg-icons/icons";
import AppContext from "../../context/context";

const SimpleSlider = ({ slides, autoPlay = true, interval = 3000 }) => {
  const appCtx = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(
    appCtx.activeCollectionIndex
  );
  const slideInterval = useRef(null);

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    appCtx.updateCollectionIndex(currentIndex);
    // eslint-disable-next-line
  }, [currentIndex]);

  const startSlideShow = () => {
    stopSlideShow();
    if (!autoPlay) {
      return false;
    }
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const prevSlide = () => {
    stopSlideShow();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
    startSlideShow();
  };

  const nextSlide = () => {
    stopSlideShow();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    startSlideShow();
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            onMouseEnter={() => stopSlideShow()}
            onMouseLeave={() => startSlideShow()}
          >
            <React.Fragment key={index}>{slide}</React.Fragment>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="flex items-center justify-end gap-x-3 w-full mt-2 mb-0 md:mb-4">
          <div className="text-center flex items-center justify-center">
            <button onClick={prevSlide}>
              <AngleLeftCircle />
            </button>
          </div>

          <div className="text-center flex items-center justify-center">
            <button onClick={nextSlide}>
              <AngleLeftCircle className="rotate-180" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleSlider;
