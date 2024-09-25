import { useEffect,useState } from 'react'
import './orders.css'

function Ordersadmin(){
 const[orders,setorders]=useState()
 const[orderstatus,setorderstatus]=useState({
    "status":"",
    

 })

 useEffect(()=>{
    fetch('http://127.0.0.1:5000/get_orders')
    .then(res => res.json())
     .then((data)=>setorders(data))
 },[])
 const Updateorderstatus=(item,ite)=>{
    let status = ({
        "status":orderstatus.status,
        "itemid":item.$oid,
        "item":ite
    })
   
    
    console.log(item)
    console.log(status)
    const data =JSON.stringify(status)
    fetch('http://127.0.0.1:5000/update_orderstatus', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
            body:data
            
              /* other product data */
            
          })
          .then(res => res.text())
  .then(data=>console.log(data));

 }  



    return(
        <div className='orders-admin'>
           <div>
            {orders?.map((order,index)=>{
                return(
                    <div key={index} className='orders-container'>
                        
                        <div className='order-username'><p>{order.address.firstname}</p></div>
                        <div className='order-username-address'>Delivery to {order.address.street}/{order.address.city}/{order.address.state}/{order.address.pincode}/{order.address.country}/{order.address.phonenumber}</div>
                        <div className='order-table'>
                            <table>
                                <tr>
                                <th>image</th>
                                <th>name</th>
                                <th>quantity</th>
                                <th>price</th>
                                <th>status</th>
                                <th></th>
                                </tr>
                                
                                {order?.item?.map((ite,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td><img src={'http://127.0.0.1:5000/get_image/'+ite.image} alt="" /></td>
                                            <td>{ite.name}</td>
                                            <td>{ite.Quantity}</td>
                                            <td>{ite.price*ite.Quantity}</td>
                                            <td>  <select id="catogery" value={ite.status} onChange={(e)=>setorderstatus({...orderstatus,status:e.target.value})} name="catogery"  >
                                                  <option value="processing">procesing</option>
                                                  <option value="out for delivery">out for delivery</option>
                                                  <option value="delivered">delivered</option>
                                                  
                                                 </select>

                                                 </td>
                                                 <td> <button className='order-update' onClick={()=>Updateorderstatus(order._id,ite)}>update status</button></td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                )


            })}
           </div>
        </div>
    )
}
export default Ordersadmin