import React from "react";
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

export default function Textarea({ custom, type, helperText }: Textarea) {
  return (
    <div className="m-2">
      <textarea
        className={clsx(
          "w-80 h-48 px-3 py-2 text-base placeholder-neutral-300 border rounded-2xl",
          custom,
          type && TYPE_MAPS[type]
        )}
        placeholder="Placeholder"
      ></textarea>
      {helperText && (
        <div className="text-xs text-neutral-300">{helperText}</div>
      )}
    </div>
  );
}

export function PreviewTextarea() {
  return (
    <div>
      <Textarea />
      <Textarea custom="border-primary-400" />
      <Textarea type="PRIMARY" />
      <Textarea type="ERROR" />
      <Textarea helperText="Helper text" />
    </div>
  );
}
