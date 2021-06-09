import { UserIcon } from "@heroicons/react/outline";
import TextInput from "../../../src/elements/inputs/text-input";
import { Section } from "../../../src";

export default function TextInputPage() {
  return (
    <div className="p-2">
      <div className="text-3xl">Text Input</div>
      <Section narrow className='flex flex-col'>
        <div className='flex justify-between'>
          <div>
            <div className="text-xl">Default</div>
            <TextInput className="w-80" />
          </div>
          <div>
            <div className="text-xl">Type: Error</div>
            <TextInput className="w-80" type="error" />
          </div>
        </div>
        <div className='flex justify-between'>
          <div>
            <div className="text-xl">Left Icon</div>
            <TextInput LeftIcon={UserIcon} className="w-80" />
          </div>
          <div>
            <div className="text-xl">Right Icon</div>
            <TextInput
                LeftIcon={UserIcon}
                RightIcon={UserIcon}
                className="w-80"
            />
          </div>
        </div>

        <div>
          <div className="text-xl">Disable</div>
          <TextInput className="w-80" disabled />
        </div>
      </Section>
    </div>
  );
}
