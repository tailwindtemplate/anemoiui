import { UserIcon } from "@heroicons/react/outline";
import { Section, Select } from "../../src";

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

export default function PreviewSelect() {
  return (
    <div className="p-2">
      <div className="text-3xl">Select</div>
      <Section className="flex">
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
          <Select
            placeholder="Please select the sport"
            Icon={UserIcon}
            data={data}
          />
          <Select
            placeholder="Please select the sport"
            disabled
            Icon={UserIcon}
            data={data}
          />

          <Select
            placeholder="Please select the sport"
            Icon={UserIcon}
            data={data}
            label="Label"
          />
          <Select
            placeholder="Please select the sport"
            disabled
            Icon={UserIcon}
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
      </Section>
    </div>
  );
}
