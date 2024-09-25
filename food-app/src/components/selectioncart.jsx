import { useState } from 'react'
import './selectioncart.css'
import Itemsselectioncart from './itemsselectioncart/itemsseclectioncart'




function Selectioncart (){
    const[selected,setselected]=useState(false)
    const data = [
        {
            image:"./37df381734b24f138af4a84fd7e4d4ec1716558578.avif",
            title:"Biryani"
        },
        {
            image:"/d0bd7c9405ac87f6aa65e31fe55800941632716575.avif",
            title:"Pizza"
        },
        {
            image:"/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.avif",
            title:"Chicken"
        },
        {
            image:"/ccb7dc2ba2b054419f805da7f05704471634886169.avif",
            title:"Burger"
        },
        {
            image:"/8dc39742916ddc369ebeb91928391b931632716660.avif",
            title:"Dosa"
        },
    ]
      const[selecteditem,setselecteditem]=useState("")
          
         console.log(selecteditem)

        
return (
  <>
    <div className='selection-cart-container'>
        <div className='selection-cart-header'>
            <p className='selection-cart-title'>Inspiration for your first order</p>
        </div>
        <div className='selection-cart-items'>
            {data.map((item,index)=> {
                return (
            <div className='selection-cart-item' key={index}>
                <div onClick={()=>setselected(index)} className={selected===index?'selection-cart-item-img-active':'selection-cart-item-img' }>
                <img onClick={()=>setselecteditem(item.title)} src={item.image} alt="" />
                </div>
                <div  className='selection-cart-item-title'> 
                    <p> {item.title}</p>

                </div>
            </div> )})}
        </div>

    </div>
       <div className='filter'>
        <div></div>
       </div>
      <Itemsselectioncart selecteditem={selecteditem}/>
      </>
    

  
)
}
export default Selectioncart