import React from 'react';
//Icon
import { PencilIcon } from "@heroicons/react/outline";
// default data
import { avatarDefault } from '../../../const';
// Component
import { Avatar } from '../..';
import { Footer } from '../../components/modal/footer';
import { Wrapper } from '../../components/modal/wrapper';
import { Header } from '../../components/modal/header';
import { TextInput } from '../../elements/inputs/text-input';
// Check Type
type ChooseMember = {
  open: boolean,
  setOpen: (e: boolean) => void
};
export const ChooseMember = ({ open, setOpen }: ChooseMember) => {
  // create state
  const [userId, setUserId] = React.useState<number>(0);
  // function
  const canceListUser = React.useMemo(() => ({
    label: 'Cancel',
    onClick: () => setOpen(false),
    className: 'w-full rounded border py-1 px-4 font-semibold'
  }), []);
  const confirm = React.useMemo(() => ({
    label: 'Confirm',
    onClick: () => { setOpen(false); setUserId(0) },
    className: "w-full rounded border py-1 px-4 font-semibold",
  }), [userId]);
  const cancelEditName = React.useMemo(() => ({
    label: 'Cancel',
    onClick: () => setUserId(0),
    className: 'w-full rounded border py-1 px-4 font-semibold'
  }), []);
  return (
    open && (
      <Wrapper setOpen={() => { setOpen(false); setUserId(0) }} open={open}>
        <Header label="Đổi biệt danh" labelClassName="font-semibold	text-xl text-black" iconClassName="w-9 h-9 mb-4 text-green-400" Icon={PencilIcon} />
        {!userId
          // hiện danh sách nếu chưa click vào user
          ? avatarDefault.map(({ img, name, id }) => (
            <div onClick={() => setUserId(id)} className="flex mb-2 h-16 items-center border-b cursor-pointer font-semibold text-gray-400 hover:text-gray-500 capitalize" key={id}>
              <Avatar src={img} type="src" isRounded size="sm" /><p className="px-2">{name}</p>
            </div>
          ))
          // hiện user khi click và form edit
          : <div className="mt-6 mb-2">
            <div className="text-center mb-2">
              <Avatar type="src" isRounded size="md" className="m-auto" src={avatarDefault[userId].img} />
              <h2 className="py-3 font-semibold text-xl text-gray-900">{avatarDefault[userId].name}</h2>
              <p className="pb-2">Mọi người trong cuộc trò chuyện sẽ nhìn thấy biệt danh này</p>
            </div>
            <TextInput inputClassName="focus:border-red-500 bg-gray-100 text-gray-500 h-9" placeholder="Đổi biệt danh" />
          </div>
        }
        {!userId ? <Footer cancel={canceListUser} /> : <Footer confirm={confirm} cancel={cancelEditName} />}
      </Wrapper>
    )
  )
};