import React from 'react';
import clsx from 'clsx';
//Check Type Props
type NextPrev = {
  onClickNextPrev: (e: any) => void,
  Icon?: any,
  alignment?: string,
  displayNextPrev?: boolean,
  slider: Object,
  disabled: boolean
};
// Render
export const NextPrev = ({
  onClickNextPrev,
  Icon,
  alignment,
  displayNextPrev,
  slider,
  disabled
}: NextPrev) => {
  //Return
  return (
    slider && (
      <div
        onClick={onClickNextPrev}
        className={clsx(displayNextPrev ? 'visible' : 'invisible')}
      >
        {Icon && <Icon className={clsx(alignment, disabled && "opacity-25")} />}
      </div>
    )
  )
};
