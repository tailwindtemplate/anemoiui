import React from "react";
import { CreateNewMessage } from '../../../src/sections/create-new-message';
import { Section } from '../../../src';
export default function AppCreateNewMessage() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <Section className="bg-gray-200">
      <button onClick={() => setOpen(!open)} className="border p-4 m-2 rounded-md border-green-400">Create new message</button>
      <CreateNewMessage open={open} setOpen={setOpen} />
    </Section>
  )
};