import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default  function AddItemPage() {

          const [productKey, setProductKey]=useState("");             /* create input data usestate */
          const [productName, setProductName]=useState("");
          const [productPrice, setProductPrice]=useState(0);
          const [productCategory, setProductCategory]=useState("audio");
          const [productDimentions, setProductDimentions]=useState("");
          const [productDiscription, setProductDiscription]=useState("");

          const navigate =useNavigate();                  //navigate to you wont location eg:="/admin/item"



                async function handleAddItem(){            /*  add button onclick function */
                              
                              const token=localStorage.getItem("token");  /*get token*/
                                            
                                      /* if(token == null){
                                        toast.error("please login first");        //1st Method check autherization
                                        }*/
                                       if(token){                                  //2nd Method check autherization

                                              try{
                                                      const result = await axios.post("http://localhost:3000/api/product/add",{        //link
                                                            
                                                              key:productKey,                         
                                                              name:productName,
                                                              price:productPrice,             //Data required to pass
                                                              category:productCategory,
                                                              dimension:productDimentions,
                                                              discription:productDiscription 
                                                      },{
                                                              headers:{
                                                                Authorization:"Bearer " +token            //pass the bsck end token with data
                                                              }
                                                      })
                                                      toast.success(result.data.Message);

                                                      navigate ("/admin/items")                         //After success, navigate to the admin/items page.


                                                      
                                                }catch(err){
                                                  toast.error(err.response.data.error);
                                                }

                                        }else{
                                                   toast.error("please login first");    
                                        }

                                      

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
                              <textarea onChange={(e)=>{setProductDiscription(e.target.value)}} values={productDiscription} type="text" placeholder="product Discription"/>
                              
                              <button onClick={handleAddItem}>Add</button>      {/* add button */}
                              <button onClick={()=>{navigate("/admin/items")}}>cancel</button>     {/* navigate to click navigate button */}

                </div>
    </div>
  )
}

