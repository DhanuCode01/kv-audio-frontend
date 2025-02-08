import { FaChartBar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineAudiotrack } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

function AdminPage() {
  return (
 
      <div className='w-full h-screen flex '>

              <div className='w-[300px] h-full bg-blue-300'>
                    <button className='w-full h-[40px] text-zinc-950 text-[25px] font-bold flex justify-center items-center'>
                            <FaChartBar/>
                              Dashboad
                    </button>
                    <button className='w-full h-[40px] text-zinc-950 text-[25px] font-bold flex justify-center items-center'>
                              <FaRegBookmark />
                              Booking
                    </button>
                    <button className='w-full h-[40px] text-zinc-950 text-[25px] font-bold flex justify-center items-center'>
                              <MdOutlineAudiotrack/>
                              Items
                    </button>
                    <button className='w-full h-[40px] text-zinc-950 text-[25px] font-bold flex justify-center items-center'>
                              <FaRegUser/>
                              users
                    </button>
              </div>
              <div className='w-full bg-blue-400'>

              </div>
        
      </div>
              
      

      

  );
}

export default AdminPage;
