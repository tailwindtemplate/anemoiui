import { Avatar } from '../../src';
import { TextInput } from '../../src/elements/inputs/text-input';
import { avatarDefault } from "../../const";
type EditNickname = {
  userId?: number,
};
export const EditNickname = ({ userId }: EditNickname) => {
  const user = avatarDefault.find(user => user.id === userId);
  return (
    <div className="mt-6 mb-2">
      <div className="text-center mb-2">
        <Avatar
          type="src"
          isRounded
          size="md"
          className="m-auto"
          src={user?.img}
        />
        <h2 className="py-3 font-semibold text-xl text-gray-900">{user?.name}</h2>
        <p className="pb-2">Mọi người trong cuộc trò chuyện sẽ nhìn thấy biệt danh này</p>
      </div>
      <TextInput
        inputClassName="focus:border-red-500 bg-gray-100 text-gray-500 h-9"
        placeholder="Đổi biệt danh"
      />
    </div>
  )
};