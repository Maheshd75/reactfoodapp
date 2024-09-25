import './brandselectioncart.css'
function Brandselectioncart(){
    const data =""
    return(
        <>
        <div className='selection-cart-container'>
        <div className='selection-cart-header'>
            <p className='selection-cart-title'>Inspiration for your first order</p>
        </div>
        <div className='selection-cart-items'>
            {data.map((item,index)=> {
                return (
            <div className='selection-cart-item' key={index}>
                <div className='selection-cart-item-img'>
                <img src={item.image} alt="" />
                </div>
                <div  className='selection-cart-item-title'> 
                    <p> {item.title}</p>

                </div>
            </div> )})}
        </div>

    </div>
        </>
    )
}
export default Brandselectioncart