import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
type CardControl = {
  cardControlClassName?: string
}
export const CardControl = ({ children,cardControlClassName }: PropsWithChildren<CardControl>) => {
  return (
    <div className={clsx('bg-gray-50 w-336 rounded-3xl pt-5 mt-3 flex justify-center items-center flex-col relative',cardControlClassName)}>
      {children}
    </div>
  )
};