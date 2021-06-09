import { NumberInput, Section } from "../../../src";

export default function NumberInputPage() {
  return (
    <div className="p-2">
      <div className="text-3xl">Number Input</div>
      <Section narrow className="flex">
        <div className='m-2'>
          <div className='text-xl'>Default</div> <NumberInput className='mt-2' />
        </div>
        <div className='m-2'>
          <div className='text-xl'>Type: Primary</div>
          <NumberInput type="primary" className='mt-2' />
        </div>
        <div className='m-2'>
          <div className='text-xl'>Type: Error</div>
          <NumberInput type="error" className='mt-2' />
        </div>
        <div className='m-2'>
          <div className='text-xl'>Custom</div>
          <NumberInput className="border-green-500 mt-2" />
        </div>
      </Section>
    </div>
  );
}
