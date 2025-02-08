import { Route, Routes } from "react-router-dom"
import Header from "../../components/header"
import Home from "./Home"
import Contact from "./Contact"
import Gallery from "./Gallery"
import Items from "./Items"
import Error from "./Error"


export default function HomePage(){
    return(
        <>
            <Header/>
            <div className="h-[calc(100vh-100px) w-full">
               <Routes path="/*">
                    <Route path="/contact"  element={<Contact/>}></Route>
                    <Route path="/gallery"  element={<Gallery/>}></Route>
                    <Route path="/item"  element={<Items/>}></Route>
                    <Route path="/home"  element={<Home/>}></Route>
                    <Route path="/*" element={<Error/>}></Route>
               </Routes>
            </div>
        </>
    )
}