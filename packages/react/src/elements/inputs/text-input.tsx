import React from "react";
import User from "../../../assets/images/user.svg";
import clsx from "clsx";

type TextInput = {
  LeftIcon?: any;
  RightIcon?: any;
  className?: any;
  type?: any;
  disabled?: boolean;
};

const TYPE_MAPS: any = {
  ERROR: "border-red-500"
};

export default function TextInput({
  LeftIcon,
  RightIcon,
  className,
  type,
  disabled
}: TextInput) {
  return (
    <div
      className={clsx(
        "relative text-gray-600 focus-within:text-gray-400 m-2",
        className
      )}
    >
      <div>
        {LeftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <LeftIcon />
          </span>
        )}
        <input
          type="text"
          className={clsx(
            "py-2 text-sm rounded-xl px-4 focus:border-primary-400 focus:outline-none border w-full h-14 placeholder-neutral-300",
            LeftIcon && "!px-8",
            type && TYPE_MAPS[type]
          )}
          placeholder="Search member..."
          disabled={disabled}
        />
        {RightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <RightIcon />
          </span>
        )}
      </div>
    </div>
  );
}

export function PreviewTextInput() {
  return (
    <div>
      <TextInput className="w-80" />
      <TextInput LeftIcon={User} className="w-80" />
      <TextInput LeftIcon={User} RightIcon={User} className="w-80" />
      <TextInput className="w-80" type="ERROR" />
      <TextInput className="w-80" disabled />
    </div>
  );
}
