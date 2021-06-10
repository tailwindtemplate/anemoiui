import { Section, Textarea } from "../../src";

export default function PreviewTextarea() {
  return (
    <div className="p-2">
      <div className="text-3xl my-10">Textarea</div>

        Default
      <Section className="mb-8 flex items-center justify-center border">
        <Textarea placeholder="Placeholder" />
      </Section>

        Type: Primary
      <Section className="mb-8 flex items-center justify-center border">
        <Textarea placeholder="Placeholder" type="PRIMARY" />
      </Section>

        Type: error
      <Section className="mb-8 flex items-center justify-center border">
        <Textarea placeholder="Placeholder" type="ERROR" />
      </Section>

        With Helper text
      <Section className="mb-8 flex items-center justify-center border">
        <Textarea placeholder="Placeholder" helperText="Helper text" />
      </Section>

        Custom classname
      <Section className="flex items-center justify-center border">
        <Textarea placeholder="Placeholder" className="border-yellow-400" />
      </Section>
    </div>
  );
}
