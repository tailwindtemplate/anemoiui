import { Dropdown, DropdownOverFlow, Section } from "../../src";
import { dropdown } from "../../const";

export default function DropdownPage() {
  return (
    <div className="p-2">
      <div className="text-3xl">Dropdowns</div>
      <Section>
        <DropdownOverFlow label="overflow" items={dropdown} />
        <Dropdown label="dropdown" items={dropdown} />
      </Section>
    </div>
  );
}
