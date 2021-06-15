import React from 'react';
import clsx from 'clsx';
// Default Props
type CartGround = {
  cartGroundClassName?: string,
  countGround?: number,
  countGroundClassName?: string,
  nameGround?: string,
  nameGroundClassName?: string,
  avatar?: string,
  avatarClassName?: string,
  email?: string,
  emailClassName?: string
};
const avatarDefault = "https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg";
export const CardGround = ({
  cartGroundClassName,
  countGround,
  countGroundClassName,
  nameGround,
  nameGroundClassName,
  avatar = avatarDefault,
  avatarClassName,
  email,
  emailClassName

}: CartGround) => {
  return (
    <div className={clsx("bg-gray-50 w-336 rounded-3xl pt-5 pb-5 px-5 mt-6 mr-6 flex justify-center	items-center flex-col relative", cartGroundClassName)}>
      <img src={avatar} alt={avatar} className={clsx("bg-gray-200 rounded-full w-116 h-116 stroke-1 object-fill", avatarClassName)} />
      {
        countGround &&
        <div className={clsx("absolute bg-yellow-1000 rounded-2xl h-9	w-61 font-medium text-black py-0.5 px-4 top-100 left-110 box-border border-white border", countGroundClassName)}>
          <span className="font-bold text-2xl">{countGround}</span>
        </div>
      }
      <h3 className={clsx("font-medium text-lg mt-5 text-center font-mulish", nameGroundClassName)}>{nameGround}</h3>
      <p className={clsx("font-normal text-lg text-gray-500 mt-2 font-mulish", emailClassName)}>{email}</p>
    </div>
  )
};