
import { UserCircleIcon, ChevronRightIcon } from "@heroicons/react/outline";

const Crad = () => {
    return (
        <body className="bg-gray-200 ">

        <div className="grid grid-cols-1 ml-5 block inline-block">

            <div className="bg-white mb-3 mt-6 rounded-3xl bd-red flex items-center justify-center text-center">
                <div className="my-5 mx-12 items-center bd-red">
                    <div className="w-28 h-28 mb-5 text-gray-400 rounded-full bd-red">
                        <UserCircleIcon/>
                    </div>
                    <ul>
                        <li className="text-lg mb-2 bd-red">Christopher Campbell</li>
                        <li className="text-gray-500 bd-blue">christcampbell@hahalolo.com</li>
                    </ul>
                </div>
            </div>

            <div className="bg-white w-336 h-260 mb-3 grid grid-cols-2 rounded-3xl bd-red">
                <ul className="text-sm text-gray-500 mt-5 mb-5 ml-5 grid justify-items-start gap-3 bd-blue">
                    <li className="bd-blue text-base">Ma QR</li>
                    <li className="bd-red text-base">Ten hien thi</li>
                    <li className="bd-blue text-base">Gioi tinh</li>
                    <li className="bd-red text-base">Ngay sinh</li>
                    <li className="bd-blue text-base">Dien Thoai</li>
                    <li className="bd-red text-base">Dia chi</li>
                </ul>

                <ul className="text-sm text-black-900 mt-5 mb-5 mr-5 grid justify-items-end gap-3 bd-red">
                    <li className="bd-blue h-5 w-5 text-base"><ChevronRightIcon/></li>
                    <li className="bd-red  text-base">ChristopherCall</li>
                    <li className="bd-blue text-base">Gioi tinh</li>
                    <li className="bd-red text-base">Ngay sinh</li>
                    <li className="bd-blue text-base">Dien Thoai</li>
                    <li className="bd-red text-base">Dia chi</li>
                </ul>
            </div>

            <div className="bg-white w-336 h-24 rounded-3xl grid grid-cols-2 bd-red">
                <ul  className="text-sm text-gray-500 grid justify-items-start">
                    <li>Trang thai</li>
                    <li>Thay doi ho so</li>
                </ul>
                <ul  className="text-sm text-gray-500 grid justify-items-end">
                    <li>Trang thai</li>
                    <li>Thay doi ho so</li>
                </ul>
            </div>

            <div className="bg-white bg-white w-80 mb-3 rounded-3xl max-w-md mx-left bd-red">
                <ul className="text-sm text-gray-500">
                    <li>Tuy chon cai dat</li>
                    <li>Cai dat thong bao</li>
                    <li>Giao dien</li>
                </ul>

            </div>

            <div  className="bg-white bg-white w-80 rounded-3xl max-w-md mx-left bd-red">
                <ul  className="text-sm text-gray-500">
                    <li>Hop thu luu tru</li>
                </ul>
            </div>
        </div>
        </body>

    )
}

export default Crad;
