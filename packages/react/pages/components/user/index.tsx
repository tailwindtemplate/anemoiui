import React from "react";
// Component
import CreateNewMessage from "./create-new-message";
import EditNickName from "./edit-nick-name";
// Render
export default function Index() {
  const [newMessage, setNewMessage] = React.useState(false);
  const [nickName, setNickName] = React.useState(false);
  return (
    <div>
      <button onClick={() => setNewMessage(!newMessage)} className="border p-4 m-2 rounded-md">Create new message</button>
      <button className="border p-4 m-2 rounded-md" onClick={() => setNickName(!nickName)}>Edit nickname</button>
      <CreateNewMessage open={newMessage} setOpen={setNewMessage} />
      <EditNickName open={nickName} setOpen={setNickName} />
    </div>
  )
}