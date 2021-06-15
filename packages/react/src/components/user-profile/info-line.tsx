import React, { JSXElementConstructor } from 'react';
import clsx from 'clsx';
export type InfoLine = {
  label: string,
  labelClassName?: string
  Icon?: JSXElementConstructor<any>,
  iconClassName?: string,
  info?: string,
  infoClassName?: string,
  className?: string,
};

export const InfoLine = ({
  labelClassName,
  label,
  Icon,
  iconClassName,
  infoClassName,
  info,
  className,
}: InfoLine) => {
  return (
      <div className={clsx('flex justify-between space-x-4', className)}>
          <div className={clsx("font-semibold truncate flex-shrink-0", labelClassName)}>{label}</div>
          {info && <div className={clsx(infoClassName, "truncate")}>{info}</div>}
          {Icon && <Icon className={clsx("w-5 h-5", iconClassName)} />}
      </div>
  )
};
