import React from "react";
import clsx from "clsx";

type Button = {
  title?: any;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
  type?: 'primary' | 'secondary' | 'gradient' | string;
  className?: string;
  disabled?: boolean;
};

const SIZE_MAPS: any = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-2",
  lg: "text-lg px-8 py-2",
  xl: "text-xl px-10 py-2"
};

const TYPE_MAPS: any = {
    primary: "bg-primary-400 hover:bg-primary-600 text-white",
    secondary: "bg-neutral-50 text-neutral-800 border hover:bg-neutral-400 focus:ring-neutral-600",
    gradient: 'bg-gradient-to-r from-primary-400 to-secondary-500 text-white hover:from-primary-800',
};

export default function Button({
  title = "Get Started",
  size = 'md',
  type,
  className,
  disabled
}: Button) {
  return (
    <button
      className={clsx(
          "m-2 rounded cursor-pointer max-w-max focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-40 disabled:opacity-50 disabled:cursor-not-allowed",
        size && SIZE_MAPS[size],
        type && TYPE_MAPS[type],
        className
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
        <div>
            <Button type="primary" size="xs" />
            <Button type="primary" size="sm" />
            <Button type="primary" />
            <Button type="primary" size="lg" />
            <Button type="primary" size="xl" />
        </div>
        <div>
            <Button type="secondary" size="xs" />
            <Button type="secondary" size="sm" />
            <Button type="secondary" />
            <Button type="secondary" size="lg" />
            <Button type="secondary" size="xl" />
        </div>
        <div>
            <Button type="gradient" size="xs" />
            <Button type="gradient" size="sm" />
            <Button type="gradient" />
            <Button type="gradient" size="lg" />
            <Button type="gradient" size="xl" />
        </div>
        <div>
            <Button size="xs" className="bg-neutral-50" />
            <Button size="xs" className="bg-neutral-100" />
            <Button size="xs" className="bg-neutral-200" />
            <Button size="xs" className="bg-neutral-300" />
            <Button size="xs" className="bg-neutral-400" />
            <Button size="xs" className="bg-neutral-500" />
            <Button size="xs" className="bg-neutral-600" />
            <Button size="xs" className="bg-neutral-700" />
        </div>
        <div>
            <Button size="xl" disabled />
            <Button size="xl" type="primary" disabled />
            <Button size="xl" type="secondary" disabled />
            <Button size="xl" type="gradient" disabled />
        </div>
    </div>
  );
}
