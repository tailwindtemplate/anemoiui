import { CardGround, CardControl, CardPanel } from '../../src';
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
const AustinWade = [
  { Item: 'Mã QR', Icon: ChevronRightIcon, Label: null },
  { Item: 'Tên hiểm thị', Icon: null, Label: 'Austin Wade' },
  { Item: 'Giới tính', Icon: null, Label: 'Nam' },
  { Item: 'Ngày sinh', Icon: null, Label: '01/01/1990' },
  { Item: 'Điện thoại', Icon: null, Label: '0123 456 789' },
  { Item: 'Địa chỉ', Icon: null, Label: 'Cần Thơ, Việt Nam' }
];
const ChristopherCampbell = [
  { Item: 'Mã QR', Icon: ChevronRightIcon, Label: null },
  { Item: 'Tên hiểm thị', Icon: null, Label: 'Christopher Campbell' },
  { Item: 'Giới tính', Icon: null, Label: 'Nữ' },
  { Item: 'Ngày sinh', Icon: null, Label: '31/01/1990' },
  { Item: 'Điện thoại', Icon: null, Label: '0123 456 789' },
  { Item: 'Địa chỉ', Icon: null, Label: 'An Giang, Việt Nam' }
];
export default function UserProfile() {
  return (
    <div className="flex">
      <div className="mr-4">
        <CardPanel data={[{ Item: 'Đổi tên nhóm', Icon: PencilAltIcon, Label: null }, { Item: 'Cập nhật ảnh đại diện', Icon: CameraIcon, Label: null }]} />
        {/* <CardGround NameGround="Những người bạn dễ thương" CountGround={12} />
        <CardPanel data={[{ Item: 'Đổi tên nhóm', Icon: PencilAltIcon, Label: null }, { Item: 'Cập nhật ảnh đại diện', Icon: CameraIcon, Label: null }]} />
        <CardPanel data={[{ Item: 'Quản lý tập tin', Icon: FolderRemoveIcon, Label: null }]} />
        <CardPanel data={[{ Item: 'Xem thành viên', Icon: UserGroupIcon, Label: null }]} />
        <CardPanel data={[{ Item: 'Bật/ Tắt lịch sử', Icon: ClockIcon, Label: null }]} />
        <CardPanel data={[{ Item: 'Ẩn cuộc trò chuyện', Icon: EyeOffIcon, Label: null }, { Item: 'Xóa cuộc trò chuyện', Icon: TrashIcon, Label: null }]} />
        <CardPanel data={[{ Item: 'Bật/ Tắt lịch sử', Icon: ClockIcon, Label: null }]} />
        <CardPanel data={[{ Item: 'Rời khỏi nhóm', Icon: LogoutIcon, Label: null }]} /> */}
      </div>
      {/* <div className="mr-4">
        <CardGround NameGround="Austin Wade" Email="austinwade@gmail.com" />
        <CardItem data={AustinWade} />
        <CardItem data={[{ Item: 'Đặt tên gọi nhớ', Icon: PencilAltIcon, Label: null }]} />
        <CardItem data={[{ Item: 'Quản lý tập tin', Icon: FolderRemoveIcon, Label: null }]} />
        <CardItem data={[{ Item: 'Tạo nhóm', Icon: UserGroupIcon, Label: null }, { Item: 'Thêm vào nhóm', Icon: UsersIcon, Label: null }]} />
        <CardItem data={[{ Item: 'Ẩn cuộc trò chuyện', Icon: EyeOffIcon, Label: null }]} />
      </div>
      <div className="mr-4">
        <CardGround NameGround="Christopher Campbell" Email="christcampbell@hahalolo.com" />
        <CardItem data={ChristopherCampbell} />
        <CardItem data={[{ Item: 'Đặt tên gọi nhớ', Icon: PencilAltIcon, Label: null }]} />
        <CardItem data={[{ Item: 'Trạng thái', Icon: StatusOnlineIcon, Label: null }, { Item: 'Thay đổi hồ sơ', Icon: UserIcon, Label: null }]} />
        <CardItem data={[{ Item: 'Tùy chọn cài đặt', Icon: AdjustmentsIcon, Label: null }, { Item: 'Cài đặt thông báo', Icon: BellIcon, Label: null }, { Item: 'Giao diện', Icon: LightBulbIcon, Label: null }]} />
        <CardItem data={[{ Item: 'Hợp thư lưu trữ', Icon: InboxIcon, Label: null }]} />
      </div> */}
    </div>
  )
};

