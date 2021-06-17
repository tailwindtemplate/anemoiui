import React from 'react';
import { ChooseMember } from "../../src/sections/choose-member";
export default function Choosemember() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div className="bg-gray-200">
      <button className="border p-4 m-2 rounded-md border-green-400" onClick={() => setOpen(!open)}>Choose member</button>
      <ChooseMember open={open} setOpen={setOpen} />
    </div>
  )
};