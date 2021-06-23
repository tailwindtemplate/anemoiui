import clsx from 'clsx';
import { Section, Carousel, carouselBreakpoint, Heading2, Heading3 } from '../../src';
import { carousel, carouselUser } from '../../src/const';

const ClassItemsCarousel = "max-w-sm bg-gray-800 text-white h-72 flex justify-center";
const ResponsiveCarousel: carouselBreakpoint = {
  '(min-width: 768px)': {
    slidesPerView: 2,
    mode: 'free-snap',
  }, '(min-width: 1200px)': {
    slidesPerView: 3,
    mode: 'free-snap',
  }
};
// Function
const showCarousel = carousel => (carousel.map(({ item }) => (
  <div
    key={item}
    className={clsx('keen-slider__slide', ClassItemsCarousel)}
  >
    {item}
  </div>
))
);
const showCarouselUser = user => (user.map(({ id, img }) => (
  <div
    key={id}
    className="keen-slider__slide w-12 h-12 relative"
  >
    <div className="h-12 relative w-12 mr-4 ">
      <p className="absolute top-0 right-0 bg-green-400 w-3 h-3 rounded-full border-white	border-2" />
      <img className="rounded-full w-12 h-12" src={img} alt={img} />
    </div>
  </div>
))
);
// Render
export default function CarouselControl() {
  return (
      <div className="space-y-4">
          <Heading2>Carousel</Heading2>
          <Heading3>Default Carousel</Heading3>
          <Section className='bg-white'>
              <Carousel>
                  {showCarousel(carousel)}
              </Carousel>
          </Section>
          <Heading3>Loop Autoplay</Heading3>
          <Section className='bg-white'>
              <Carousel loopCarousel={true} spacingPerView={5} autoplay={true} timeAutoplay={1000}>
                {showCarousel(carousel)}
              </Carousel>
          </Section>
          <Heading3>Multiple Slider</Heading3>
          <Section className='bg-white'>
              <Carousel slidesPerView={3} spacingPerView={10}>
                {showCarousel(carousel)}
              </Carousel>
          </Section>
          <Heading3>Free Mode</Heading3>
          <Section className='bg-white'>
              <Carousel slidesPerView={3} snapMode="free" spacingPerView={10} loopCarousel={true} displayDots={true}>
                {showCarousel(carousel)}
              </Carousel>
          </Section>
          <Heading3>Center Slider</Heading3>
          <Section className='bg-white'>
              <Carousel slidesPerView={2} snapMode="free-snap" spacingPerView={10} centerCarousel={true}>
                {showCarousel(carousel)}
              </Carousel>
          </Section>
          <Heading3>Responsive Slider</Heading3>
          <Section className='bg-white'>
              <Carousel slidesPerView={1} snapMode="snap" spacingPerView={10} responsiveCarousel={ResponsiveCarousel}>
              {showCarousel(carousel)}
              </Carousel>
          </Section>
          <Heading3>RTL</Heading3>
          <Section className='bg-white'>
              <Carousel slidesPerView={2} spacingPerView={10} rtlCarousel={false} loopCarousel={true}>
                {showCarousel(carousel)}
              </Carousel>
          </Section>
          <Heading3>Next Prev And Dots</Heading3>
          <Section className='bg-white'>
              <Carousel slidesPerView={1} spacingPerView={10} displayNextPrev={true} displayDots={true}>
                {showCarousel(carousel)}
              </Carousel>
          </Section>
          <Heading3>Chat</Heading3>
          <Section className='bg-white'>
              <Carousel snapMode="free" classCarousel="rounded lg:w-1/3 mx-auto" slidesPerView={5} spacingPerView={0} rtlCarousel={false}>
                {showCarouselUser(carouselUser)}
              </Carousel>
          </Section>
      </div >
  )
};
