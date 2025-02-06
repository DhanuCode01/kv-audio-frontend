import "./productCard.css"


export default function ProductCard(props){

    console.log(props);
    console.log(props.name);

    return(
        <div>
            <img src={props.imgURL}/>
            <span>{props.name}</span>
            <span>LKR.{props.price}</span>
            <h1>Product Card</h1>
        </div>
    )
}