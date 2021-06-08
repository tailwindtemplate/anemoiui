interface NextPrev {
  onClickNextPrev: (e: any) => void,
  pathIcon?: string,
  displayNextPrev?: boolean,
  slider: Object,
  Alignment?: string,
};
export const NextPrev: React.FC<NextPrev> = ({
  onClickNextPrev,
  pathIcon,
  displayNextPrev,
  slider,
  Alignment,
}) => {
  return (
    slider &&
    (
      <svg
        onClick={onClickNextPrev}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={Alignment}
      >
        <path
          d={pathIcon}
          style={{ display: displayNextPrev ? 'block' : 'none' }}
        />
      </svg>
    )
  )
};
