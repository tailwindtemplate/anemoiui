import { Avatar, NewMessage, Status, Section } from "../../src";

export default function PreviewAvatar() {
  return (
    <div className="p-2 mb-20">
      <div className="text-3xl">Avatars</div>
      Size XS -{">"} BASE
      <Section className="mb-8 flex items-center justify-around border bg-white">
        <Avatar size="xs" />
        <Avatar size="sm" />
        <Avatar />
      </Section>

      Short name
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Avatar name="YN" />
      </Section>

      Custom position
      <Section className="mb-8 flex items-center justify-around border bg-white">
        <Avatar name="YN">
          <NewMessage newMessage={22} className="-top-1 -right-1" />
        </Avatar>

        <Avatar name="YN">
          <NewMessage newMessage={22} className="-bottom-1 -right-1" />
        </Avatar>
      </Section>

      Has new message
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          newMessage={22}
          type="src"
          isRounded
        >
          <NewMessage newMessage={22} className="-bottom-1 -right-1" />
        </Avatar>
      </Section>

      Has extension
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Avatar
          size="sm"
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          hasExtension
          type="src"
          isRounded
        />
      </Section>

      Add avatar
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Avatar size="sm" type="add-avatar" isRounded />
      </Section>

      Status
      <Section className="mb-8 flex items-center justify-center border bg-white">
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          type="src"
        >
          <Status className="-top-1 -right-1" />
        </Avatar>
      </Section>

      Border
      <Section className="flex items-center justify-center border bg-white">
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="xs"
          type="src"
          hasBorder
        />
      </Section>
    </div>
  );
}
