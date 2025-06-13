import axios from "axios";
import { useEffect, useState } from "react";
import { addToCart, formatDate, removeFormCart } from "../utils/Cart";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

export default function BookingItem(props){
    
    const{itemkey,quantity,refresh}=props; 
    const [item,setitem]=useState(null);
    const [status,setStatus]=useState("loading")

    useEffect(()=>{
        if(status == "loading"){
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/${itemkey}`)       //link      //.env useing backtick direct way
            .then((res)=>{
                console.log(res.data);
                setitem(res.data);
                setStatus("success")
            }).catch((err)=>{
                console.log(err);
                setStatus("error");
                removeFormCart(itemkey);
                refresh();
            })
        }

    },[status])


        
            if (status !== "success") {
                return (
                <div className="flex items-center justify-center p-4 text-gray-500">
                    Loading...
                </div>
                );
                
            }

            const totalPrice = parseFloat(item.price) * quantity;


    return(
                <>
                        <div className="w-full max-w-xl bg-white shadow-md rounded-2xl p-4 mb-4 flex flex-col sm:flex-row items-center gap-4"
                                key={itemkey}>
                                <img
                                    src={item.Image?.[0]}
                                    alt={item.name}
                                    className="w-32 h-32 object-cover rounded-lg"
                                />

                                <div className="flex flex-col flex-grow gap-1">
                                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-sm text-gray-600">{item.discription}</p>
                                    <p className="text-sm text-gray-600">Dimensions: {item.dimension}</p>
                                    <p className="text-sm text-gray-600">Category: {item.category}</p>
                                    <div className="flex gap-2 items-center mt-2">
                                                <span className="text-sm text-gray-700 font-medium">Qty:</span>
                                                <button className="text-red-500 hover:text-red-700 text-2xl"
                                                            onClick={()=>{
                                                                if(quantity == 1){
                                                                    removeFormCart(itemkey);
                                                                    refresh();
                                                                }else{
                                                                    addToCart(itemkey,-1);
                                                                    refresh();
                                                                }
                                                            }}>
                                                    <CiSquareMinus/>
                                                </button>
                                                <span className="text-sm text-gray-800">{quantity}</span>
                                                <button className="text-red-500 hover:text-red-700 text-2xl"
                                                            
                                                            onClick={()=>{
                                                                addToCart(itemkey,+1);
                                                                refresh();

                                                            }}>
                                                    <CiSquarePlus/>
                                                </button>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                            <span className="text-sm font-medium text-gray-700">
                                                Price: Rs. {item.price}
                                            </span>
                                            <span className="text-sm font-semibold text-green-600">
                                                Total: Rs. {totalPrice.toFixed(2)}
                                            </span>
                                    </div>
                                </div>

                                <button
                                    className="mt-2 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl flex flex-col justify-center items-center"
                                    onClick={() => {
                                    removeFormCart(itemkey);
                                    refresh();
                                    }}
                                >
                                    Remove
                                    <FaTrash className="text-black mt-1"/>
                                </button>
                                </div>
                </>
            );
    
}