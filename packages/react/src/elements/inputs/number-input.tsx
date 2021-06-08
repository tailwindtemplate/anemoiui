import React from "react";
import Plus from "../../../assets/images/plus.svg";
import Minus from "../../../assets/images/minus.svg";
import clsx from "clsx";

type NumberInput = {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  type?: 'primary' | 'error' | string;
};

const TYPE_MAPS: any = {
  primary: "border-primary-400",
  error: "border-red-400"
};

export default function NumberInput({ className, inputClassName, buttonClassName, type }: NumberInput) {
  const [value, setValue] = React.useState('0');
  const func = (type: string) => {
      let v = parseInt(value) || 0
      if (type == '+') v++
      else v--
      setValue(v.toString())
  }
  return (
    <div
      className={clsx(
        "flex w-40 rounded-2xl justify-center items-center p-2 border h-14 m-2",
        className,
        type && TYPE_MAPS[type]
      )}
    >
      <button onClick={() => func('-')} className={clsx('mx-2', buttonClassName)}>
        <Minus />
      </button>
      <input type="number" className={clsx("mx-2 w-5", inputClassName)} value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={() => func('+')} className={clsx('mx-2', buttonClassName)}>
        <Plus />
      </button>
    </div>
  );
}

export function PreviewNumberInput() {
  return (
    <div>
      <NumberInput />
      <NumberInput type="primary" />
      <NumberInput type="error" />
      <NumberInput className="border-green-500" />
    </div>
  );
}
