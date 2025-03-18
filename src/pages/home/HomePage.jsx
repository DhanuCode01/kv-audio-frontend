import { Route, Routes } from "react-router-dom"
import Header from "../../components/Header.jsx"
import Home from "./Home.jsx"
import Contact from "./Contact.jsx"
import Gallery from "./Gallery.jsx"
import Items from "./Items.jsx"
import Error from "./Error.jsx"


export default function HomePage(){
    return(
        <>
            <Header/>
            <div className="h-[calc(100vh-100px) w-full">
               <Routes path="/*">
                    <Route path="/contact"  element={<Contact/>}></Route>
                    <Route path="/gallery"  element={<Gallery/>}></Route>
                    <Route path="/item"  element={<Items/>}></Route>
                    <Route path="/"  element={<Home/>}></Route>
                    <Route path="/*" element={<Error/>}></Route>
               </Routes>
            </div>
        </>
    )
}