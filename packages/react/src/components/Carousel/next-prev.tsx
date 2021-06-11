import React from 'react';
import clsx from 'clsx';
//Check Type Props
type NextPrev = {
  onClickNextPrev: (e: any) => void,
  Icon?: any,
  Alignment?: string,
  displayNextPrev?: boolean,
  slider: Object,
  disabled: boolean
};
// Render
export const NextPrev = ({
  onClickNextPrev,
  Icon,
  Alignment,
  displayNextPrev,
  slider,
  disabled
}: NextPrev) => {
  // ConstTank
  const Disabled = disabled && "opacity-25";
  //Return
  return (
    slider && (
      <div
        onClick={onClickNextPrev}
        style={{ visibility: displayNextPrev ? 'visible' : 'hidden' }}
      >
        {Icon && <Icon className={clsx(Alignment, Disabled)} />}
      </div>
    )
  )
};
