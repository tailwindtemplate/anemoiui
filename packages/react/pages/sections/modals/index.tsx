import React from "react";
// Component
import { Section } from '../../../src';
import { ChooseMember, EditNickname } from "../../../src/sections/modals";
import { CreateNewMessage } from '../../../src/sections/modals/modal-create-new-message';
//Render
export default function Modals() {
  const [members, setMembers] = React.useState<boolean>(false);
  const [nickName, setNickName] = React.useState<boolean>(false);
  const [newMessage, setNewMessage] = React.useState<boolean>(false);
  return (
    <Section className="bg-gray-200">
      <button onClick={() => setNewMessage(!newMessage)} className="border p-4 m-2 rounded-md border-green-400">Create new message</button>
      <button className="border p-4 m-2 rounded-md border-green-400" onClick={() => setMembers(!members)}>Choose member</button>
      <button className="border p-4 m-2 rounded-md border-green-400" onClick={() => setNickName(!nickName)}>Edit nickname</button>
      <ChooseMember open={members} setOpen={setMembers} />
      <EditNickname open={nickName} setOpen={setNickName} />
      <CreateNewMessage open={newMessage} setOpen={setNewMessage} />
    </Section>
  )
};