import { PropsWithChildren } from 'react';
type NextPrev = {
  onClickNextPrev: (e: any) => void,
  icon?: Object,
  displayNextPrev?: boolean,
  slider: Object,
};
export const NextPrev = ({
  onClickNextPrev,
  icon,
  displayNextPrev,
  slider,
}: PropsWithChildren<NextPrev>) => {

  return (
    slider &&
    (
      <div
        onClick={onClickNextPrev}
        style={{ visibility: displayNextPrev ? 'visible' : 'hidden' }}
      >
        {icon}
      </div>
    )
  )
};
