import { useState, useEffect, PropsWithChildren } from 'react';
import { useKeenSlider } from 'keen-slider/react';
// Component
import { NextPrev } from './NextPrev';
import { Dots } from './Dots';
// Css
import 'keen-slider/keen-slider.min.css';
type Carousel = {
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
  iconLeft?: Object,
  iconRight?: Object,

}
export const Carousel = ({
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
  iconLeft,
  iconRight,

}: PropsWithChildren<Carousel>) => {
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
              className={`keen-slider__slide ${classItemsCarousel}`}
            >
              {carousel.item}
            </div>
          ))
        }
      </div>

      <NextPrev
        onClickNextPrev={(e: any) => e.stopPropagation() || slider.next()}
        icon={iconLeft}
        displayNextPrev={displayNextPrev}
        slider={slider}
      />
      <NextPrev
        onClickNextPrev={(e: any) => e.stopPropagation() || slider.prev()}
        icon={iconRight}
        displayNextPrev={displayNextPrev}
        slider={slider}
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