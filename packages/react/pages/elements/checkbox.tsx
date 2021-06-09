import { MinusIcon } from "@heroicons/react/outline";
import { Checkbox, Section } from "../../src";
import { useState } from "react";

export default function PreviewCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="p-2">
      <div className="text-3xl">Checkbox</div>
      <Section className="flex flex-col" narrow>
        {/*Default*/}
        <div className="text-xl">Default</div>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col mr-16">
            <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
            <Checkbox checked={true} onClick={() => setChecked(!checked)} />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
            />
          </div>

          {/*Default - label*/}
          <div className="flex flex-col mr-16">
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              label="Label"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              label="Label"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              label="Label"
            />
          </div>

          {/*Default - caption*/}
          <div className="flex flex-col mr-16">
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              caption="Caption"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              caption="Caption"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              caption="Caption"
            />
          </div>

          {/*Default-caption-label*/}
          <div className="flex flex-col mr-16">
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              label="Label"
              caption="Caption"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              label="Label"
              caption="Caption"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              label="Label"
              caption="Caption"
            />
          </div>
        </div>

        {/*Sm*/}
        <div className="text-xl">Size SM</div>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col mr-16">
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              size="SM"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              size="SM"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              size="SM"
            />
          </div>

          {/*Sm - label*/}
          <div className="flex flex-col mr-16">
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              size="SM"
              label="Label"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              size="SM"
              label="Label"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              size="SM"
              label="Label"
            />
          </div>

          {/*Sm - caption*/}
          <div className="flex flex-col mr-16">
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              size="SM"
              caption="Caption"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              size="SM"
              caption="Caption"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              size="SM"
              caption="Caption"
            />
          </div>

          {/*Sm-caption-label*/}
          <div className="flex flex-col mr-16">
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              size="SM"
              label="Label"
              caption="Caption"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              size="SM"
              label="Label"
              caption="Caption"
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              size="SM"
              label="Label"
              caption="Caption"
            />
          </div>
        </div>

        {/*Change icon*/}
        <div className="text-xl">Change icon</div>

        <div className="flex justify-between mb-6">
          <div className="flex flex-col mr-16">
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              Icon={MinusIcon}
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              Icon={MinusIcon}
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              Icon={MinusIcon}
            />
          </div>

          {/*Default - label*/}
          <div className="flex flex-col mr-16">
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              label="Label"
              Icon={MinusIcon}
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              label="Label"
              Icon={MinusIcon}
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              label="Label"
              Icon={MinusIcon}
            />
          </div>

          {/*Default - caption*/}
          <div className="flex flex-col mr-16">
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              caption="Caption"
              Icon={MinusIcon}
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              caption="Caption"
              Icon={MinusIcon}
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              caption="Caption"
              Icon={MinusIcon}
            />
          </div>

          {/*Default-caption-label*/}
          <div className="flex flex-col mr-16">
            <Checkbox
              checked={checked}
              onClick={() => setChecked(!checked)}
              label="Label"
              caption="Caption"
              Icon={MinusIcon}
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              label="Label"
              caption="Caption"
              Icon={MinusIcon}
            />
            <Checkbox
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              label="Label"
              caption="Caption"
              Icon={MinusIcon}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
