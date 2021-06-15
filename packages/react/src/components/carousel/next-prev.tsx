import React from 'react'
import clsx from 'clsx'
//Check Type Props
type NextPrev = {
  onClickNextPrev: (e: any) => void,
  Icon?: any,
  alignment?: string,
  disabled: boolean
};
// Render
export const NextPrev = ({
    onClickNextPrev,
    Icon,
    alignment,
    disabled
}: NextPrev) => {
    //Return
    return (
        <div onClick={onClickNextPrev}>
            {Icon && <Icon className={clsx(alignment, disabled && 'opacity-25')} />}
        </div>
    )
}
