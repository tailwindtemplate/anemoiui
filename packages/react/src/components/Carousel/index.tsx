import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
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
  iconLeft?: any,
  iconRight?: any,
  classIconLeft?: string,
  classIconRight?: string
}
export const Carousel = ({
  data,
  displayNextPrev = true,
  defaultCarousel = 0,
  autoplay = false,
  timeAutoplay = 1000,
  loopCarousel = true,
  slidesPerView = 1,
  spacingPerView = 15,
  snapMode = "snap",
  classCarousel = "carousel relative mt-4",
  classItemsCarousel = "max-w-sm bg-gray-800 text-white h-60 flex justify-center",
  // Dots
  activeDots = "bg-gray-900",
  displayDots = true,
  classDots = "flex pt-2 justify-center",
  classItemDots = "rounded-none	w-2	h-2 bg-gray-300	p-2 m-2 rounded-2xl",
  // icon
  iconLeft = ChevronLeftIcon,
  iconRight = ChevronRightIcon,
  classIconLeft = "absolute text-green-600 cursor-pointer top-2/4 w-8 h-8 left-1",
  classIconRight = "absolute text-green-600 cursor-pointer top-2/4 w-8 h-8 right-1"

}: Carousel) => {
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
        onClickNextPrev={(e: any) => e.stopPropagation() || slider.prev()}
        Icon={iconLeft}
        Alignment={classIconLeft}
        displayNextPrev={displayNextPrev}
        slider={slider}
      />
      <NextPrev
        onClickNextPrev={(e: any) => e.stopPropagation() || slider.next()}
        Icon={iconRight}
        Alignment={classIconRight}
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
                  key={index}
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