import { Section, Carousel } from '../../src';
export default function CarouselControl() {
  const data = [
    { "item": "1" },
    { "item": "2" },
    { "item": "3" },
    { "item": "4" },
    { "item": "5" },
    { "item": "6" }
  ];
  return (
    <Section>
      <Carousel
        data={data}
      />
      <Carousel
        slidesPerView={3}
        data={data}
        displayNextPrev={false}
        snapMode="free"
      />
    </Section >
  )
};