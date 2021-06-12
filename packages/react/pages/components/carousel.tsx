import clsx from 'clsx';
// Component
import { Section, Carousel1 } from '../../src';
//Default Data
import { carousel } from '../../const';
const titleClassName = "font-semibold p-2 duration-200 text-gray-500 border-b	mb-4";
const ClassItemsCarousel = "max-w-sm bg-gray-800 text-white h-72 flex justify-center";
const carouselClassName = "border p-4 mb-8 rounded";
const ResponsiveCarousel = {
  "(min-width: 768px)": {
    slidesPerView: 2,
    mode: "free-snap",
  }, "(min-width: 1200px)": {
    slidesPerView: 3,
    mode: "free-snap",
  }
};
// Function
const showCarousel = (carousel) => (carousel.map(({ item }) => (
  <div
    key={item}
    className={clsx('keen-slider__slide', ClassItemsCarousel)}
  >
    {item}
  </div>
)));
// Render
export default function CarouselControl() {
  return (
    <Section>
      <div className={carouselClassName}>
        <h3 className={titleClassName} > Default Carousel</h3>
        <Carousel1 >
          {showCarousel(carousel)}
        </Carousel1>
      </div>
      <div className={carouselClassName}>
        <h3 className={titleClassName} >Loop Autoplay</h3>
        <Carousel1 loopCarousel={true} spacingPerView={5} autoplay={true} timeAutoplay={1000}>
          {showCarousel(carousel)}
        </Carousel1>
      </div>
      <div className={carouselClassName}>
        <h3 className={titleClassName}>Multiple Slider</h3>
        <Carousel1 slidesPerView={3} spacingPerView={10}>
          {showCarousel(carousel)}
        </Carousel1>
      </div>
      <div className={carouselClassName}>
        <h3 className={titleClassName}>Free Mode</h3>
        <Carousel1 slidesPerView={3} snapMode="free" spacingPerView={10} loopCarousel={true} displayDots={true}>
          {showCarousel(carousel)}
        </Carousel1>
      </div>
      <div className={carouselClassName}>
        <h3 className={titleClassName}>Center Slider</h3>
        <Carousel1 slidesPerView={2} snapMode="free-snap" spacingPerView={10} centerCarousel={true}>
          {showCarousel(carousel)}
        </Carousel1>
      </div>
      <div className={carouselClassName}>
        <h3 className={titleClassName}>Responsive Slider</h3>
        <Carousel1 slidesPerView={1} snapMode="snap" spacingPerView={10} responsiveCarousel={ResponsiveCarousel}>
          {showCarousel(carousel)}
        </Carousel1>
      </div>
      <div className={carouselClassName}>
        <h3 className={titleClassName}>RTL</h3>
        <Carousel1 slidesPerView={2} spacingPerView={10} rtlCarousel={false} loopCarousel={true}>
          {showCarousel(carousel)}
        </Carousel1>
      </div>
      <div className={carouselClassName}>
        <h3 className={titleClassName}>Next Prev And Dots</h3>
        <Carousel1 slidesPerView={1} spacingPerView={10} displayNextPrev={true} displayDots={true}>
          {showCarousel(carousel)}
        </Carousel1>
      </div>
    </Section >
  )
};