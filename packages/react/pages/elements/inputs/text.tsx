import { UserIcon } from "@heroicons/react/outline";
import TextInput from "../../../src/elements/inputs/text-input";
import { Section } from "../../../src";

export default function TextInputPage() {
  return (
    <div className="p-2 mb-20">
      <div className="text-3xl my-8">Text Input</div>

      Default
      <Section className="mb-8 flex items-center justify-center border">
        <TextInput className="w-80" />
      </Section>

      Type: Error
      <Section className="mb-8 flex items-center justify-center border">
        <TextInput className="w-80" type="error" />
      </Section>

      Left Icon
      <Section className="mb-8 flex items-center justify-center border">
        <TextInput LeftIcon={UserIcon} className="w-80" />
      </Section>

      Left - Right icon
      <Section className="mb-8 flex items-center justify-center border">
        <TextInput LeftIcon={UserIcon} RightIcon={UserIcon} className="w-80" />
      </Section>

      Disable
      <Section className="flex items-center justify-center border">
        <TextInput className="w-80" disabled />
      </Section>
    </div>
  );
}
