import {  useEffect, useState } from 'react'

import './userorders.css'

function Userorders(){
  
    const[userorders,setuserorders]=useState()
    const[user,setuser]=useState()
let user1=0
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/get_orders')
    .then(res => res.json())
     .then((data)=>setuserorders(data))

     

     
    },[])
    useEffect(()=>{ 
        fetch('http://127.0.0.1:5000/get_session')
     .then(res => res.json())
     .then((data)=>{setuser(
        data?.map((item)=>{
            return item.email
    })
     )})
    },[])
    
    
    console.log(user1)
    
    return(
        <>
        
        <div className='userorder-container'>
          <div className='userorder-items-table'>
            <div className='userorder-items'>
                <h3>Your Orders</h3>
            {user? userorders?.map((item,index)=>{
                
                

                if(item.address.email=== user[0]){
                return(<div  key={index} className='userorder-items-div'>
                {item.item.map((item,index)=>{
                    return(
                <div key={index} className='userorder-item'>
                    <div className='user-order-item-details'><div className='user-order-item-image'><img src={'http://127.0.0.1:5000/get_image/' + item.image} alt="" /></div></div>
                    <div className='user-order-item-details'><div>{item.name}</div></div>
                    <div className='user-order-item-details'><div>{item.Quantity}</div></div>
                    <div className='user-order-item-details'><div>{item.Quantity*item.price}</div></div>
                    <div className='user-order-item-details'>status:<div>{item.status}</div></div>
                </div>)})}</div>)}}):<div>no orders</div>}
            </div>
          </div>
        </div>
        </>
    )
}
export default Userorders                               