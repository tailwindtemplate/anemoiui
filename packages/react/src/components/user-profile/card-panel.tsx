import React from 'react';
import clsx from 'clsx';
import { UserGroupIcon } from "@heroicons/react/outline";
type CardPanel = {
  item?: string,
  itemClassName?: string
  Icon?: any,
  IconClassName?: string,
  label?: string,
  labelClassName?: string
};
// Default Props
const Items = "Địa chỉ";
const IconDefault = UserGroupIcon;
export const CardPanel = ({
  item = Items,
  itemClassName,
  Icon = IconDefault,
  label,
  labelClassName,
  IconClassName
}: CardPanel) => {
  return (
    <div className="bg-gray-50 w-336 rounded-3xl px-5 flex justify-center items-center flex-col relative">
      <div className="relative w-full">
        <p className={clsx("font-semibold text-black-50 w-full mb-5 font-mulish", itemClassName)}>{item}</p>
        {
          label ? <span className={clsx("font-normal text-black-100 absolute right-0 top-0 text-base font-mulish", labelClassName)}>{label}</span> :
            <Icon className={clsx("w-5 h-5 text-black-50 transition absolute right-0 top-0 hover:text-gray-900 cursor-pointer", IconClassName)} />
        }
      </div>
    </div>
  )
};