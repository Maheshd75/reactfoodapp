
import "./cartorderdetails.css"

function Cartorderdetails({cartitem,setcartitem,handleSubmit,cart,setcart}){
   
    let totalamount=0
    let Deliveryfee=100
    let Deliverytip=10
    let amount =0
       Total({cartitem})
    function Total({cartitem}){
        console.log(cartitem)
        cartitem?.map((item)=>{
            
            amount= item.price*item.Quantity
            totalamount = totalamount + amount
            console.log (totalamount)
            console.log(cartitem)
           
        }) ;
    }
    const status=()=>{
        setcart(false)
        setcartitem(cartitem?.map(item=>({
            ...item,"status":"processing"

        })))
    }
         let GrandTotal=totalamount + Deliveryfee + Deliverytip
    return(
        
        <div className="cart-order-total">
            <div>
                <h3>Total</h3>
                
            </div>
            <hr />
            <div className="cart-order-details"><span>Item Total</span><span>Rs {totalamount}</span></div>
            <div className="cart-order-details"><span>Delivery Fee | </span><span>Rs {Deliveryfee}</span></div>
            <div className="cart-order-details"><span>Delivery Tip</span><span>Rs {Deliverytip}</span></div>
            <hr />
            <div className="cart-order-details"><span>PAY</span><span>Rs {GrandTotal}</span></div>
          {cart? <button className="cart-order-details-btn" onClick={()=>status()}>Proceed To Checkout</button>:
          <button className="cart-order-details-btn" type="submit"  onClick={()=>handleSubmit()}>Proceed To Payment</button>}
        </div>
        
    )
}
export default Cartorderdetails