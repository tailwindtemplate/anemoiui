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
      <div className="text-3xl my-8">Select</div>
      Default
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Select placeholder="Please select the sport" data={data} />
      </Section>
      Disable
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Select placeholder="Please select the sport" disabled data={data} />
      </Section>
      Has icon
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Select
          placeholder="Please select the sport"
          Icon={UserIcon}
          data={data}
        />
      </Section>
      Has image
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Select
          placeholder="Please select the sport"
          src={
            "https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          }
          data={data}
        />
      </Section>
    </div>
  );
}
