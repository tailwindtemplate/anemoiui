import {
  UserGroupIcon,
  PencilAltIcon,
  CameraIcon,
  FolderRemoveIcon,
  ClockIcon,
  EyeOffIcon,
  TrashIcon,
  LogoutIcon,
  BellIcon,
  UsersIcon,
  StatusOnlineIcon,
  UserIcon,
  InboxIcon,
  LightBulbIcon,
  AdjustmentsIcon,
  ChevronRightIcon
} from "@heroicons/react/outline";
// Component
import { CardGround, CardControl, CardPanel } from '../../src';
// Render
export default function UserProfile() {
  return (
    <div className="flex">
      <div className="mr-4">
        <CardGround nameGround="Những người bạn dễ thương" countGround={12} />
        <CardControl>
          <CardPanel item="Đổi tên nhóm" Icon={PencilAltIcon} />
          <CardPanel item="Cập nhật ảnh đại diện" Icon={CameraIcon} />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Quản lý tập tin" Icon={FolderRemoveIcon} />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Xem thành viên" Icon={UserGroupIcon} />
        </CardControl>
        <CardControl>
          <CardPanel item="Bật/ Tắt lịch sử" Icon={ClockIcon} />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Ẩn cuộc trò chuyện" Icon={EyeOffIcon} />
          <CardPanel item="Xóa cuộc trò chuyện" Icon={TrashIcon} />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Rời khỏi nhóm" itemClassName="text-red-1000" Icon={LogoutIcon} iconClassName="text-red-1000" />
        </CardControl>
        {/**/}
      </div>
      <div className="mr-4">
        <CardGround nameGround="Austin Wade" email="austinwade@gmail.com" />
        {/**/}
        <CardControl>
          <CardPanel item="Mã QR" Icon={ChevronRightIcon} />
          <CardPanel item="Tên hiểm thị" label="Austin Wade" />
          <CardPanel item="Giới tính" label="Nam" />
          <CardPanel item="Ngày sinh" label="01/01/1990" />
          <CardPanel item="Điện thoại" label="0123 456 789" />
          <CardPanel item="Địa chỉ" label="Cần Thơ, Việt Nam" />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Đặt tên gọi nhớ" Icon={PencilAltIcon} />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Quản lý tập tin" Icon={FolderRemoveIcon} />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Tạo nhóm" Icon={UserGroupIcon} />
          <CardPanel item="Thêm vào nhóm" Icon={UsersIcon} />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Ẩn cuộc trò chuyện" Icon={EyeOffIcon} />
        </CardControl>
      </div>
      <div className="mr-4">
      <CardGround nameGround="Christopher Campbell" email="christcampbell@hahalolo.com" />
        <CardGround nameGround="Christopher Campbell" email="christcampbell@hahalolo.com" />
        {/**/}
        <CardControl>
          <CardPanel item="Mã QR" Icon={ChevronRightIcon} />
          <CardPanel item="Tên hiểm thị" label="Christopher Campbell" />
          <CardPanel item="Giới tính" label="Nữ" />
          <CardPanel item="Ngày sinh" label="31/01/1990" />
          <CardPanel item="Điện thoại" label="0123 456 789" />
          <CardPanel item="Địa chỉ" label="An Giang, Việt Nam" />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Đặt tên gọi nhớ" Icon={PencilAltIcon} />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Trạng thái" Icon={StatusOnlineIcon} />
          <CardPanel item="Thay đổi hồ sơ" Icon={UserIcon} />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Tùy chọn cài đặt" Icon={AdjustmentsIcon} />
          <CardPanel item="Cài đặt thông báo" Icon={BellIcon} />
          <CardPanel item="Giao diện" Icon={LightBulbIcon} />
        </CardControl>
        {/**/}
        <CardControl>
          <CardPanel item="Hợp thư lưu trữ" Icon={InboxIcon} />
        </CardControl>
      </div>
    </div>
  )
};

