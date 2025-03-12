import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default  function UpdateItem() {

          const location=useLocation()
          

          const [productKey, setProductKey]=useState(location.state.key);             /* create input data usestate */
          const [productName, setProductName]=useState(location.state.name);
          const [productPrice, setProductPrice]=useState(location.state.price);
          const [productCategory, setProductCategory]=useState(location.state.category);
          const [productDimentions, setProductDimentions]=useState(location.state.dimension);
          const [productDiscription, setProductDiscription]=useState(location.state.discription);

         

          const navigate =useNavigate();                  //navigate to you wont location 



                async function handleUpdateItem(){            /*  add button onclick function */
                              
                              const token=localStorage.getItem("token");  /*get token*/
                                            
                                       /* if(token == null){
                                        toast.error("please login first");        //1st Method check autherization
                                        } */
                                            if(token){                                  //2nd Method check autherization

                                              try{
                                                      const result = await axios.put("http://localhost:3000/api/product/"+productKey,{        //link
                                                            
                                                                                     
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
                                                      console.log(result)
                                                      toast.success(result.data.message);

                                                      navigate ("/admin/items")                         //After success, navigate to the admin/items page.


                                                      
                                                }catch(error){
                                                  //console.log(error.response.data.Message)
                                                  toast.error(error.response.data.Message);
                                                }

                                        }else{
                                                   toast.error("please login first");    
                                        }

                                      

                } 



  return (
    <div className="w-full h-full flex flex-col items-center">          {/* create item data update  form */}
      <h1>Update Item</h1>
                <div className="w-[400px] border flex flex-col ">
                              <input disabled onChange={(e)=>{setProductKey(e.target.value)}} value={productKey} type="text" placeholder="product Key"/>
                              <input onChange={(e)=>{setProductName(e.target.value)}} value={productName} type="text" placeholder="product Name"/>
                              <input onChange={(e)=>{setProductPrice(e.target.value)}} value={productPrice} type="Number" placeholder="product Price"/>
                              <select values={productCategory} onChange={(e)=>{setProductCategory(e.target.value)}}>
                                    <option key={"audio"}>Audio</option>
                                    <option key={"light"}>Light</option>
                              </select>
                              <input onChange={(e)=>{setProductDimentions(e.target.value)}} value={productDimentions} type="text" placeholder="product Dimentions"/>
                              <textarea onChange={(e)=>{setProductDiscription(e.target.value)}} value={productDiscription} type="text" placeholder="product Discription"/>
                              
                              <button onClick={handleUpdateItem}>Update Item</button>      {/* update button */}
                              <button onClick={()=>{navigate("/admin/items")}}>cancel</button>     {/* navigate to click navigate button */}

                </div>
    </div>
  )
}

