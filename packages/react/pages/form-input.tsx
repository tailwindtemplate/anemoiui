import { ChevronLeftIcon, ChevronDownIcon } from '@heroicons/react/outline'

export default function FormInput () {
    return (
        <div className="grid grid-cols-2 items-center shadow-xl border border-2 h-full">
                <img className="" src="https://huongdanaz.net/uploads/huongdanaz_hahalolo_1597482761.png" />
            <div className="bg-white shadow-3xl rounded-3xl">
                <div className="m-8 space-y-4">
                    <div className="flex">
                        <div className="w-5 text-gray-600"><ChevronLeftIcon/></div>
                        <div className="text-gray-500 text-base pl-4">Quay lại</div>
                    </div>
                    <div className="text-primary-20 text-5xl font-bold">Xin chào!</div>
                    <div className="text-xl text-justify">Chào mừng bạn đến với trang đăng nhập Hayov. Nhập số điện thoại để bắt đầu sử dụng</div>
                    <div className="border border-black text-base rounded-2xl flex justify-between p-4">
                        <div>+84</div>
                        <div className="w-5 flex items-end"><ChevronDownIcon/></div>
                        <input placeholder="Số điện thoại"></input>
                    </div>
                    <div className="bg-primary-20 rounded-2xl text-white text-center text-base p-4">BẮT ĐẦU</div>
                </div>
            </div>
        </div>
    )
}
