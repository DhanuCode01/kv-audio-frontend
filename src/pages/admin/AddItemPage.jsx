import { useState } from "react"

export default function AddItemPage() {

  const [productKey, setProductKey]=useState("");             /* create input data usestate */
  const [productName, setProductName]=useState("");
  const [productPrice, setProductPrice]=useState(0);
  const [productCategory, setProductCategory]=useState("audio");
  const [productDimentions, setProductDimentions]=useState("");
  const [productDiscription, setProductDiscription]=useState("");



function handleAddItem(){            /*  add button onclick function */
  console.log(productPrice);
}



  return (
    <div className="w-full h-full flex flex-col items-center">          {/* create item data input  form */}
      <h1>Add Item</h1>
      <div className="w-[400px] border flex flex-col ">
        <input onChange={(e)=>{setProductKey(e.target.value)}} values={productKey} type="text" placeholder="product Key"/>
        <input onChange={(e)=>{setProductName(e.target.value)}} values={productName} type="text" placeholder="product Name"/>
        <input onChange={(e)=>{setProductPrice(e.target.value)}} values={productPrice} type="Number" placeholder="product Price"/>
        <select values={productCategory} onChange={(e)=>{setProductCategory(e.target.value)}}>
              <option key={"audio"}>Audio</option>
              <option key={"light"}>Light</option>
        </select>
        <input onChange={(e)=>{setProductDimentions(e.target.value)}} values={productDimentions} type="text" placeholder="product Dimentions"/>
        <input onChange={(e)=>{setProductDiscription(e.target.value)}} values={productDiscription} type="text" placeholder="product Discription"/>
        
        <button onClick={handleAddItem}>Add</button>      {/* add button */}
        <button>cancel</button>

      </div>
    </div>
  )
}

