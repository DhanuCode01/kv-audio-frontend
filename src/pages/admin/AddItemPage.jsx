import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MediaUpload from "../../utils/MediaUpload.jsx";


export default  function AddItemPage() {

          const [productKey, setProductKey]=useState("");             /* create input data usestate */
          const [productName, setProductName]=useState("");
          const [productPrice, setProductPrice]=useState(0);
          const [productCategory, setProductCategory]=useState("audio");
          const [productDimentions, setProductDimentions]=useState("");
          const [productDiscription, setProductDiscription]=useState("");
          const [productImages,setproductImages]=useState([])//images usestate Array

          const navigate =useNavigate();                  //navigate to you wont location eg:="/admin/item"


          const backendurl=import.meta.env.VITE_BACKEND_URL                // import env



                async function handleAddItem(){            /*  add button onclick function */
                               const promises=[]       //create promises array(used to handle multiple promises)
                               

                              for(let i=0; i<productImages.length; i++){    //read to product image one by one
                                console.log(productImages[i])               //print console log (image one by one)
                                const promise=MediaUpload(productImages[i])      //get promise each file
                                promises.push(promise)                      //push promise to promises array
                              }
                              

                              
                              
                              const token=localStorage.getItem("token");  /*get token*/
                                            
                                      /* if(token == null){
                                        toast.error("please login first");        //1st Method check autherization
                                        }*/
                                       if(token){                                  //2nd Method check autherization

                                              try{

                                                /* Promise.all(promises).then((result)=>{                   //{1st way of execute promises array}        //use try catch
                                                  console.log(result)                                    //execute all promises in one time(Promise.all = In build function)
                                                }).catch((err)=>{
                                                  toast.error(err)
                                                }) */

                                                
                                                const imageURL=await Promise.all(promises) //{2st way of execute promises array}      //useing async await


                                                      const result = await axios.post(`${backendurl}/api/product/add`,{        //link     //.env useing backtick
                                                            
                                                              key:productKey,                         
                                                              name:productName,
                                                              price:productPrice,             //Data required to pass
                                                              category:productCategory,
                                                              dimension:productDimentions,
                                                              discription:productDiscription,
                                                              Image:imageURL
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
                              <input  type="file"  multiple onChange={(e)=>{setproductImages(e.target.files)}} />
                              
                              <button onClick={handleAddItem}>Add</button>      {/* add button */}
                              <button onClick={()=>{navigate("/admin/items")}}>cancel</button>     {/* navigate to click navigate button */}

                </div>
    </div>
  )
}

