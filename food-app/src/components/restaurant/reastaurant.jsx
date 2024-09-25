
import Restaurantcontainer from '../restaurantcontainer/restaurantcontainer'
import Restaurantnavbar from '../restaurantnavbar/restaurantnavbar'
import './restaurant.css'

function Restaurant(){
    return(
        <>
         
         <div className='container'>
         <Restaurantcontainer/>
         <Restaurantnavbar/>
         </div>
        </>
    )
}
export default Restaurant