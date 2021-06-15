import React from 'react';
import clsx from 'clsx';
import { Avatar } from '../../elements';
// Default Props
type CartGround = {
  className?: string,
  countGround?: number,
  nameGround?: string,
  nameGroundClassName?: string,
  avatar?: string,
  avatarClassName?: string,
  email?: string,
  emailClassName?: string
};
export const CardGround = ({
  className,
  countGround,
  nameGround,
  nameGroundClassName,
  avatar,
  avatarClassName,
  email,
  emailClassName
}: CartGround) => {
  return (
    <div className={clsx("bg-gray-50 rounded-3xl p-5 flex justify-center items-center flex-col text-center", className)}>
      <Avatar src={avatar} isRounded className={avatarClassName} size="lg">
        {countGround && <div className="absolute left-0 bottom-0 py-1 px-5 bg-yellow-400 rounded-full">{countGround}</div>}
      </Avatar>
      <h3 className={clsx("font-medium text-lg mt-5 truncate w-full", nameGroundClassName)}>{nameGround}</h3>
      <div className={clsx("font-normal text-lg text-gray-400 mt-2 truncate w-full", emailClassName)}>{email}</div>
    </div>
  )
};
