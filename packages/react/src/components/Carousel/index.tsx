import React, { useState, useEffect, PropsWithChildren } from 'react';
import { useKeenSlider } from 'keen-slider/react';
// Icon
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
// Component
import { NextPrev } from './next-prev';
import { Dot } from './dot';
// Css
import 'keen-slider/keen-slider.min.css';
import { TOptionsEvents, TOptions } from 'keen-slider';
// Check Type Props
export type carouselBreakpoint = {
  [key: string]: Omit<TOptionsEvents, 'breakpoints'>
}
type Carousel = {
  rtlCarousel?: boolean,
  responsiveCarousel?: carouselBreakpoint,
  classCarousel?: string,
  displayNextPrev?: boolean,
  defaultCarousel?: number,
  autoplay?: boolean,
  timeAutoplay?: number,
  loopCarousel?: boolean,
  slidesPerView?: number,
  spacingPerView?: number,
  centerCarousel?: boolean
  snapMode?: "free" | "snap" | "free-snap",
  // Dot
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
const ActiveDots = "bg-gray-900";
const DisplayDots = false;
const ClassDots = "flex pt-2 justify-center";
const ClassItemDots = "rounded-none	w-2	h-2 bg-gray-300	p-2 m-2 rounded-2xl";
const ClassIconLeft = "absolute text-white font-semibold font-black cursor-pointer top-2/4 w-8 h-8 left-1";
const ClassIconRight = "absolute text-white font-semibold font-black cursor-pointer top-2/4 w-8 h-8 right-1";
// Render
export const Carousel = ({
  children,
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
  // Dot
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
}: PropsWithChildren<Carousel> & TOptionsEvents & TOptions) => {
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
        {children}
        {/* --------------------------Button Prev--------------------------*/}
        <NextPrev
          onClickNextPrev={(e: any) => e.stopPropagation() || slider.prev()}
          Icon={iconLeft}
          alignment={classIconLeft}
          displayNextPrev={displayNextPrev}
          slider={slider}
          disabled={currentSlide === 0}
        />
        {/* --------------------------Button Next--------------------------*/}
        <NextPrev
          onClickNextPrev={(e: any) => e.stopPropagation() || slider.next()}
          Icon={iconRight}
          alignment={classIconRight}
          displayNextPrev={displayNextPrev}
          slider={slider}
          disabled={currentSlide === slider?.details().size - 1}
        />
      </div>
      {/*--------------------------Dot--------------------------*/}
      {
        slider &&
        (
          <div className={classDots}>
            {
              [...Array(slider.details().size)].map((idx, index) => (
                <Dot
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