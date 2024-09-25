import { useEffect, useState } from 'react'
import './items.css'
import { MdDelete } from "react-icons/md";
function Itemsadmin(){
    const[items,setitems]=useState()
    //const[deleteitem,setdeleteitem]=useState()
    useEffect(()=>{
        // Could be GET or POST/PUT/PATCH/DELETE
            fetch('http://127.0.0.1:5000/get_data')
           .then(res => res.json())
            .then((data)=>
           setitems(data))
           /* { status: 'ok', method: 'GET' } */
        },[])

        
        const Deletedata = (item) => {
            
            const data =JSON.stringify(item)
            fetch('http://127.0.0.1:5000/remove_data', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                    body:data
                    
                      /* other product data */
                    
                  })
                  .then(res => res.text())
          .then(data=>alert(data));


        }



    return(
        <div className='items-container'>
            <div className='items-table-container'>
                <div className='table-header'>
                  <div> image</div> 
                  <div> name</div> 
                  <div>  Quantity</div>
                   <div> price</div>
                   <div></div>
                </div>
                
                
                {items?.map((item,index)=>{
                   return( <div key={index} className='item' >
                    <div className='item-image '><img src={'http://127.0.0.1:5000/get_image/'+item.image} alt="" /></div>
                      <div className='item-details'><div>{item.name}</div></div> 
                       <div className='item-details'><div> {item.Quantity}</div></div>
                        <div className='item-details'><div>{item.price}</div></div>
                        <div className='item-details'onClick={()=>Deletedata(item)}><MdDelete className='mdDelete' /></div>
                    </div>
                   )
                })}
                
            </div>
        </div>
    )
}
export default Itemsadmin