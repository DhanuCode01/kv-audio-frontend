/* import { useState } from "react";
import { formatDate, loadCart } from "../../utils/Cart";
import BookingItem from "../../components/BookingItem";


export default  function BookingPage(){
    const [cart,setcart]=useState(loadCart());

    const today=formatDate(new Date());
    const tommorow=formatDate(new Date(new Date() + 24 * 60 * 60 * 1000));
    
    

    
    
    
    function reloadCart(){
        console.log("cartLoaded")
        setcart(loadCart());
    }
    
    return(
    <div className="w-full h-screen  flex flex-col items-center ">
        <h1>Create Booking</h1>
        <div className="w-full h-full flex flex-col  ">
            
            {
                cart.orderedItems.map((item)=>{
                    return(
                        <BookingItem key={item.key} itemkey={item.key} qty={item.qty} refresh={reloadCart}/>
                    )
                   

                })
            }
        </div>
        
        <div className="w-full flex justify-center bg-accent">
                
         </div>
    </div>

    )
}
 */

import { useState, useEffect } from "react";
import { formatDate, loadCart } from "../../utils/Cart";
import BookingItem from "../../components/BookingItem";
import axios from "axios";
import toast from "react-hot-toast";

export default function BookingPage() {
  const [cart, setcart] = useState(loadCart());

  const today = formatDate(new Date());
  const tomorrow = formatDate(new Date(Date.now() + 24 * 60 * 60 * 1000));

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [dayDifference, setDayDifference] = useState(1);

  const [total,setTotal]=useState(0);


  function handleBookingCreation(){
    const cart=loadCart();
    cart.startingDate=startDate;
    cart.endingDate=endDate;
    cart.days=dayDifference;
    

    if (cart.orderedItems == ""){
      toast.error("Cart Empty......‼️");
      return;
    }

    const token=localStorage.getItem("token");

              axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/order`,cart,{
                        headers:{Authorization:"Bearer " +token }
                   }).then((res)=>{
                          console.log(res);
                          localStorage.removeItem("cart");
                          reloadCart();
                          toast.success("Booking Created 👍✔️")
                   }).catch((err)=>{
                          console.log(err)
                          toast.error("Failed to create Booking ❓❗")
              }) 
  }

        useEffect(() => {
                    
                    const start = new Date(startDate);
                    const end = new Date(endDate);
                    const diffTime = end - start;
                    const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
                    setDayDifference(diffDays);

                    calculateTotal();

        }, [startDate, endDate]);

        function reloadCart() {
            setcart(loadCart());
            calculateTotal();
        }

        function calculateTotal(){
          const cartInfo=loadCart();
            cartInfo.startingDate=startDate;
            cartInfo.endingDate=endDate;
            cartInfo.days=dayDifference;
            const token=localStorage.getItem("token");
             axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/order/quote`,cartInfo,{
                        headers:{Authorization:"Bearer " +token }
                   }).then((res)=>{
                          console.log(res.data.total);
                          setTotal(res.data.total);
                   }).catch((err)=>{
                          console.log(err)           
              })
        }

  return (
    <div className="w-full h-screen flex flex-col items-center p-4">
      <h1 className="text-2xl font-semibold mb-4">Create Booking</h1>

      {/* Date Inputs Section */}
      <div className="w-full max-w-xl bg-gray-100 p-4 rounded shadow mb-6">
        <div className="flex flex-col gap-4">
          <div>
            <label className="block font-medium">Starting Date:</label>
            <input
              type="date"
              min={today}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Ending Date:</label>
            <input
              type="date"
              min={startDate}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Total Days:</label>
            <p className="p-2 bg-white border rounded">{dayDifference} day(s)</p>
          </div>
        </div>
      </div>

      {/* Booking Items */}
      <div className="w-full flex flex-col gap-2 overflow-auto">
        {cart.orderedItems.map((item) => (
          <BookingItem
            key={item.key}
            itemkey={item.key}
            quantity={item.quantity}
            refresh={reloadCart}
          />
        ))}
      </div>
      <div>total :{total.toFixed(2)}</div>
        <div className="w-full max-w-xl mt-6 flex justify-end">
          <button
            onClick={handleBookingCreation}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
          >
            Create Booking
          </button>
        </div>

    </div>
  );
}
