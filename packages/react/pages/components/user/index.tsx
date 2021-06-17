import React from "react";
// Component
import CreateNewMessage from "./create-new-message";
// Render
export default function Index() {
  const [newMessage, setNewMessage] = React.useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setNewMessage(!newMessage)} className="border p-4 m-2 rounded-md">Create new message</button>
      <CreateNewMessage open={newMessage} setOpen={setNewMessage} />
    </div>
  )
};