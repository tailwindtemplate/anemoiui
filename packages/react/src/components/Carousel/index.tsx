import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
// Icon
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
// Component
import { NextPrev } from './NextPrev';
import { Dots } from './Dots';
// Css
import 'keen-slider/keen-slider.min.css';
import { TOptionsEvents } from 'keen-slider';
// Check Type Props
type Carousel = {
  data?: any[],
  rtlCarousel?: boolean,
  responsiveCarousel?: any,
  classCarousel?: string,
  classItemsCarousel?: string,
  displayNextPrev?: boolean,
  defaultCarousel?: number,
  autoplay?: boolean,
  timeAutoplay?: number,
  loopCarousel?: boolean,
  slidesPerView?: number,
  spacingPerView?: number,
  centerCarousel?: boolean
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
// Default Props
const Data = [{ "item": "1" }, { "item": "2" }, { "item": "3" }, { "item": "4" }, { "item": "5" }, { "item": "6" }];
const RtlCarousel = false;
const ResponsiveCarousel = {};
const DisplayNextPrev = false;
const DefaultCarousel = 0;
const Autoplay = false;
const TimeAutoplay = 1000;
const LoopCarousel = false;
const SlidesPerView = 1;
const SpacingPerView = 5;
const SnapMode = "snap";
const CenterCarousel = false;
const ClassCarousel = "carousel relative";
const ClassItemsCarousel = "max-w-sm bg-gray-800 text-white h-72 flex justify-center";
const ActiveDots = "bg-gray-900";
const DisplayDots = false;
const ClassDots = "flex pt-2 justify-center";
const ClassItemDots = "rounded-none	w-2	h-2 bg-gray-300	p-2 m-2 rounded-2xl";
const ClassIconLeft = "absolute text-white font-semibold font-black cursor-pointer top-2/4 w-8 h-8 left-1";
const ClassIconRight = "absolute text-white font-semibold font-black cursor-pointer top-2/4 w-8 h-8 right-1";
// Render
export const Carousel = ({
  data = Data,
  rtlCarousel = RtlCarousel,
  responsiveCarousel = ResponsiveCarousel,
  displayNextPrev = DisplayNextPrev,
  defaultCarousel = DefaultCarousel,
  autoplay = Autoplay,
  timeAutoplay = TimeAutoplay,
  loopCarousel = LoopCarousel,
  slidesPerView = SlidesPerView,
  spacingPerView = SpacingPerView,
  snapMode = SnapMode,
  centerCarousel = CenterCarousel,
  classCarousel = ClassCarousel,
  classItemsCarousel = ClassItemsCarousel,
  // Dots
  activeDots = ActiveDots,
  displayDots = DisplayDots,
  classDots = ClassDots,
  classItemDots = ClassItemDots,
  // icon
  iconLeft = ChevronLeftIcon,
  iconRight = ChevronRightIcon,
  classIconLeft = ClassIconLeft,
  classIconRight = ClassIconRight,
  ...rest
}: Carousel & TOptionsEvents) => {
  // Create State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: defaultCarousel,
    loop: loopCarousel,
    mode: snapMode,
    duration: timeAutoplay,
    slidesPerView: slidesPerView,
    spacing: spacingPerView,
    centered: centerCarousel,
    rtl: rtlCarousel,
    breakpoints: responsiveCarousel,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    ...rest
  });
  // Effect
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
  // Return
  return (
    <div className={classCarousel}>
      <div ref={sliderRef} className="keen-slider">
        {/* -------------Show Carousel------------- */}
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
        {/* -------------Button Prev------------- */}
        <NextPrev
          onClickNextPrev={(e: any) => e.stopPropagation() || slider.prev()}
          Icon={iconLeft}
          Alignment={classIconLeft}
          displayNextPrev={displayNextPrev}
          slider={slider}
          disabled={currentSlide === 0}
        />
        {/* -------------Button Next------------- */}
        <NextPrev
          onClickNextPrev={(e: any) => e.stopPropagation() || slider.next()}
          Icon={iconRight}
          Alignment={classIconRight}
          displayNextPrev={displayNextPrev}
          slider={slider}
          disabled={currentSlide === slider?.details().size - 1}
        />
      </div>
      {/* -------------Dots------------- */}
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