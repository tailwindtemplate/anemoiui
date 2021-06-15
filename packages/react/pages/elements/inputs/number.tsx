import { NumberInput, Section } from "../../../src";

export default function NumberInputPage() {
  return (
    <div className="p-2">
      <div className="text-3xl my-8">Number Input</div>
      Default
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <NumberInput className="mt-2" />
      </Section>
      Primary
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <NumberInput type="primary" className="mt-2" />
      </Section>
      Error
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <NumberInput type="error" className="mt-2" />
      </Section>
      Custom Classname
      <Section className="flex items-center justify-center border bg-white">
        <NumberInput className="border-green-500 mt-2" />
      </Section>
    </div>
  );
}
