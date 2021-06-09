import {Section, Textarea} from '../../src';

export default function PreviewTextarea() {
    return (
        <div className='p-2'>
            <div className='text-3xl'>Textarea</div>
        <Section narrow>
            <Textarea placeholder="Placeholder" />
            <Textarea placeholder="Placeholder" custom="border-primary-400" />
            <Textarea placeholder="Placeholder" type="PRIMARY" />
            <Textarea placeholder="Placeholder" type="ERROR" />
            <Textarea placeholder="Placeholder" helperText="Helper text" />
        </Section>
        </div>
    );
}
