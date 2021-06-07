import React from "react";
import clsx from "clsx";

type Button = {
  title?: any;
  size?: string;
  type?: any;
  isGradient?: boolean;
  background?: string;
  color?: string;
  disabled?: boolean;
};

const SIZE_MAPS: any = {
  XS: "text-xs px-2 py-1",
  SM: "text-sm px-4 py-2",
  BASE: "text-base px-6 py-2",
  LG: "text-lg px-8 py-2",
  XL: "text-xl px-10 py-2"
};

const TYPE_MAPS: any = {
  PRIMARY: "bg-primary-400 hover:bg-primary-600 text-white",
  SECONDARY:
    "bg-neutral-50 text-neutral-800 border hover:bg-neutral-400 focus:ring-neutral-600"
};

export default function Button({
  title = "Get Started",
  size = "BASE",
  type,
  isGradient = false,
  background,
  color,
  disabled
}: Button) {
  return (
    <button
      className={clsx(
        SIZE_MAPS[size],
        TYPE_MAPS[type],
        "m-2 rounded cursor-pointer max-w-max focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-40",
        isGradient &&
          "bg-gradient-to-r from-primary-400 to-secondary-500 !text-white hover:from-primary-800 disabled:opacity-50 disabled:cursor-not-allowed",
        background,
        color
      )}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export function PreviewButton() {
  return (
    <div>
      <Button type="PRIMARY" size="XS" />
      <Button type="PRIMARY" size="SM" />
      <Button type="PRIMARY" size="BASE" />
      <Button type="PRIMARY" size="LG" />
      <Button type="PRIMARY" size="XL" />

      <Button type="SECONDARY" size="XS" />
      <Button type="SECONDARY" size="SM" />
      <Button type="SECONDARY" size="BASE" />
      <Button type="SECONDARY" size="LG" />
      <Button type="SECONDARY" size="XL" />

      <Button size="XS" isGradient />
      <Button size="SM" isGradient />
      <Button size="BASE" isGradient />
      <Button size="LG" isGradient />
      <Button size="XL" isGradient />

      <Button size="XL" isGradient disabled />
      <Button size="XL" type="PRIMARY" disabled />
      <Button size="XL" type="SECONDARY" disabled />

      <Button size="XS" background="!bg-neutral-50" />
      <Button size="XS" background="!bg-neutral-100" />
      <Button size="XS" background="!bg-neutral-200" />
      <Button size="XS" background="!bg-neutral-300" />
      <Button size="XS" background="!bg-neutral-400" />
      <Button size="XS" background="!bg-neutral-500" />
      <Button size="XS" background="!bg-neutral-600" />
      <Button size="XS" background="!bg-neutral-700" />

      <div className="flex">
        <button className="bg-indigo-500 text-white hover:bg-indigo-400 focus:ring focus:ring-offset-1 focus:ring-indigo-300 focus:outline-none disabled:bg-gray-200 disabled:text-gray-500 px-4 py-2 rounded-md uppercase text-sm tracking-wider font-semibold m-2">
          Not Disabled
        </button>
        <button
          className="bg-indigo-500 text-white hover:bg-indigo-400 focus:ring focus:ring-offset-1 focus:ring-indigo-300 focus:outline-none disabled:bg-gray-200 disabled:text-gray-500 px-4 py-2 rounded-md uppercase text-sm tracking-wider font-semibold m-2"
          disabled
        >
          Disabled
        </button>
      </div>
    </div>
  );
}
