import { useState,createContext } from "react";


 export const MyContext =createContext(null)
function MyApp(props){
     
    const[account,setAccount]=useState()
    const [cartitem,setcartitem]= useState(null)
    const[itemdata,setitemdata] =useState(false)
   
    

    function addtoCart(itemid){
        console.log(itemid)
        console.log(itemid.id)
           if(cartitem===null){
              setcartitem([itemid])
           }else {
        
            const item= cartitem.some(cartitem => cartitem.id === itemid.id)
            console.log(item)
            if (!item) {
              setcartitem([...cartitem, itemid]);
              
            }
        
        }
        
          
          console.log("called")
        }
     const remove=(itemid)=>{
        setcartitem(cartitem.filter(item=> item.id!=itemid.id))
     }

        function Increase(itemid){
            setcartitem(cartitem.map((item)=>{
                if(item.id===itemid.id&&item.Quantity>0){
                    return {...item,Quantity:item.Quantity + 1}
               }else{
                return item}
           }))
        }
        function Decrease(itemid){
            setcartitem(cartitem.map((item)=>{
                if(item.id===itemid.id&&item.Quantity>1){
                    return {...item,Quantity:item.Quantity - 1}
                }else{
                    return item}
                })
        )

        }
       
           
        
    
    const contextValue = {
        cartitem,
        itemdata,
        setitemdata,
        setcartitem,
        addtoCart,
        Decrease,
        Increase,
        account,
        setAccount,
        remove,
        
        
        
    
    }

   return (

    <MyContext.Provider  value={contextValue}>
        {props.children}
     </MyContext.Provider>
   )

}
export default MyApp