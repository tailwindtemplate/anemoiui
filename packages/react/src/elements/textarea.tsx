import React, { TextareaHTMLAttributes } from 'react';
import clsx from "clsx";

type Textarea = {
  custom?: string;
  type?: string;
  helperText?: string;
};

const TYPE_MAPS: any = {
  PRIMARY: "border-secondary-400",
  ERROR: "border-red-400"
};

export function Textarea({ custom, type, helperText, ...rest }: Textarea & TextareaHTMLAttributes<{}>) {

  return (
    <div className="m-2">
      <textarea
        className={clsx(
          "w-80 h-48 px-3 py-2 text-base placeholder-neutral-300 border rounded-2xl",
          custom,
          type && TYPE_MAPS[type]
        )}
        {...rest}
      />
      {helperText && (
        <div className="text-xs text-neutral-300">{helperText}</div>
      )}
    </div>
  );
}
