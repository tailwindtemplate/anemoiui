import React from 'react';
import { UserGroupIcon } from "@heroicons/react/outline";
// Default Props
type CartGround = {
  CountGround?: number
  NameGround?: string,
  Avatar?: any,
  Email?: string
};
export const CartGround = ({
  CountGround,
  NameGround,
  Avatar = UserGroupIcon,
  Email
}: CartGround) => {
  return (
    <div className="bg-white w-80 rounded-3xl pt-5 pb-5 px-5 mt-3 flex justify-center	items-center flex-col relative">
      <Avatar className="bg-gray-200 rounded-full w-28 h-28 stroke-1" />
      {CountGround && <p className="absolute bg-yellow-300 py-0.5 px-4 rounded-2xl mt-28 left-1/3 box-border -top-0	font-medium text-black">{CountGround}</p>}      <h3 className="font-medium text-lg mt-4 text-center">{NameGround}</h3>
      <p className="font-normal text-lg text-gray-500">{Email}</p>
    </div>
  )
};