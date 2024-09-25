import { useState } from 'react'

import './admin.css'
import Addadmin from './add/add'
import Itemsadmin from './Items/items'
import Ordersadmin from './Orders/orders'

function Admin(){
    const[selected,setselected]=useState("")
    return(
        <>

        

        <div className='admin-container'>
            
                <div className='admin-sidebar'>
                    <span onClick={()=>setselected("ADD")}>ADD</span>
                    <span onClick={()=>setselected("ITEMS")}>Items</span>
                    <span onClick={()=>setselected("ORDERS")}>Orders</span>
                </div>
            {selected==="ADD"?<Addadmin/>:""}
            {selected==="ITEMS"?<Itemsadmin/>:""}
            {selected==="ORDERS"?<Ordersadmin/>:""}
            
               
            </div>
        
        </>
    )
}
export default Admin