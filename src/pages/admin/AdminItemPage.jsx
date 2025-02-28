import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const SampleArray = [                       //Sample Array (sample Array used to "If you want to build a front end without a backend")
  {
    key: "P001",
    name: "Cricket Bat",
    price: "7500",
    category: "Sports Equipment",
    dimension: "85cm x 10cm x 5cm",
    discription: "High-quality English willow cricket bat.",
    availability: true,
    Image: ["https://example.com/bat1.jpg"]
  },
  {
    key: "P002",
    name: "Cricket Ball",
    price: "1200",
    category: "Sports Equipment",
    dimension: "7cm diameter",
    discription: "Leather ball suitable for professional matches.",
    availability: true,
    Image: ["https://example.com/ball1.jpg"]
  },
  {
    key: "P003",
    name: "Wicket Keeping Gloves",
    price: "3500",
    category: "Cricket Accessories",
    dimension: "Standard Size",
    discription: "Premium quality wicket-keeping gloves with extra grip.",
    availability: false,
    Image: ["https://example.com/gloves1.jpg"]
  },
  {
    key: "P004",
    name: "Cricket Helmet",
    price: "5400",
    category: "Cricket Accessories",
    dimension: "Adjustable Size",
    discription: "Protective helmet with grill for face protection.",
    availability: true,
    Image: ["https://example.com/helmet1.jpg"]
  },
  {
    key: "P005",
    name: "Cricket Pads",
    price: "4800",
    category: "Cricket Accessories",
    dimension: "Standard Size",
    discription: "Lightweight yet strong leg guards for batters.",
    availability: true,
    Image: ["https://example.com/pads1.jpg"]
  }
];






export default function AdminItemPage() {


  const [items,setItems]=useState(SampleArray);                   //create useState to set items (started value  "SampleArray") 


  return (
    <div className="h-full w-full bg-blue-400 relative">
                <table>
                        <thead>
                                <th>key</th>
                                <th>name</th>
                                <th>price</th>
                                <th>category</th>
                                <th>dimension</th>
                                <th>availability</th>
                        </thead>
                        <tbody>


                                {
                                      items.map((Product)=>{              //Map the attribute named items.

                                         console.log(Product)

                                        return(                          //Return the values ​​that should be printed.
                                            <tr key={Product.key}>                          {/* unique values */}                 {/* If there is no unique value     ,    items.map((Product,index)=>   ,  Changed to and repalse   key={index}*/}
                                                <td>{Product.key}</td>
                                                <td>{Product.name}</td>
                                                <td>{Product.price}</td>
                                                <td>{Product.category}</td>
                                                <td>{Product.dimension}</td>
                                                <td>{Product.availability}</td>

                                            </tr>

                                             /*  <tr>
                                                  <td>P005</td>
                                                  <td>Cricket Pads</td>
                                                  <td>4800</td>
                                                  <td>Cricket</td>
                                                  <td>Adjustable Size</td>
                                                  <td>true</td>
                                             </tr> */
                                            )

                                      })
                                }
                              
                        </tbody>
                </table>
                <Link to="/admin/items/add">                                                                                        {/* add new item link */}
                    <CiCirclePlus className="text-[70px] absolute bottom-2 right-2 hover:text-red-600 cursor-pointer  "/>
                </Link>
    </div>
  )
}

