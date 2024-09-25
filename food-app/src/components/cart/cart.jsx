import { useContext, useState } from 'react'
import './cart.css'
import { MyContext } from '../context/context'
import Cartorderdetails from '../cartorderdetails/cartorderdetails'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Address from './address/address'

function Cartitems (){
     const {cartitem,setcartitem,Decrease,Increase,remove} = useContext(MyContext)
    const[cart,setcart]=useState(true)
    const [orderitems,setorderitems]=useState()
   
    
    
    const[address,setaddress]=useState({
        "firstname":"",
        "lastname":"",
        "email":"",
        "street":"",
        "city":"",
        "state":"",
        "pincode":"",
        "country":"",
        "phonenumber":""
    })
  
    
        
    
    const handleSubmit=()=>{
      
        let item = cartitem
        console.log(address)
        console.log(cartitem)
       let  orderitems=({
            
            "address":address,
            "item":item,
         })
       
        console.log(orderitems)
       // event.preventDefault()
         const data =JSON.stringify(orderitems)
         console.log(data)
        
        fetch('http://127.0.0.1:5000/add_orders', {
            method:'POST',
           // credentials: 'include',
            
           // headers: { 'Content-Type': 'multipart/formdata' },
           headers: {
            'Content-Type': 'application/json'
          },
            body:data
            
              /* other product data */
            
          })
          .then(res => res.text())
          .then(data=>{alert(data)
            setaddress({
                "firstname":"",
                "lastname":"",
                "email":"",
                "street":"",
                "city":"",
                "state":"",
                "pincode":"",
                "country":"",
                "phonenumber":","
            })
          });
        
        }   

    
     

    
    
    return (
        <>
            
       {cartitem?.length>0? <div className='cart-table'>
           <div className='cart'>
            <div className='cart-items-main'> 
                {cart? <div className='cart-items'>
            {cartitem?.map((item,index)=>{
                 return (
                    
               
                    <div className='cart-item' key={index}>
                    <div className='cart-items-img'>
                    <img className='cart-table-item-img' src={'http://127.0.0.1:5000/get_image/'+item.image} alt="" />
                    </div>
                    <div className='cart-item-details'>
                        <div className='cart-item-details-delete'>
                            <span>{item.name}</span>
                            <div onClick={()=>remove(item)}>< MdDelete className='mdDelete1' /></div>
                        </div>
                    <div className='cart-item-price'>
                    <span>{item.restaurant}</span>
                    
                    </div>
                    <div>{item.category}</div>
                    <div className='cart-item-details-btn'>
                          <div>Rs {item.price*item.Quantity}</div>
                        <div className='cart-item-increse-decrease-btn' >
                            <button onClick={()=>Decrease(item)} className='cart-item-quantity' >
                            <FaMinus  className='quantity-decrease-btn'/></button>
                              <span>{item.Quantity}</span>
                        <button className='cart-item-quantity' onClick={()=>Increase(item)}>
                            <FaPlus className='quantity-increase-btn' /></button></div>
                        
                        </div>
                   </div>
                   </div>)
             }
            )  }
              </div>:<Address address={address} setaddress={setaddress}/>} 
                
            
            <div className='cart-order'>
             <Cartorderdetails handleSubmit={handleSubmit} cartitem={cartitem} setcartitem={setcartitem} cart={cart} setcart={setcart}/>
             </div></div>
        </div></div>:<div className='empty-cart' ><h1> empty</h1></div>}
        </>

    )
}
export default Cartitems