import './popular dishes.css'
import { data } from '../../foodlist'
import { useContext } from 'react'
import { MyContext } from '../../context/context'
function Populardishes(){
    const{cartiem,addtoCart}=useContext(MyContext)
    return(
        <div className='home-popular-dishes'>
            <div className='popular-dishes-header'><p>Popular Dishes</p></div>
            <div className="items-selection-cart-items-container">
                {data?.map((item ,index)=>{
                    
                    
                    return (
                        
                <div className="items-selection-cart-item"key={index}>
                    
                    <div className="items-selection-cart-item-img">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="items-selection-cart-item-details">
                    <div className="items-selection-cart-item-title">{item.name}</div>
                    <div className="items-selection-cart-item-restaurant">{item.restaurant}</div>
                    
                    <div className="items-selection-cart-item-price-selection">
                    <div className="items-selection-cart-item-price">Rs {item.price}</div>
                    <div className="items-selection-cart-item-price"><button className='btn' onClick={()=>addtoCart(item)}>ADD</button>
                     </div>
                    </div>
                    </div> 
                    </div>) 
                })}
                

            </div>  

        </div>
    )
}
export default Populardishes