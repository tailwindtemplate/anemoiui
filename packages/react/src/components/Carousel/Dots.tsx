import { PropsWithChildren } from 'react';
import clsx from 'clsx';
type Dots = {
  classItemDots?: string
  activeDots?: string,
  displayDots?: boolean,
  index: number,
  currentSlide: number,
  onClick: () => void,
};
export const Dots = ({
  classItemDots,
  displayDots,
  index,
  onClick,
  currentSlide,
  activeDots
}: PropsWithChildren<Dots>) => {
  return (
    <button
      key={index}
      onClick={onClick}
      className={clsx(classItemDots, currentSlide === index && activeDots)}
      style={{ display: `${displayDots ? 'block' : 'none'}` }}
    />
  )
};
