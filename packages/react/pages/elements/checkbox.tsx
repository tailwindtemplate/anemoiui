import { MinusIcon } from "@heroicons/react/outline";
import { Checkbox, Section } from "../../src";
import { useState } from "react";

export default function PreviewCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="p-2">
      <div className="text-3xl my-8">Checkbox</div>

      Default
      <Section className="mb-8 flex items-center justify-center border">
        <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
      </Section>

      Label - caption (or every attribute)
      <Section className="mb-8 flex items-center justify-center border">
        <Checkbox
          checked={checked}
          onClick={() => setChecked(!checked)}
          label="Label"
          caption="Caption"
        />
      </Section>

      Size SM
      <Section className="mb-8 flex items-center justify-center border">
        <Checkbox
          checked={checked}
          onClick={() => setChecked(!checked)}
          size="SM"
        />
      </Section>

      Disable
      <Section className="mb-8 flex items-center justify-center border">
        <Checkbox checked={checked} onClick={() => setChecked(!checked)} disabled />
      </Section>

      Custom Icon
      <Section className="flex items-center justify-center border">
        <Checkbox
          checked={checked}
          onClick={() => setChecked(!checked)}
          Icon={MinusIcon}
        />
      </Section>
    </div>
  );
}
