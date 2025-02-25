import "./LoginPage.css"
import { useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    function handleOnSubmit(e){
           e.preventDefault();
           console.log(email,password)

           axios.post("http://localhost:3000/api/user/user",
            {
                email:email,
                password:password
            }
           ).then((res)=>{
            console.log(res)
            toast.success("Login Success");


            const user=res.data.user;

            if(user.type === "admin"){
                navigate("/admin/");
            }else{
                navigate("/");
            }




           }).catch((error)=>{
            console.log(error)
            toast.error(error.response.data.error)
           })


    }

    return(
        <div className="bg-picture w-full h-screen flex justify-center items-center">
                <form onSubmit={handleOnSubmit}>
                <div className="w-[400px] h-[400px] backdrop-blur-2xl rounded-2xl flex flex-col justify-center items-center relative">
                            <img src="/gym.png" alt="logo" className="w-[100px] h=[100px] absolute top-1 object-cover"/>
                            <input type="email" placeholder="Email" className="mt-6 w-[300px] h=[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                                        value={email}
                                        onChange={(e)=>{
                                            setEmail(e.target.value);
                                        }}/>
                            <input type="password" placeholder="Password" className="mt-6 w-[300px] h=[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                                        value={password}
                                        onChange={(e)=>{
                                            setPassword(e.target.value)
                                        }}/>
                            <button className="my-8 w-[300px] h-[50px] bg-yellow-200 text-2xl text-white rounded-lg border-2 border-s-indigo-100" >Login</button>
                     

                </div>
                </form>

        </div>
    )
    
}