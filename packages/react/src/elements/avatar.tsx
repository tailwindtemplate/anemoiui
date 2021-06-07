import React from "react";
import clsx from "clsx";
import DefaultAvatar from "../../assets/images/default-avatar.svg";

type Textarea = {
  className?: string;
  src?: string;
  size?: string;
  isRounded?: boolean;
  newMessage?: number;
};

const SIZE_MAPS: any = {
  XS: "w-8 h-8",
  SM: "w-12 h-12",
  BASE: "w-16 h-16"
};

const SIZE_DEFAULT_MAPS: any = {
  XS: "w-4 h-4",
  SM: "w-6 h-6",
  BASE: "w-8 h-8"
};

export default function Avatar({
  className,
  size = "BASE",
  src,
  isRounded = false,
  newMessage
}: Textarea) {
  return (
    <div
      className={clsx(
        "rounded-xl bg-primary-400 flex items-center justify-center m-2",
        SIZE_MAPS[size],
        isRounded && "!rounded-full",
        src && "bg-cover bg-no-repeat bg-center",
        newMessage && "relative",
        className
      )}
      style={{ backgroundImage: `url('${src}')` }}
    >
      {src ? (
        <img className="invisible" src={src} />
      ) : (
        <DefaultAvatar fill="#FFF" className={SIZE_DEFAULT_MAPS[size]} />
      )}
      {newMessage && (
        <div className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full">
          {newMessage}
        </div>
      )}
    </div>
  );
}

export function PreviewAvatar() {
  return (
    <div>
      <Avatar size="XS" />
      <Avatar size="SM" />
      <Avatar />
      <Avatar size="XS" isRounded />
      <Avatar size="SM" isRounded />
      <Avatar isRounded />
      <Avatar
        src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
        size="XS"
      />
      <Avatar
        src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
        size="SM"
      />
      <Avatar src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg" />
      <Avatar
        src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
        size="XS"
        isRounded
      />
      <Avatar
        src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
        size="SM"
        isRounded
      />
      <Avatar
        src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
        isRounded
      />
      <Avatar size="XS" newMessage={22} />
      <Avatar size="SM" newMessage={22} />
      <Avatar newMessage={22} />
    </div>
  );
}
