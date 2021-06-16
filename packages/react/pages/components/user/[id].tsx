import clsx from "clsx";
import React from "react";
import { useRouter } from 'next/router';
// data default
import { avatarDefault } from "../../../const";
// Component
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { Avatar } from '../../../src';
import TextInput from '../../../src/elements/inputs/text-input';
// Render

const UserId = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const userId = avatarDefault.find(user => user.id === id);
  // create state
  const [iconRight, setIconRight] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [localStoragemMessage, setLocalStoragemMessage] = React.useState([]);
  const [localStoragemMessageAll, setLocalStoragemMessageAll] = React.useState([]);
  // function
  React.useEffect(() => {
    const newMessage = [];
    const message = JSON.parse(localStorage.getItem('message')) || [];
    setLocalStoragemMessageAll(message)
    message.forEach(mes => (mes.id === id) && newMessage.push(mes))
    setLocalStoragemMessage(newMessage);
  }, [id, message]);
  const onChangeInput = (e) => {
    setMessage(e.target.value);
    if (e.target.value.length > 0) setIconRight(true);
    else setIconRight(false);
  };
  const sendMessage = () => {
    const data = { id, message };
    const newMessage = [...localStoragemMessageAll];
    newMessage.push(data);
    localStorage.setItem("message", JSON.stringify(newMessage));
    setMessage('');
    setIconRight(false);
  }
  const onSubmit = e => {
    e.preventDefault();
    sendMessage();
  };
  const SenMessage = ({ className }) => (<PaperAirplaneIcon onClick={sendMessage} className={clsx(className, "right-9 absolute cursor-pointer	text-green-400")} />);
  return (
    <div className="bg-gray-100 ">
      {
        userId ?
          <div className="relative ">
            <div className="py-6 px-8 bg-gray-200 flex sticky top-0">
              <Avatar
                src={userId.img}
                type="src"
                isRounded
                size="sm"
              />
              <div>
                <p className="px-2 text-black	font-semibold text-base">{userId.name}</p>
                <p className="px-2 text-gray-400 text-xs">Đang hoạt động</p>
              </div>
            </div>
            {
              localStoragemMessage.length > 0
                // if have data message localStorage
                ? <div className="">
                  <ul className="px-2 py-2 overflow-auto" style={{ height: '40rem' }}>
                    {localStoragemMessage.map((ms, index) => (
                      <li key={index} className="text-right p-2 mb-2">
                        <div className="ml-auto" style={{ width: '500px' }}>
                          <div className="relative text-right">
                            <p className="bg-indigo-500 p-2 bg-white rounded-tl-xl rounded-bl-xl rounded-br-xl text-white relative inline-block">{ms.message}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                // no data message localStorage
                : <div className="h-screen flex justify-center items-center">
                  <div className="text-center">
                    <h1 className="text-black font-bold text-2xl">Vẫy tay để gửi lời chào!</h1>
                    <p className="font-normal	text-base text-gray-500	pt-2">Lời chào là khởi đầu cho một hành trình tuyệt vời!</p>
                  </div>
                </div>
            }
            <div className="pb-2 px-2">
              <form onSubmit={onSubmit}>
                <TextInput
                  value={message}
                  onChange={onChangeInput}
                  RightIcon={iconRight && SenMessage}
                  className="mb-2 shadow-lg px-6 py-4 bg-white rounded-xl"
                  inputClassName="bg-white border-0 border-white"
                  placeholder="Nhập tin nhắn..."
                />
              </form>
            </div>
          </div>
          : <div className="text-center">
            <h3 className="font-bold text-2xl	text-black mt-2">Kết quả không tìm thấy</h3>
          </div>
      }
    </div>
  )
};
export default UserId;