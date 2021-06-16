import React from "react";
import { useRouter } from 'next/router';
// data default
import { avatarDefault } from "../../../const";
//Icon
import { ChatIcon, SearchIcon, XIcon, CheckIcon } from "@heroicons/react/outline";
// Component
import { Footer } from "../../../src/components/modal/footer";
import { Section, Avatar } from '../../../src';
import { Header } from '../../../src/components/modal/header';
import { Wrapper } from '../../../src/components/modal/wrapper';
import TextInput from '../../../src/elements/inputs/text-input';
import clsx from "clsx";
// Render
const CreateNewMessage = () => {
  const router = useRouter();
  // create state
  const [search, setSearch] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [iconRight, setIconRight] = React.useState(false);
  const [userId, setUserId] = React.useState(null);
  // function
  const activeUserClick = React.useCallback((id) => setUserId(id), [userId]);
  const activeConFirm = (userId) => {
    if (!userId) return;
    router.push(`/components/user/${userId}`);
    setOpen(false);
  };
  const confirm = React.useMemo(() => ({
    label: 'Create new',
    onClick: () => activeConFirm(userId),
    className: "w-full rounded border py-1 px-4 font-semibold",
  }), [userId]);

  const cancel = React.useMemo(() => ({
    label: 'Cancel',
    onClick: () => setOpen(false),
    className: 'w-full rounded border py-1 px-4 font-semibold	'
  }), []);
  const onChangeInput = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length > 0) setIconRight(true);
    else setIconRight(false);
  };
  const actionCloseSearch = () => {
    setSearch('')
    setIconRight(false);
    setSearch('');
  };
  const ClearIcon = ({ className }) => (
    <XIcon
      className={clsx(className, 'cursor-pointer')}
      onClick={actionCloseSearch} />
  );
  const avatarFilter = avatarDefault.filter(user => { if (user.name.toLowerCase().indexOf(search.trim().toLowerCase()) !== -1) return user });
  React.useEffect(() => {
    if (!open) setUserId(null);
  }, [open]);
  // render
  return (
    <Section>
      <button onClick={() => setOpen(!open)} className="border p-4 m-auto rounded-md">Create new message</button>
      <Wrapper setOpen={setOpen} open={open}>
        <Header
          label="Create new message"
          labelClassName="font-semibold	text-xl	text-black"
          Icon={ChatIcon}
          iconClassName="w-9 h-9 mb-4 text-green-400"
        />
        <TextInput
          value={search}
          onChange={onChangeInput}
          LeftIcon={SearchIcon}
          RightIcon={iconRight && ClearIcon}
          inputClassName="focus:border-red-500 bg-gray-100 text-gray-500"
        />
        <Section>
          {
            avatarFilter.length > 0 ? (
              avatarFilter.map(({ img, name, id }) => (
                <div
                  onClick={() => activeUserClick(id)}
                  className={clsx("flex mb-2 h-16 items-center border-b cursor-pointer font-semibold text-gray-400 hover:text-gray-500 capitalize", id === userId && 'active')}
                  key={id}
                >
                  <Avatar
                    src={img}
                    type="src"
                    isRounded
                    size="sm"
                  />
                  <p className="px-2">{name}</p>
                  {id === userId && <CheckIcon className="w-7 h-7 text-green-400 absolute right-10" />}
                </div>
              ))) : (
              <div className="text-center">
                <h3 className="font-bold text-2xl	text-black mt-2">Kết quả không tìm thấy</h3>
                <p className="text-sm	font-semibold	text-current">Không tìm thấy kết quả: {search}</p>
              </div>
            )
          }
        </Section>
        <Footer
          confirm={confirm}
          cancel={cancel}
        />
      </Wrapper>
    </Section>
  )
};
export default CreateNewMessage;