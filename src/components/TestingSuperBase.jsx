import { useState } from "react"
import mediaUpload from "../utils/MediaUpload";

export default function TestingSuperBase(){

    const [file,setFile]=useState(null);

    function uploadFile(){
        console.log(file);
        
        mediaUpload(file).then((publicURL)=>{
            console.log(publicURL)
        })
    }

    return(
        <div className="w-full flex flex-col justify-center items-center h-screen bg-primary">
            <input type="file"  onChange={(e)=>{setFile(e.target.files[0])}} />
            <button onClick={uploadFile} className="w-[200px] h-[50px] bg-accent text-white py-2 rounded-2xl">
                upload
            </button>
        </div>
    )
}