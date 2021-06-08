import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
// Component
import { NextPrev } from './NextPrev';
import { Dots } from './Dots';
// Css
import 'keen-slider/keen-slider.min.css';
import "./style.css";
interface Carousel {
  data?: any[],
  classCarousel?: string,
  classItemsCarousel?: string,
  displayNextPrev?: boolean,
  defaultCarousel?: number,
  autoplay?: boolean,
  timeAutoplay?: number,
  loopCarousel?: boolean,
  slidesPerView?: number,
  spacingPerView?: number,
  snapMode?: "free" | "snap" | "free-snap",
  // Dots
  displayDots?: boolean
  classDots?: string,
  activeDots?: string,
  classItemDots?: string,
  // icon
  iconPathLeft?: string,
  classIconLeft?: string,
  iconPathRight?: string,
  classIconRight?: string,
}
export const Carousel: React.FC<Carousel> = ({
  data,
  displayNextPrev,
  defaultCarousel,
  autoplay,
  timeAutoplay,
  loopCarousel,
  slidesPerView,
  spacingPerView,
  snapMode,
  classCarousel,
  classItemsCarousel,
  // Dots
  activeDots,
  displayDots,
  classDots,
  classItemDots,
  // icon
  iconPathLeft,
  classIconLeft,
  iconPathRight,
  classIconRight
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: defaultCarousel,
    loop: loopCarousel,
    mode: snapMode,
    duration: timeAutoplay,
    slidesPerView: slidesPerView,
    spacing: spacingPerView,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  });
  useEffect(() => {
    const clear = setInterval(() => {
      if (autoplay && slider) {
        slider.next()
      };
    }, 2000)
    return () => {
      clearInterval(clear)
    };
  }, [autoplay, slider]);
  return (
    <div className={classCarousel}>
      <div ref={sliderRef} className="keen-slider">
        {
          data?.map((carousel, index) => (
            <div
              key={index}
              className={`keen-slider__slide ${classItemsCarousel}${index} ${classItemsCarousel}`}
            >
              {carousel.item}
            </div>
          ))
        }
      </div>
      <NextPrev
        onClickNextPrev={(e: any) => e.stopPropagation() || slider.next()}
        pathIcon={iconPathRight}
        displayNextPrev={displayNextPrev}
        slider={slider}
        Alignment={classIconRight}
      />
      <NextPrev
        onClickNextPrev={(e: any) => e.stopPropagation() || slider.prev()}
        pathIcon={iconPathLeft}
        displayNextPrev={displayNextPrev}
        slider={slider}
        Alignment={classIconLeft}
      />
      {
        slider &&
        (
          <div className={`${classDots}`}>
            {
              [...Array(slider.details().size)].map((idx, index) => (
                <Dots
                  classItemDots={classItemDots}
                  activeDots={activeDots}
                  displayDots={displayDots}
                  index={index}
                  currentSlide={currentSlide}
                  onClick={() => { slider.moveToSlideRelative(index) }}
                />
              ))}
          </div>
        )
      }
    </div>
  );
};