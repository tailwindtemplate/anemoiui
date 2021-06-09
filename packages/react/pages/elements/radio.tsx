import { Radio, Section } from "../../src";
import { useState } from "react";

export default function PreviewRadio() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="p-2">
      <div className="text-3xl">Radio</div>
      <Section className="flex flex-col" narrow>
        {/*Default*/}
        <div className="flex justify-between mb-10">
          <div className="flex flex-col mr-16">
            <Radio checked={checked} onClick={() => setChecked(true)} />
            <Radio checked={!checked} onClick={() => setChecked(false)} />
            <Radio checked={true} onClick={() => setChecked(!checked)} />
            <Radio
              checked={checked}
              onClick={() => setChecked(!checked)}
              disabled={true}
            />
            <Radio
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
            />
          </div>

          {/*Default - label*/}
          <div className="flex flex-col mr-16">
            <Radio
              checked={checked}
              onClick={() => setChecked(true)}
              label="Label"
            />
            <Radio
              checked={!checked}
              onClick={() => setChecked(false)}
              label="Label"
            />
            <Radio
              checked={true}
              onClick={() => setChecked(!checked)}
              label="Label"
            />
            <Radio
              checked={checked}
              onClick={() => setChecked(!checked)}
              disabled={true}
              label="Label"
            />
            <Radio
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              label="Label"
            />
          </div>

          {/*Default - caption*/}
          <div className="flex flex-col mr-16">
            <Radio
              checked={checked}
              onClick={() => setChecked(true)}
              caption="Caption"
            />
            <Radio
              checked={!checked}
              onClick={() => setChecked(false)}
              caption="Caption"
            />
            <Radio
              checked={true}
              onClick={() => setChecked(!checked)}
              caption="Caption"
            />
            <Radio
              checked={checked}
              onClick={() => setChecked(!checked)}
              disabled={true}
              caption="Caption"
            />
            <Radio
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              caption="Caption"
            />
          </div>

          {/*Default-caption-label*/}
          <div className="flex flex-col mr-16">
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
            <Radio
              checked={true}
              onClick={() => setChecked(!checked)}
              caption="Caption"
              label="Label"
            />
            <Radio
              checked={checked}
              onClick={() => setChecked(!checked)}
              disabled={true}
              caption="Caption"
              label="Label"
            />
            <Radio
              checked={true}
              onClick={() => setChecked(!checked)}
              disabled={true}
              caption="Caption"
              label="Label"
            />
          </div>
        </div>
        {/*Sm*/}
        <div className='flex justify-between'>
          <div className="flex flex-col mr-16">
            <Radio checked={checked} onClick={() => setChecked(true)} size="SM" />
            <Radio
                checked={!checked}
                onClick={() => setChecked(false)}
                size="SM"
            />
            <Radio
                checked={true}
                onClick={() => setChecked(!checked)}
                size="SM"
            />
            <Radio
                checked={checked}
                onClick={() => setChecked(!checked)}
                disabled={true}
                size="SM"
            />
            <Radio
                checked={true}
                onClick={() => setChecked(!checked)}
                disabled={true}
                size="SM"
            />
          </div>

          {/*Sm - label*/}
          <div className="flex flex-col mr-16">
            <Radio
                checked={checked}
                onClick={() => setChecked(true)}
                label="Label"
                size="SM"
            />
            <Radio
                checked={!checked}
                onClick={() => setChecked(false)}
                label="Label"
                size="SM"
            />
            <Radio
                checked={true}
                onClick={() => setChecked(!checked)}
                label="Label"
                size="SM"
            />
            <Radio
                checked={checked}
                onClick={() => setChecked(!checked)}
                disabled={true}
                label="Label"
                size="SM"
            />
            <Radio
                checked={true}
                onClick={() => setChecked(!checked)}
                disabled={true}
                label="Label"
                size="SM"
            />
          </div>

          {/*Sm - caption*/}
          <div className="flex flex-col mr-16">
            <Radio
                checked={checked}
                onClick={() => setChecked(true)}
                caption="Caption"
                size="SM"
            />
            <Radio
                checked={!checked}
                onClick={() => setChecked(false)}
                caption="Caption"
                size="SM"
            />
            <Radio
                checked={true}
                onClick={() => setChecked(!checked)}
                caption="Caption"
                size="SM"
            />
            <Radio
                checked={checked}
                onClick={() => setChecked(!checked)}
                disabled={true}
                caption="Caption"
                size="SM"
            />
            <Radio
                checked={true}
                onClick={() => setChecked(!checked)}
                disabled={true}
                caption="Caption"
                size="SM"
            />
          </div>

          {/*Sm-caption-label*/}
          <div className="flex flex-col mr-16">
            <Radio
                checked={checked}
                onClick={() => setChecked(true)}
                caption="Caption"
                label="Label"
                size="SM"
            />
            <Radio
                checked={!checked}
                onClick={() => setChecked(false)}
                caption="Caption"
                label="Label"
                size="SM"
            />
            <Radio
                checked={true}
                onClick={() => setChecked(!checked)}
                caption="Caption"
                label="Label"
                size="SM"
            />
            <Radio
                checked={checked}
                onClick={() => setChecked(!checked)}
                disabled={true}
                caption="Caption"
                label="Label"
                size="SM"
            />
            <Radio
                checked={true}
                onClick={() => setChecked(!checked)}
                disabled={true}
                caption="Caption"
                label="Label"
                size="SM"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
