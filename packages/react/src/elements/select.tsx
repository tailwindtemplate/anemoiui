import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import clsx from "clsx";
import { Avatar } from "./avatar";

type Select = {
  placeholder?: string;
  disabled?: boolean;
  Icon?: any;
  src?: string;
  data: { title: string }[];
};

export function Select({
  placeholder,
  disabled,
  Icon,
  src,
  data,
}: Select) {
  const [open, setOpen] = React.useState(false);
  const [defaultTitle, setDefaultTitle] = React.useState("");

  const handleSelect = (title: any) => {
    setOpen(!open);
    setDefaultTitle(title);
  };

  const handleOpen = () => {
    !disabled && setOpen(!open);
  };

  const disableStyle = disabled
    ? "cursor-not-allowed opacity-50 select-none"
    : "";

  return (
    <div className="w-80 rounded-xl m-2 relative">
      <div
        className={clsx(
          "border rounded-md flex justify-between items-center p-3 focus:border-primary-600 hover:border-primary-400",
          disabled && "cursor-not-allowed opacity-50 select-none"
        )}
        onClick={handleOpen}
      >
        <div className="flex items-center">
          {Icon && <Icon className={clsx(disableStyle, "mr-2 w-5 h-5")} />}
          {src && <Avatar size="xs" className={clsx("mr-2", disableStyle)} src={src} />}
          <div>
            <span
              className={`${
                defaultTitle
                  ? "text-sm text-neutral-800"
                  : "text-sm text-neutral-300"
              }`}
            >
              {defaultTitle ? defaultTitle : placeholder}
            </span>
          </div>
        </div>
        {open ? (
          <ChevronUpIcon
            className={clsx(disableStyle, 'w-5 h-5')}
          />
        ) : (
          <ChevronDownIcon className={clsx(disableStyle, 'w-5 h-5')} />
        )}
      </div>

      {open && (
        <div className="transform absolute bottom-0 translate-y-full z-10 bg-white w-full overflow-auto max-h-40 border mt-4 rounded-xl shadow-lg">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item.title)}
              className="p-4 hover:bg-primary-600 hover:text-white cursor-pointer"
            >
              <span className="select-title">{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
