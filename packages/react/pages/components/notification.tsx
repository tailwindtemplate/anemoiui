import clsx from 'clsx';
import React from 'react'
import { carouselUser } from '../../const';
import { Section } from '../../src'
import { NotificationModal } from '../../src/components/notification-modal'
import { UserCard } from "../../src"
import { ChatAlt2Icon, CogIcon } from '@heroicons/react/outline';
import { FooterNotification, HeaderNotification } from '../../src/components/notification-modal'
export default function NotifiCation() {
  const [userId, setUserId] = React.useState<string>(null);
  const active = React.useCallback((id) => setUserId(id), [userId]);
  const [tick, setTick] = React.useState<boolean>(false);
  return (
    <Section className="bg-white flex py-24">
      <div className="m-auto w-96 shadow-lg rounded-lg">
        <HeaderNotification title="Messenger" >
          <CogIcon className="text-gray-500 w-5 h-5 mx-1 cursor-pointer transform hover:text-gray-700" />
          <ChatAlt2Icon className="text-gray-500 w-5 h-5 mx-1 cursor-pointer transform hover:text-gray-700" />
        </HeaderNotification>
        <NotificationModal>
          {
            carouselUser.map(({ id, img }) => (
              <UserCard
                content="utilities for controlling the border radius of an element."
                time="09:07"
                className={clsx("rounded mx-2 mb-2 rounded-sm transform hover:bg-gray-100 cursor-pointer", id === userId && "bg-gray-200", tick && "bg-gray-200")}
                avatar={img}
                title={id}
                key={id}
                onClick={() => active(id)}
              />
            ))
          }
        </NotificationModal>
        <FooterNotification>
          <p className="px-4 py-2 text-blue-500 text-sm	text-sm cursor-pointer">Mở bằng messenger</p>
          <p className="px-4 py-2 text-blue-500 text-sm	text-sm cursor-pointer" onClick={() => { setTick(!tick); setUserId(null); }}>Đánh dấu tất cả chưa đọc</p>
        </FooterNotification>
      </div>
    </Section>
  )
};


