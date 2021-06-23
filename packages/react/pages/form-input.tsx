import { ChevronLeftIcon, ChevronDownIcon } from '@heroicons/react/outline'

export default function FormInput () {
    return (
        <div className="grid grid-cols-2 shadow-xl border border-2 ">
                <img className="h-full" src="https://huongdanaz.net/uploads/huongdanaz_hahalolo_1597482761.png" />
            <div className="bg-white shadow-3xl rounded-3xl">
                <div className="m-8 space-y-4">
                    <div className="flex">
                        <div className="w-5 text-gray-500 "><ChevronLeftIcon/></div>
                        <div className="text-gray-500 text-base"> Quay lai</div>
                    </div>
                    <div className="text-primary-20 text-5xl font-bold">Xin chào!</div>
                    <div className="text-xl text-justify">Chào mừng bạn đến với trang đăng nhập Hayov. Nhập số điện thoại để bắt đầu sử dụng</div>
                    <div className="border border-black text-base rounded-2xl flex justify-items-center p-5">
                        <span className="grid grid-cols-2"> +84 <ChevronDownIcon/> </span>
                        <input  placeholder="So dien thoai"></input>
                    </div>
                    <div className="bg-primary-20 rounded-2xl text-white text-center text-base p-5">BẮT ĐẦU</div>
                </div>
            </div>
        </div>
    )
}
