import React from "react";
import clsx from "clsx";
import { CheckIcon, MinusIcon } from "@heroicons/react/outline";

type Checkbox = {
  checked?: boolean;
  onClick?: () => void;
  label?: string;
  size?: string;
  disabled?: boolean;
  caption?: string;
  Icon?: any;
};

const SIZE: any = {
  SM: "w-6 h-6 round",
  BASE: "w-8 h-8"
};

export function Checkbox({
  checked = false,
  onClick,
  label,
  size = "BASE",
  disabled,
  caption,
  Icon = CheckIcon
}: Checkbox) {
  return (
    <div
      className={clsx(
        "m-2 flex justify-center items-center",
        disabled && "opacity-50 cursor-not-allowed select-none"
      )}
      onClick={onClick}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        disabled={disabled}
      />
      <div
        className={clsx(
          "rounded-xl border border-neutral-500 hover:border-primary-900",
          checked && "bg-primary-700",
          SIZE[size]
        )}
      >
        {checked && <Icon className="text-white" />}
      </div>
      <div className="flex flex-col">
        {label && <span className="ml-2 text-gray-700 text-sm">{label}</span>}
        {caption && (
          <span className="ml-2 text-gray-400 text-xs">{caption}</span>
        )}
      </div>
    </div>
  );
}
