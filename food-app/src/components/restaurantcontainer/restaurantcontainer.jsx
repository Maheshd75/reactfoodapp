import './restaurantcontainer.css'

function Restaurantcontainer(){
    return(
        <>
        <div className='restaurant-container'>
            <div  className='restaurant-container-header-navbar'></div>
            <div className='restaurant-images'>
                <div className='restaurant-image-main'>
                    <img src="/restaurant images/19ad66815b709efb931b9ada58269abb.avif" alt="" />
                </div>
                <div className="restaurant-image">
                    <div className='restaurant-img'>
                         <img src="/restaurant images/bf83195f5cdedfeea58c442ca9123e24.avif" alt="" />
                    </div><div  className='restaurant-img'>
                        <img src="/restaurant images/71ce4ce1c82833e5f8aece022491e56a.avif" alt="" />
                    </div>
                    </div>
                <div className="restaurant-image">
                    <img src="/restaurant images/625c2ad19f218254b52f7aacd625e1f7.avif" alt="" />
                    
                </div>
            </div>
            <div className='restaurant-details'>
                <div><h1>Moyaaah!</h1></div>
                <div><span>Cafe, Burger, Fast Food, Sandwich, American, Desserts, Beverages</span></div>
                <div><span>Open now - 12noon - 11:30pm (Today)</span></div>
            </div>
        </div>
        </>
    )
}
export default Restaurantcontainer