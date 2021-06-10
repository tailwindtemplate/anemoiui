import { Section, Carousel } from '../../src';
const tileClassName = "font-semibold p-2 duration-200 text-gray-500 border-b	mb-4";
const ResponsiveCarousel = {
  "(min-width: 768px)": {
    slidesPerView: 2,
    mode: "free-snap",
  }, "(min-width: 1200px)": {
    slidesPerView: 3,
    mode: "free-snap",
  }
};
const carouselClassName = "border p-4 mb-8 rounded";
export default function CarouselControl() {
  return (
    <Section>
      <div className={carouselClassName}>
        <h3 className={tileClassName} > Default Carousel</h3>
        <Carousel />
      </div>
      <div className={carouselClassName}>
        <h3 className={tileClassName} >Loop Autoplay</h3>
        <Carousel loopCarousel={true} spacingPerView={5} autoplay={true} timeAutoplay={1000} />
      </div>
      <div className={carouselClassName}>
        <h3 className={tileClassName}>Multiple Slider</h3>
        <Carousel slidesPerView={3} spacingPerView={10} />
      </div>
      <div className={carouselClassName}>
        <h3 className={tileClassName}>Free Mode</h3>
        <Carousel slidesPerView={3} snapMode="free" spacingPerView={10} loopCarousel={true} displayDots={true} />
      </div>
      <div className={carouselClassName}>
        <h3 className={tileClassName}>Center Slider</h3>
        <Carousel slidesPerView={2} snapMode="free-snap" spacingPerView={10} centerCarousel={true} />
      </div>
      <div className={carouselClassName}>
        <h3 className={tileClassName}>Responsive Slider</h3>
        <Carousel slidesPerView={1} snapMode="snap" spacingPerView={10} responsiveCarousel={ResponsiveCarousel} />
      </div>
      <div className={carouselClassName}>
        <h3 className={tileClassName}>RTL</h3>
        <Carousel slidesPerView={2} spacingPerView={10} rtlCarousel={false} loopCarousel={true} />
      </div>
      <div className={carouselClassName}>
        <h3 className={tileClassName}>Next Prev And Dots</h3>
        <Carousel slidesPerView={1} spacingPerView={10} displayNextPrev={true} displayDots={true} />
      </div>
    </Section >
  )
};