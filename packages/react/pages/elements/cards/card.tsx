
import { UserCircleIcon, ChevronRightIcon } from "@heroicons/react/outline";

const Card = () => {
    return (
        <body className="h-auto" >
            <div className="bg-gray-200 grid grid-cols-2 justify-items-center border border-red-500">
                <div className="h-12 w-12 rounded-full flex items-center justify-center border border-yellow-500">
                    <img src="" alt="avatar"/>
                </div>
                <div className="grid grid-rows-2 border border-blue-500">
                    <div>Charlie Rhiel Madsen</div>
                    <div className="grid grid-cols-2">
                        <div className="border border-yellow-500">Thong tin chinh...</div>
                        <div className="border border-yellow-500">2 gio truoc</div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Card;
