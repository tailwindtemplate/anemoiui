import { Dropdown, DropdownOverFlow, Section } from "../../src";
import { dropdown } from "../../const";

export default function DropdownPage() {
  return (
    <div className="p-2">
      <div className="text-3xl my-8">Dropdowns</div>

        Overflow Dropdown
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <DropdownOverFlow label="Options" items={dropdown} />
      </Section>

        Default dropdown
      <Section className="flex items-center justify-center border bg-white">
        <Dropdown label="Options" items={dropdown} />
      </Section>
    </div>
  );
}
