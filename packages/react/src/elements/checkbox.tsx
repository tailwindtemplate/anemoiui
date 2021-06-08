import React from "react";
import clsx from "clsx";
import { CheckIcon, MinusIcon } from '@heroicons/react/outline'

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
  SM: "w-6 h-6",
  BASE: "w-8 h-8"
};

export default function Checkbox({
                                checked = false,
                                onClick,
                                label,
                                size = "BASE",
                                disabled,
                                caption, Icon = CheckIcon
                              }: Checkbox) {
  return (
      <div className={clsx('m-2 flex justify-center items-center', disabled && "opacity-50 cursor-not-allowed select-none")} onClick={onClick}>
        <input
            type="checkbox"
            className="hidden"
            checked={checked}
            disabled={disabled}
        />
          <div className={clsx('rounded-xl border border-neutral-500 hover:border-primary-900', checked && 'bg-primary-700', SIZE[size])}>{checked && <Icon className='text-white' />}</div>
        <div className="flex flex-col">
          {label && <span className="ml-2 text-gray-700 text-sm">{label}</span>}
          {caption && (
              <span className="ml-2 text-gray-400 text-xs">{caption}</span>
          )}
        </div>
      </div>
  );
}

export function PreviewCheckbox() {
  const [checked, setChecked] = React.useState(false);
  return (
      <div className="flex">
        {/*Default*/}
        <div className="flex flex-col mr-16">
          <Checkbox checked={checked} onClick={()=>setChecked(!checked)} />
          <Checkbox checked={true} onClick={() => setChecked(!checked)} />
          <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
          />
        </div>

        {/*Default - label*/}
        <div className="flex flex-col mr-16">
            <Checkbox checked={checked} onClick={()=>setChecked(!checked)} label='Label' />
            <Checkbox checked={true} onClick={() => setChecked(!checked)} label='Label' />
            <Checkbox
                checked={true}
                onClick={() => setChecked(!checked)}
                disabled={true} label='Label'
            />
        </div>

        {/*Default - caption*/}
        <div className="flex flex-col mr-16">
            <Checkbox checked={checked} onClick={()=>setChecked(!checked)} caption='Caption' />
            <Checkbox checked={true} onClick={() => setChecked(!checked)} caption='Caption' />
            <Checkbox
                checked={true}
                onClick={() => setChecked(!checked)}
                disabled={true} caption='Caption'
            />
        </div>

        {/*Default-caption-label*/}
        <div className="flex flex-col mr-16">
            <Checkbox checked={checked} onClick={()=>setChecked(!checked)} label='Label' caption='Caption' />
            <Checkbox checked={true} onClick={() => setChecked(!checked)} label='Label' caption='Caption' />
            <Checkbox
                checked={true}
                onClick={() => setChecked(!checked)}
                disabled={true} label='Label' caption='Caption'
            />
        </div>

        {/*Sm*/}
        <div className="flex flex-col mr-16">
            <Checkbox checked={checked} onClick={()=>setChecked(!checked)} size='SM' />
            <Checkbox checked={true} onClick={() => setChecked(!checked)} size='SM' />
            <Checkbox
                checked={true}
                onClick={() => setChecked(!checked)}
                disabled={true} size='SM'
            />
        </div>

        {/*Sm - label*/}
        <div className="flex flex-col mr-16">
            <Checkbox checked={checked} onClick={()=>setChecked(!checked)} size='SM' label='Label' />
            <Checkbox checked={true} onClick={() => setChecked(!checked)} size='SM' label='Label' />
            <Checkbox
                checked={true}
                onClick={() => setChecked(!checked)}
                disabled={true} size='SM' label='Label'
            />
        </div>

        {/*Sm - caption*/}
        <div className="flex flex-col mr-16">
            <Checkbox checked={checked} onClick={()=>setChecked(!checked)} size='SM' caption='Caption' />
            <Checkbox checked={true} onClick={() => setChecked(!checked)} size='SM' caption='Caption' />
            <Checkbox
                checked={true}
                onClick={() => setChecked(!checked)}
                disabled={true} size='SM' caption='Caption'
            />
        </div>

        {/*Sm-caption-label*/}
        <div className="flex flex-col mr-16">
            <Checkbox checked={checked} onClick={()=>setChecked(!checked)} size='SM' label='Label' caption='Caption' />
            <Checkbox checked={true} onClick={() => setChecked(!checked)} size='SM' label='Label' caption='Caption' />
            <Checkbox
                checked={true}
                onClick={() => setChecked(!checked)}
                disabled={true} size='SM' label='Label' caption='Caption'
            />
        </div>

        {/*Change icon*/}
          <div className="flex flex-col mr-16">
              <Checkbox checked={checked} onClick={()=>setChecked(!checked)} Icon={MinusIcon} />
              <Checkbox checked={true} onClick={() => setChecked(!checked)} Icon={MinusIcon} />
              <Checkbox
                  checked={true}
                  onClick={() => setChecked(!checked)}
                  disabled={true} Icon={MinusIcon}
              />
          </div>
      </div>
  );
}
