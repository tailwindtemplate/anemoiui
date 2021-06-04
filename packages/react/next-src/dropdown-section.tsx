import { Dropdown, Section } from '../src';
import { menu } from '../const';

export const DropdownSection = () => {
    return (
        <Section narrow>
            <Dropdown label="dropdown" items={menu} />
        </Section>
    )
}
