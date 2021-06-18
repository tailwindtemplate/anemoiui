import { UserIcon } from "@heroicons/react/outline";
import { Heading2, Heading3, Section, Select } from '../../src';

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
        <div className="space-y-4">
            <Heading2>Select</Heading2>
            <Heading3>Default</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Select placeholder="Please select the sport" data={data} />
            </Section>
            <Heading3>Disable</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Select placeholder="Please select the sport" disabled data={data} />
            </Section>
            <Heading3>Has icon</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Select
                    placeholder="Please select the sport"
                    Icon={UserIcon}
                    data={data}
                />
            </Section>
            <Heading3>Has image</Heading3>
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
