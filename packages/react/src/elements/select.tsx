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
  data: { title: string }[];
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

export function PreviewSelect() {
  const data = [
    {
      title: "Running"
    },
    {
      title: "Skating"
    },
    {
      title: "Snow boarding"
    },
    {
      title: "Swimming"
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
