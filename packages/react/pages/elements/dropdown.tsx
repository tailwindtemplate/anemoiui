import { Dropdown, DropdownOverFlow, Section } from '../../src';
import { dropdown } from '../../const';

export default function DropdownPage() {
    return (
        <Section narrow>
            <DropdownOverFlow label="overflow" items={dropdown} />
            <Dropdown label="dropdown" items={dropdown} />
        </Section>
    )
}
