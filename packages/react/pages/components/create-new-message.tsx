import React from "react";
//Icon
import { ChatIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
// Component
import { Footer } from "../../src/components/modal/footer";
import { Section, Avatar } from '../../src';
import { Header } from '../../src/components/modal/header';
import { Wrapper } from '../../src/components/modal/wrapper';
import TextInput from '../../src/elements/inputs/text-input';

// Render
const CreateNewMessage = () => {
  // create state
  const [open, setOpen] = React.useState(false);
  const [iconRight, setIconRight] = React.useState(false);
  // function
  const confirm = React.useMemo(() => ({
    label: 'confirm',
    onClick: () => setOpen(false),
    className: 'w-full rounded border py-1 px-4 font-semibold'
  }), []);
  const cancel = React.useMemo(() => ({
    label: 'cancel',
    onClick: () => setOpen(false),
    className: 'w-full rounded border py-1 px-4 font-semibold	'
  }), []);

  const onChangeInput = (e) => {
    if (e.target.value.length > 0) setIconRight(true);
    else setIconRight(false);
  };
  // render
  return (
    <Section>
      <button onClick={() => setOpen(!open)}>
        New message
      </button>
      <Wrapper setOpen={setOpen} open={open}>
        <Header
          label="Create new message"
          labelClassName="font-semibold	text-xl	text-black"
          Icon={ChatIcon}
          iconClassName="w-9 h-9 mb-4 text-green-400"
        />
        <TextInput
          onChange={onChangeInput}
          LeftIcon={SearchIcon}
          RightIcon={iconRight && XIcon}
          inputClassName="focus:border-red-500 bg-gray-100 text-gray-500"
        />
        <Section>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          newMessage={22}
          type="src"
          isRounded
          size = "sm"
          className=""

        />
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