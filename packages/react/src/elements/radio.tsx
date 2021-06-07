import React from "react";
import clsx from "clsx";

type Radio = {
  checked?: boolean;
  onClick?: () => void;
  label?: string;
  size?: string;
  id?: string;
  disabled?: boolean;
  caption?: string;
};

const SIZE: any = {
  SM: "w-6 h-6",
  BASE: "w-8 h-8"
};

export default function Radio({
  checked = false,
  onClick,
  label,
  size = "BASE",
  id,
  disabled,
  caption
}: Radio) {
  return (
    <label
      className={clsx(
        "m-2 flex justify-center items-center",
        disabled && "opacity-50 cursor-not-allowed select-none"
      )}
      onClick={onClick}
    >
      <input
        type="radio"
        className={clsx("text-gray-600", SIZE[size])}
        checked={checked}
        disabled={disabled}
      />
      <div className="flex flex-col">
        {label && <span className="ml-2 text-gray-700 text-sm">{label}</span>}
        {caption && (
          <span className="ml-2 text-gray-400 text-xs">{caption}</span>
        )}
      </div>
    </label>
  );
}

export function PreviewRadio() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="flex">
      {/*Default*/}
      <div className="flex flex-col mr-16">
        <Radio checked={checked} onClick={() => setChecked(true)} />
        <Radio checked={!checked} onClick={() => setChecked(false)} />
        <Radio checked={true} onClick={() => setChecked(!checked)} />
        <Radio
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
        />
      </div>

      {/*Default - label*/}
      <div className="flex flex-col mr-16">
        <Radio
          checked={checked}
          onClick={() => setChecked(true)}
          label="Label"
        />
        <Radio
          checked={!checked}
          onClick={() => setChecked(false)}
          label="Label"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          label="Label"
        />
        <Radio
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          label="Label"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          label="Label"
        />
      </div>

      {/*Default - caption*/}
      <div className="flex flex-col mr-16">
        <Radio
          checked={checked}
          onClick={() => setChecked(true)}
          caption="Caption"
        />
        <Radio
            checked={!checked}
            onClick={() => setChecked(false)}
            caption="Caption"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          caption="Caption"
        />
        <Radio
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
        />
      </div>

      {/*Default-caption-label*/}
      <div className="flex flex-col mr-16">
        <Radio
          checked={checked}
          onClick={() => setChecked(true)}
          caption="Caption"
          label="Label"
        />
        <Radio
            checked={!checked}
            onClick={() => setChecked(false)}
            caption="Caption"
            label="Label"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          caption="Caption"
          label="Label"
        />
        <Radio
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
          label="Label"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
          label="Label"
        />
      </div>

      {/*Sm*/}
      <div className="flex flex-col mr-16">
        <Radio
          checked={checked}
          onClick={() => setChecked(true)}
          size="SM"
        />
        <Radio
            checked={!checked}
            onClick={() => setChecked(false)}
            size="SM"
        />
        <Radio checked={true} onClick={() => setChecked(!checked)} size="SM" />
        <Radio
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          size="SM"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          size="SM"
        />
      </div>

      {/*Sm - label*/}
      <div className="flex flex-col mr-16">
        <Radio
          checked={checked}
          onClick={() => setChecked(true)}
          label="Label"
          size="SM"
        />
        <Radio
            checked={!checked}
            onClick={() => setChecked(false)}
            label="Label"
            size="SM"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          label="Label"
          size="SM"
        />
        <Radio
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          label="Label"
          size="SM"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          label="Label"
          size="SM"
        />
      </div>

      {/*Sm - caption*/}
      <div className="flex flex-col mr-16">
        <Radio
          checked={checked}
          onClick={() => setChecked(true)}
          caption="Caption"
          size="SM"
        />
        <Radio
            checked={!checked}
            onClick={() => setChecked(false)}
            caption="Caption"
            size="SM"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          caption="Caption"
          size="SM"
        />
        <Radio
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
          size="SM"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
          size="SM"
        />
      </div>

      {/*Sm-caption-label*/}
      <div className="flex flex-col mr-16">
        <Radio
          checked={checked}
          onClick={() => setChecked(true)}
          caption="Caption"
          label="Label"
          size="SM"
        />
        <Radio
            checked={!checked}
            onClick={() => setChecked(false)}
            caption="Caption"
            label="Label"
            size="SM"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          caption="Caption"
          label="Label"
          size="SM"
        />
        <Radio
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
          label="Label"
          size="SM"
        />
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
          label="Label"
          size="SM"
        />
      </div>
    </div>
  );
}
