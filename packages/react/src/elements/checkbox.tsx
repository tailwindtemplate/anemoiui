import React from "react";
import clsx from "clsx";

type Checkbox = {
  checked?: boolean;
  onClick?: () => void;
  label?: string;
  size?: string;
  disabled?: boolean;
  caption?: string;
};

const SIZE: any = {
  SM: "w-6 h-6",
  BASE: "w-8 h-8"
};

export default function Checkbox({
  checked,
  onClick,
  label,
  size = "BASE",
  disabled,
  caption
}: Checkbox) {
  return (
    <label
      className={clsx(
        "m-2 flex justify-center items-center",
        disabled && "opacity-50 cursor-not-allowed select-none"
      )}
      onClick={onClick}
    >
      <input
        type="checkbox"
        className={clsx("text-gray-600 border rounded-xl", SIZE[size])}
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

export function PreviewCheckbox() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="flex">
      {/*Default*/}
      <div className="flex flex-col mr-16">
        <Checkbox />
        <Checkbox checked={!checked} onClick={() => setChecked(false)} />
        <Checkbox checked={true} onClick={() => setChecked(!checked)} />
        <Checkbox
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
        />
      </div>

      {/*Default - label*/}
      <div className="flex flex-col mr-16">
        <Checkbox
          checked={checked}
          onClick={() => setChecked(true)}
          label="Label"
        />
        <Checkbox
          checked={!checked}
          onClick={() => setChecked(false)}
          label="Label"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          label="Label"
        />
        <Checkbox
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          label="Label"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          label="Label"
        />
      </div>

      {/*Default - caption*/}
      <div className="flex flex-col mr-16">
        <Checkbox
          checked={checked}
          onClick={() => setChecked(true)}
          caption="Caption"
        />
        <Checkbox
          checked={!checked}
          onClick={() => setChecked(false)}
          caption="Caption"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          caption="Caption"
        />
        <Checkbox
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
        />
      </div>

      {/*Default-caption-label*/}
      <div className="flex flex-col mr-16">
        <Checkbox
          checked={checked}
          onClick={() => setChecked(true)}
          caption="Caption"
          label="Label"
        />
        <Checkbox
          checked={!checked}
          onClick={() => setChecked(false)}
          caption="Caption"
          label="Label"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          caption="Caption"
          label="Label"
        />
        <Checkbox
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
          label="Label"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
          label="Label"
        />
      </div>

      {/*Sm*/}
      <div className="flex flex-col mr-16">
        <Checkbox
          checked={checked}
          onClick={() => setChecked(true)}
          size="SM"
        />
        <Checkbox
          checked={!checked}
          onClick={() => setChecked(false)}
          size="SM"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          size="SM"
        />
        <Checkbox
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          size="SM"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          size="SM"
        />
      </div>

      {/*Sm - label*/}
      <div className="flex flex-col mr-16">
        <Checkbox
          checked={checked}
          onClick={() => setChecked(true)}
          label="Label"
          size="SM"
        />
        <Checkbox
          checked={!checked}
          onClick={() => setChecked(false)}
          label="Label"
          size="SM"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          label="Label"
          size="SM"
        />
        <Checkbox
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          label="Label"
          size="SM"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          label="Label"
          size="SM"
        />
      </div>

      {/*Sm - caption*/}
      <div className="flex flex-col mr-16">
        <Checkbox
          checked={checked}
          onClick={() => setChecked(true)}
          caption="Caption"
          size="SM"
        />
        <Checkbox
          checked={!checked}
          onClick={() => setChecked(false)}
          caption="Caption"
          size="SM"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          caption="Caption"
          size="SM"
        />
        <Checkbox
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
          size="SM"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
          size="SM"
        />
      </div>

      {/*Sm-caption-label*/}
      <div className="flex flex-col mr-16">
        <Checkbox
          checked={checked}
          onClick={() => setChecked(true)}
          caption="Caption"
          label="Label"
          size="SM"
        />
        <Checkbox
          checked={!checked}
          onClick={() => setChecked(false)}
          caption="Caption"
          label="Label"
          size="SM"
        />
        <Checkbox
          checked={true}
          onClick={() => setChecked(!checked)}
          caption="Caption"
          label="Label"
          size="SM"
        />
        <Checkbox
          checked={checked}
          onClick={() => setChecked(!checked)}
          disabled={true}
          caption="Caption"
          label="Label"
          size="SM"
        />
        <Checkbox
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
