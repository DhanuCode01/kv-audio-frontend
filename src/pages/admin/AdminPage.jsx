import { FaChartBar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineAudiotrack } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { Route,Routes,Link } from "react-router-dom";

function AdminPage() {
  return (
 
      <div className='w-full h-screen flex '>

              <div className='w-[300px] h-full bg-blue-300'>
                    <button className='w-full h-[40px] text-zinc-950 text-[25px] font-bold flex justify-center items-center'>
                            <FaChartBar/>
                              Dashboad
                    </button>
                    <Link to="/admin/bookigs" className='w-full h-[40px] text-zinc-950 text-[25px] font-bold flex justify-center items-center'>
                              <FaRegBookmark />
                              Booking
                    </Link>
                    <Link to="/admin/items" className='w-full h-[40px] text-zinc-950 text-[25px] font-bold flex justify-center items-center'>
                              <MdOutlineAudiotrack/>
                              Items
                    </Link>
                    <button className='w-full h-[40px] text-zinc-950 text-[25px] font-bold flex justify-center items-center'>
                              <FaRegUser/>
                              users
                    </button>
              </div>
              <div className='w-[calc(100vw-300px)] bg-blue-400'>
                  <Routes path="/*">
                    <Route path="/bookigs" element={<h1>Booking</h1>}></Route>
                    <Route path="/*" element={<h1>item</h1>}></Route>
                  </Routes>
              </div>
        
      </div>
              
      

      

  );
}

export default AdminPage;
