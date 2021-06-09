
type NextPrev = {
  onClickNextPrev: (e: any) => void,
  Icon?: any,
  Alignment?: string,
  displayNextPrev?: boolean,
  slider: Object,
};
export const NextPrev = ({
  onClickNextPrev,
  Icon,
  Alignment,
  displayNextPrev,
  slider,
}: NextPrev) => {
  return (
    slider &&
    (
      <div
        onClick={onClickNextPrev}
        style={{ visibility: displayNextPrev ? 'visible' : 'hidden' }}
      >
        {
          Icon && <Icon className={Alignment} />
        }
      </div>
    )
  )
};
