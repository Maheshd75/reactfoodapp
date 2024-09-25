import "./itemsselectioncart.css"

import { useContext, useEffect,useState } from "react"
import { MyContext } from "../context/context"




function Itemsselectioncart({selecteditem}){
     const {addtoCart}= useContext(MyContext)
  const [data1,setdata1]=useState()
     useEffect(()=>{
        // Could be GET or POST/PUT/PATCH/DELETE
            fetch('http://127.0.0.1:5000/get_data')
           .then(res => res.json())
            .then((data)=>
           setdata1(data))
           /* { status: 'ok', method: 'GET' } */
        },[])
     
       
    return(
        <div className="items-selection-cart-container">
            <div className="items-selection-cart-header">
                <p className="items-selection-cart-title">{selecteditem}</p>
            </div>
            <div className="items-selection-cart-items-container">
                {data1?.map((item ,index)=>{
                    if (selecteditem === item.category ) {
                    
                    return (
                        
                <div className="items-selection-cart-item" key={index}>
                    
                    <div className="items-selection-cart-item-img">
                        <img src={'http://127.0.0.1:5000/get_image/'+ item.image} alt="" />
                    </div>
                    <div className="items-selection-cart-item-details">
                    <div className="items-selection-cart-item-title">{item.name}</div>
                    <div className="items-selection-cart-item-restaurant">{item.restaurant}</div>
                    
                    <div className="items-selection-cart-item-price-selection">
                    <div className="items-selection-cart-item-price">Rs {item.price}</div>
                    <div className="items-selection-cart-item-price">
                     <button className="btn" onClick={()=>addtoCart(item)} >ADD</button>:
                     </div>
                    </div>
                    </div> 
                </div>) }
                })}
                

            </div>  
        </div>

    )
}
export default Itemsselectioncart