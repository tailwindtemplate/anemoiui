import React from "react";
import ArrowDown from "../../assets/images/arrow_down.svg";
import ArrowUp from "../../assets/images/arrow_up.svg";
import clsx from "clsx";

type Select = {
  placeholder?: string;
  disabled?: boolean;
};

export default function Select({ placeholder, disabled }: Select) {
  const [open, setOpen] = React.useState(false);
  const [defaultTitle, setDefaultTitle] = React.useState("");

  const data = [
    {
      sportTitle: "Running"
    },
    {
      sportTitle: "Skating"
    },
    {
      sportTitle: "Snow boarding"
    },
    {
      sportTitle: "Swimming"
    }
  ];

  const handleSelect = (sportTitle: any) => {
    if (!open) {
      document.addEventListener("click", handleSelect, false);
    } else {
      document.removeEventListener("click", handleSelect, false);
    }
    setOpen(!open);
    setDefaultTitle(sportTitle);
  };

  const handleOpen = () => {
    !disabled && setOpen(!open);
  };

  return (
    <div className="w-80 rounded-xl m-2">
      <div
        className={clsx(
          "border rounded-xl h-14 flex justify-between items-center p-4 focus:border-primary-600 hover:border-primary-400",
          disabled && "cursor-not-allowed opacity-50 select-none"
        )}
        onClick={handleOpen}
      >
        <span
          className={`${
            placeholder && defaultTitle === ""
              ? "text-neutral-800 text-neutral-300"
              : "text-neutral-800"
          }`}
        >
          {defaultTitle === "" ? placeholder : defaultTitle}
        </span>
        {open ? <ArrowUp /> : <ArrowDown />}
      </div>

      {open ? (
        <div className="border mt-4 rounded-xl shadow-lg">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(data[index].sportTitle)}
              className="p-4 hover:bg-primary-600 hover:text-white"
            >
              <span className="select-title">{item.sportTitle}</span>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export function PreviewSelect() {
  return (
    <div>
      <Select placeholder="Please select the sport" />
      <Select placeholder="Please select the sport" disabled />
    </div>
  );
}
