import { useState } from "react"

export default function Testing(){
    const[count,setCount]=useState(0)

    const[itemname,setitemname]=useState("coconut")
    

    return(
        <>
        <div  className="w-full h-[500px] bg-blue-200 flex flex-col justify-center items-center">
            <h1 className="text-9xl">{count}{itemname}</h1>
            <button className="w-[200px] h-[60px] bg-black text-white rounded-lg " onClick={()=>{
                const newCount=count+1
                setCount(newCount)

            }}>count</button>
        </div>
        <div className="w-full bg-amber-600 flex justify-evenly items-center p-4">
            <button className="w-[200px] h-[60px] bg-black text-white rounded-lg " onClick={()=>{
              setitemname("coconut")  

            }}>coconut</button>
            <button className="w-[200px] h-[60px] bg-black text-white rounded-lg " onClick={()=>{
               setitemname("banana")   

            }}>banana</button>
            <button className="w-[200px] h-[60px] bg-black text-white rounded-lg " onClick={()=>{
              setitemname("apple")    

            }}>Apple</button>
            <button className="w-[200px] h-[60px] bg-black text-white rounded-lg " onClick={()=>{
               setitemname("other")  

            }}>other</button>

        </div>
        </>
    )
}