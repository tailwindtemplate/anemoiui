import React from 'react';
type CartItem = {
  data: {
    Item: string,
    Icon: any,
    Label: string,
    // labelClassName: string | 'font-medium text-gray-500 w-full mb-5'
  }[],
  labelClassName?: string
};
// Default Props
export const CartItem = ({
  data,
}: CartItem) => {
  return (
    <div className="bg-white w-80 rounded-3xl pt-5 px-5 mt-3 flex justify-center items-center flex-col relative">
      {
        data.map(({ Item, Icon, Label }) => (
          <div className="relative w-full">
            <p className="font-medium text-gray-500 w-full mb-5">{Item}</p>
            {
              Label ?
                <p className="font-normal text-gray-900 absolute right-0 top-0 text-base">{Label}</p> :
                <Icon className="w-6 h-6 text-gray-500 transition absolute right-0 top-0 hover:text-gray-900 cursor-pointer" />
            }
          </div>
        ))
      }
    </div>
  )
};