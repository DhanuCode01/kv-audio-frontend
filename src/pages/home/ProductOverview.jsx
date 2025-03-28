import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";

export default function ProductOverview(){
    const params =useParams(); //Read and Assign The parameter  //passed
    const key=params.key;

    const[loadingStatus,setloadingStatus]=useState("loading");
    const[product,setProduct]=useState({});

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/${key}`)       //link      //.env useing backtick direct way
        .then((res)=>{
            setProduct(res.data);
            setloadingStatus("loaded")
        }).catch((err)=>{
            console.log(err);
            setloadingStatus("error");
        })
    },[loadingStatus])//re start "useEffect" changed 'loadingState'

    return(
        <div className="w-full  bg-primary h-screen flex justify-center">
                {loadingStatus == "loading" && 
                    <div className="w-full h-full flex justify-center items-center ">
                            <div className="w-[70px] h-[70px] border-b-4 border-b-accent animate-spin rounded-full"></div>
                    </div>
                }
                {loadingStatus == "loaded" && 
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="h-full w-[49%] ">
                            <ImageSlider  images={product.Image}/>  
                        </div>
                        <div className="h-full w-[49%] flex flex-col items-center mx-4 ">
                                <h1 className="text-3xl font-bold text-accent">{product.name}</h1>
                                <h2 className="text-2xl font-bold text-black">{product.category}</h2>
                                <h2 className="text-2xl font-bold text-black">{product.dimension}</h2>
                                <h2 className="text-l font-bold text-black">{product.discription}</h2>
                                <h2 className="text-2xl font-bold text-black">{product.category}</h2>
                                <h2 className="text-2xl font-bold text-green-300">{product.price}</h2>
                                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                                                 Add to Cart
                                </button>
                        </div>
                    </div>
                }
                {loadingStatus === "error" && 
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="text-center">
                            <h2 className="text-2xl font-bold text-red-600">Error loading product</h2>
                            <p className="text-gray-600">Something went wrong. Please try again later.</p>
                </div>
            </div>
}
        </div>
    )
}