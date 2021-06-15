import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
// Check Type Props
type Dot = {
  classItemDots?: string
  activeDots?: string,
  displayDots?: boolean,
  index: number,
  currentSlide: number,
  onClick: () => void,
};
// Render
export const Dot = ({
  classItemDots,
  displayDots,
  index,
  onClick,
  currentSlide,
  activeDots
}: PropsWithChildren<Dot>) => <button key={index} onClick={onClick} className={clsx(classItemDots, currentSlide === index && activeDots, displayDots ? 'block' : 'hidden')} />
