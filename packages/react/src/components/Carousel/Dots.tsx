import clsx from 'clsx';
interface Dots {
  classItemDots?: string
  activeDots?: string,
  displayDots?: boolean,
  index: number,
  currentSlide: number,
  onClick: () => void,
};
export const Dots: React.FC<Dots> = ({
  classItemDots,
  displayDots,
  index,
  onClick,
  currentSlide,
  activeDots
}) => {
  return (
    <button
      key={index}
      onClick={onClick}
      className={clsx(classItemDots, currentSlide === index && activeDots)}
      style={{ display: `${displayDots ? 'block' : 'none'}` }}
    />
  )
};
