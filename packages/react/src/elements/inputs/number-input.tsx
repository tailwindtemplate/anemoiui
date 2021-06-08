import React from "react";
import clsx from "clsx";
import { PlusIcon, MinusIcon } from '@heroicons/react/outline'

type NumberInput = {
  color?: string;
  custom?: string;
  type?: string;
};

const TYPE_MAPS: any = {
  PRIMARY: "border-primary-400",
  ERROR: "border-red-400"
};

export default function NumberInput({ color, custom, type }: NumberInput) {
  const [value, setValue] = React.useState(0);
  return (
    <div
      className={clsx(
        "flex w-40 rounded-2xl justify-center items-center p-2 border h-14 m-2",
        custom,
        type && TYPE_MAPS[type]
      )}
    >
      <button
        onClick={() => setValue(value > 0 ? value - 1 : value)}
        className="mx-2"
      >
        <MinusIcon className='w-5 h-5' />
      </button>
      <div className="mx-2 w-5">{value}</div>
      <button onClick={() => setValue(value + 1)} className="mx-2">
        <PlusIcon className='w-5 h-5' />
      </button>
    </div>
  );
}

export function PreviewNumberInput() {
  return (
    <div>
      <NumberInput />
      <NumberInput type="PRIMARY" />
      <NumberInput type="ERROR" />
      <NumberInput custom="border-green-500" />
    </div>
  );
}
