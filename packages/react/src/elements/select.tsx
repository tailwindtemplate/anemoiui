import React from "react";
import ArrowDown from "../../assets/images/arrow_down.svg";
import ArrowUp from "../../assets/images/arrow_up.svg";
import User from "../../assets/images/user.svg";
import clsx from "clsx";
import Avatar from "elements/avatar";

type Select = {
  placeholder?: string;
  disabled?: boolean;
  Icon?: any;
  src?: string;
  data: any;
  label?: string;
};

export default function Select({
  placeholder,
  disabled,
  Icon,
  src,
  data,
  label
}: Select) {
  const [open, setOpen] = React.useState(false);
  const [defaultTitle, setDefaultTitle] = React.useState("");

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

  const disableStyle = disabled
    ? "cursor-not-allowed opacity-50 select-none"
    : "";

  return (
    <div className="w-80 rounded-xl m-2">
      <div
        className={clsx(
          "border rounded-xl h-14 flex justify-between items-center p-4 focus:border-primary-600 hover:border-primary-400",
          disabled && "cursor-not-allowed opacity-50 select-none"
        )}
        onClick={handleOpen}
      >
        <div className="flex items-center">
          {Icon && <Icon className={clsx(disableStyle, "mr-2")} />}
          {src && <Avatar size="XS" className={clsx("mr-2", disableStyle)} />}
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
            {label && (
              <div
                className={clsx(
                  "text-neutral-900 text-sm",
                  disableStyle
                )}
              >
                {label}
              </div>
            )}
          </div>
        </div>
        {open ? (
          <ArrowUp
            className={disableStyle}
          />
        ) : (
          <ArrowDown
            className={disableStyle}
          />
        )}
      </div>

      {open && (
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
      )}
    </div>
  );
}

export function PreviewSelect() {
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
  return (
    <div className="flex">
      <div>
        <Select placeholder="Please select the sport" data={data} />
        <Select placeholder="Please select the sport" disabled data={data} />
        <Select
          placeholder="Please select the sport"
          data={data}
          label="Label"
        />
        <Select
          placeholder="Please select the sport"
          disabled
          data={data}
          label="Label"
        />
      </div>
      <div>
        <Select placeholder="Please select the sport" Icon={User} data={data} />
        <Select
          placeholder="Please select the sport"
          disabled
          Icon={User}
          data={data}
        />

        <Select
          placeholder="Please select the sport"
          Icon={User}
          data={data}
          label="Label"
        />
        <Select
          placeholder="Please select the sport"
          disabled
          Icon={User}
          data={data}
          label="Label"
        />
      </div>
      <div>
        <Select
          placeholder="Please select the sport"
          src={
            "https://vcdn1-ione.vnecdn.net/2021/02/19/ca-si-iu-1613733151-2019-1613733648.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=KIVnpbz0OeM29beG1BF-Gg"
          }
          data={data}
        />
        <Select
          placeholder="Please select the sport"
          disabled
          src={
            "https://vcdn1-ione.vnecdn.net/2021/02/19/ca-si-iu-1613733151-2019-1613733648.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=KIVnpbz0OeM29beG1BF-Gg"
          }
          data={data}
        />

        <Select
          placeholder="Please select the sport"
          src={
            "https://vcdn1-ione.vnecdn.net/2021/02/19/ca-si-iu-1613733151-2019-1613733648.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=KIVnpbz0OeM29beG1BF-Gg"
          }
          data={data}
          label="Label"
        />
        <Select
          placeholder="Please select the sport"
          disabled
          src={
            "https://vcdn1-ione.vnecdn.net/2021/02/19/ca-si-iu-1613733151-2019-1613733648.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=KIVnpbz0OeM29beG1BF-Gg"
          }
          data={data}
          label="Label"
        />
      </div>
    </div>
  );
}
