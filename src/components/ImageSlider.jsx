import { useState } from "react";

export default function ImageSlider(props){
    const images=props.images;//read props Value
    //console.log(images)

    const [selectedImage,setSelectedImage]=useState(images[0]);//Viewing image states
    return(
        <div className="w-full h-full flex flex-col items-center">
            <img src={selectedImage} alt="product" className="w-full h-[70%] object-cover"/> 
            <div className="w-full h-[150px] flex justify-center  ">
                {
                images.map((image,index)=>{
                  return <img key={index} src={image} alt="product" className={`w-[100px] h-[100px] object-cover cursor-pointer ml-1 ${image == selectedImage && "border border-accent" }`}/*     " ${image == selectedImage && "border border-accent" }"=If the image is selected, draw a border.      */
                            onClick={()=>{
                                setSelectedImage(image);
                            }}
                            />
                })
                }
            </div>
        </div>
    )
}