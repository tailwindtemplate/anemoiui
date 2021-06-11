import { UserGroupIcon } from "@heroicons/react/outline";

export const Profile = () => {
  return (
    <>
      <div className="bg-white border w-80 rounded-3xl">
        <div className="bg-white mt-5 mx-24 mb-14">
          <UserGroupIcon className="bg-gray-200 rounded-full flex items-center justify-center" />
        </div>
        <p className="m-5 text-center">Những người bạn dễ dễ thương</p>
      </div>
      <div className="bg-white border w-80 mt-3 rounded-3xl">
        <div className="bg-white mt-5 mx-24 mb-14">
        </div>
      </div>
    </>
  )
};