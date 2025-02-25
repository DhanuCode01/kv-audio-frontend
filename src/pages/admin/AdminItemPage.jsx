import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";


export default function AdminItemPage() {
  return (
    <div className="h-full w-full bg-blue-400 relative">
                <Link to="/admin/items/add">
                    <CiCirclePlus className="text-[70px] absolute bottom-2 right-2 hover:text-red-600 cursor-pointer  "/>
                </Link>
    </div>
  )
}

