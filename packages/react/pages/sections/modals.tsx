import {Button, Section} from '../../src';
import {useState} from 'react';
import {ModalGroupAdd, ModalImageFocus, ModalInviteFriend, ModalMembersAdd, ModalMessageDeletion, ModalOwnerLeaveGroup, ModalProfileUser, ModalReactionsMessage, ModalReactionsSetting, ModalRenameConversation} from "../../src/";

export default function Modals() {
    const [groupAdd, setGroupAdd] = useState(false);
    const [imageFocus, setImageFocus] = useState(false);
    const [inviteFriend, setInviteFriend] = useState(false);
    const [membersAdd, setMembersAdd] = useState(false);
    const [messageDeletion, setMessageDeletion] = useState(false);
    const [ownerLeave, setOwnerLeave] = useState(false);
    const [profileUser, setProfileUser] = useState(false);
    const [reactionsMessage, setReactionsMessage] = useState(false);
    const [reactionsSetting, setReactionsSetting] = useState(false);
    const [renameConversation, setRenameConversation] = useState(false);

    const className = "border p-2 rounded-md m-2"

    return (
        <Section className="bg-white flex justify-between flex-wrap">
            <div>
                <Button title='Open modal group add' className={className} onClick={() => setGroupAdd(!groupAdd)} />
                {groupAdd && <ModalGroupAdd open={groupAdd} setOpen={setGroupAdd} />}
            </div>

            <div>
                <Button title='Open modal image focus' className={className} onClick={() => setImageFocus(!imageFocus)} />
                {imageFocus && <ModalImageFocus open={imageFocus} setOpen={setImageFocus} />}
            </div>

            <div>
                <Button title='Open modal invite friend' className={className} onClick={() => setInviteFriend(!inviteFriend)} />
                {inviteFriend && <ModalInviteFriend open={inviteFriend} setOpen={setInviteFriend} />}
            </div>

            <div>
                <Button title='Open modal members add' className={className} onClick={() => setMembersAdd(!membersAdd)} />
                {membersAdd && <ModalMembersAdd open={membersAdd} setOpen={setMembersAdd} />}
            </div>

            <div>
                <Button title='Open modal message deletion' className={className} onClick={() => setMessageDeletion(!messageDeletion)} />
                {messageDeletion && <ModalMessageDeletion open={messageDeletion} setOpen={setMessageDeletion} />}
            </div>

            <div>
                <Button title='Open modal owner leave' className={className} onClick={() => setOwnerLeave(!ownerLeave)} />
                {ownerLeave && <ModalOwnerLeaveGroup open={ownerLeave} setOpen={setOwnerLeave} />}
            </div>

            <div>
                <Button title='Open modal profile user' className={className} onClick={() => setProfileUser(!profileUser)} />
                {profileUser && <ModalProfileUser open={profileUser} setOpen={setProfileUser} />}
            </div>

            <div>
                <Button title='Open modal reactions message' className={className} onClick={() => setReactionsMessage(!reactionsMessage)} />
                {reactionsMessage && <ModalReactionsMessage open={reactionsMessage} setOpen={setReactionsMessage} />}
            </div>

            <div>
                <Button title='Open modal reactions setting' className={className} onClick={() => setReactionsSetting(!reactionsSetting)} />
                {reactionsSetting && <ModalReactionsSetting open={reactionsSetting} setOpen={setReactionsSetting} />}
            </div>

            <div>
                <Button title='Open modal rename conversation' className={className} onClick={() => setRenameConversation(!renameConversation)} />
                {renameConversation && <ModalRenameConversation open={renameConversation} setOpen={setRenameConversation} />}
            </div>
        </Section>
    );
}
