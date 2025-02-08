import { Link } from "react-router-dom"
export default function Error(){
    return(
        <div>
            404 Error <br></br>
            <Link className="bg-amber-200" to="/home">Go Back to Home</Link>
        </div>
    )
}