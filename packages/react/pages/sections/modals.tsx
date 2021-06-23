import {Button, ModalChooseMemberEditNickname, ModalCreateNewMessage, ModalEditNickname, Section} from '../../src';
import {useState} from 'react';
import {ModalGroupAdd, ModalImageFocus, ModalInviteFriend, ModalMembersAdd, ModalMessageDeletion, ModalOwnerLeaveGroup, ModalProfileUser, ModalReactionsMessage, ModalReactionsSetting, ModalRenameConversation} from "../../src/";
import {ModalConfirm} from "../../src/sections/modals/modal-confirm";

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
    const [confirm, setConfirm] = useState(false);

    const [members, setMembers] = useState<boolean>(false);
    const [nickName, setNickName] = useState<boolean>(false);
    const [newMessage, setNewMessage] = useState<boolean>(false);

    const className = "border p-2 rounded-md m-2"

    return (
        <Section className="bg-white flex flex-col">

            <Button title='Open modal invite friend' className={className} onClick={() => setInviteFriend(!inviteFriend)} />
            <Button title='Open modal image focus' className={className} onClick={() => setImageFocus(!imageFocus)} />
            <Button title='Open modal group add' className={className} onClick={() => setGroupAdd(!groupAdd)} />
            <Button title='Open modal members add' className={className} onClick={() => setMembersAdd(!membersAdd)} />
            <Button title='Open modal message deletion' className={className} onClick={() => setMessageDeletion(!messageDeletion)} />
            <Button title='Open modal owner leave' className={className} onClick={() => setOwnerLeave(!ownerLeave)} />
            <Button title='Open modal profile user' className={className} onClick={() => setProfileUser(!profileUser)} />
            <Button title='Open modal reactions message' className={className} onClick={() => setReactionsMessage(!reactionsMessage)} />
            <Button title='Open modal reactions setting' className={className} onClick={() => setReactionsSetting(!reactionsSetting)} />
            <Button title='Open modal rename conversation' className={className} onClick={() => setRenameConversation(!renameConversation)} />
            <Button title='Open modal confirm' className={className} onClick={() => setConfirm(!confirm)} />
            <Button title="Create new message" onClick={() => setNewMessage(!newMessage)} className={className} />
            <Button title="Choose member edit nickname" className={className} onClick={() => setMembers(!members)} />
            <Button title="Edit nickname" className={className} onClick={() => setNickName(!nickName)} />

            <ModalInviteFriend open={inviteFriend} setOpen={setInviteFriend} />
            <ModalImageFocus open={imageFocus} setOpen={setImageFocus} />
            <ModalGroupAdd open={groupAdd} setOpen={setGroupAdd} />
            <ModalMembersAdd open={membersAdd} setOpen={setMembersAdd} />
            <ModalMessageDeletion open={messageDeletion} setOpen={setMessageDeletion} />
            <ModalOwnerLeaveGroup open={ownerLeave} setOpen={setOwnerLeave} />
            <ModalProfileUser open={profileUser} setOpen={setProfileUser} />
            <ModalReactionsMessage open={reactionsMessage} setOpen={setReactionsMessage} />
            <ModalReactionsSetting open={reactionsSetting} setOpen={setReactionsSetting} />
            <ModalRenameConversation open={renameConversation} setOpen={setRenameConversation} />
            <ModalConfirm open={confirm} setOpen={setConfirm} content="Bạn chắc chắn muốn xoá cuộc trò chuyện này? Nếu xoá bạn sẽ không khôi phục được cuộc trò chuyện này!" />
            <ModalChooseMemberEditNickname open={members} setOpen={setMembers} />
            <ModalEditNickname open={nickName} setOpen={setNickName} />
            <ModalCreateNewMessage open={newMessage} setOpen={setNewMessage} />
        </Section>
    );
}
