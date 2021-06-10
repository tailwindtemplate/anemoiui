import { Radio, Section } from "../../src";
import { useState } from "react";

export default function PreviewRadio() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="p-2">
      <div className="text-3xl my-8">Radio</div>

      Default
      <Section className="mb-8 flex items-center justify-center border">
        <Radio checked={checked} onClick={() => setChecked(true)} />
        <Radio checked={!checked} onClick={() => setChecked(false)} />
      </Section>

      Label - Caption (or every attribute)
      <Section className="mb-8 flex items-center justify-center border">
        <Radio
          checked={checked}
          onClick={() => setChecked(true)}
          caption="Caption"
          label="Label"
        />
        <Radio
          checked={!checked}
          onClick={() => setChecked(false)}
          caption="Caption"
          label="Label"
        />
      </Section>

      Disable
      <Section className="mb-8 flex items-center justify-center border">
        <Radio
          checked={true}
          onClick={() => setChecked(!checked)}
          disabled={true}
        />
      </Section>

      Size SM
      <Section className="flex items-center justify-center border">
        <Radio checked={checked} onClick={() => setChecked(true)} size="SM" />
        <Radio checked={!checked} onClick={() => setChecked(false)} size="SM" />
      </Section>
    </div>
  );
}
