import { Dropdown, DropdownOverFlow, Heading2, Heading3, Section } from '../../src';
import { dropdown } from "../../src/const";

export default function DropdownPage() {
  return (
      <div className="space-y-4">
          <Heading2>Dropdowns</Heading2>
          <Heading3>Overflow Dropdown</Heading3>
          <Section className="mb-8 flex items-center justify-center border bg-white">
              <DropdownOverFlow label="Options" items={dropdown} />
          </Section>

          <Heading3>Default dropdown</Heading3>
          <Section className="flex items-center justify-center border bg-white">
              <Dropdown label="Options" items={dropdown} />
          </Section>
      </div>
  );
}
