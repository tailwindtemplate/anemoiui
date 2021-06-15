import React, { useMemo } from "react";
// Component
import {Footer} from "../../src/components/modal/footer";
import { Section } from '../../src';
import { Header } from '../../src/components/modal/header';
import { Wrapper } from '../../src/components/modal/wrapper';
 // Render
const CreateNewMessage = () => {
  const [open, setOpen] = React.useState(false);
  console.log('open',open)
  const confirm = useMemo(() => ({
    label: 'confirm',
    onClick: () => setOpen(false),
    className: 'w-full'
  }), [])

  const cancel = useMemo(() => ({
    label: 'cancel',
    onClick: () => setOpen(false),
    className: 'w-full'
  }), [])
  return (
    <Section>
      <button onClick={() => setOpen(!open)}>
        start
      </button>
      <Wrapper setOpen={setOpen} open={open}>
        <Header label={'Create new message'} />
        dasdas
        <Footer confirm={confirm} cancel={cancel} />
      </Wrapper>
    </Section>

  )
};
export default CreateNewMessage;