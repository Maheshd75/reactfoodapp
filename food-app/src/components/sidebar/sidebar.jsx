import { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar({setsidebarstate}){
    const[active,setactive]=useState()
    const logout=()=>{
        setactive('logout')
        
        fetch('http://127.0.0.1:5000/logout')
        .then(res=>res.text())
        .then(data=>alert(data))


    }
    return(
        <div className='sidebar-container'>
        <div className='sidebar'>
            <div><p onClick={()=>setsidebarstate(false)}>x</p></div>
            <hr />
            <ul className='siderbar-items'>
              <Link to='/Home' className="no-underline"><li onClick={()=>setactive('Home')} className={active=="Home"?'sidebar-item':''} >Home</li></Link>
              <Link to='/menu' className="no-underline"><li onClick={()=>setactive('menu')} className={active=="menu"?'sidebar-item':''} >menu</li></Link>
              <Link to='/restaurant' className="no-underline"><li onClick={()=>setactive('restaurant')} className={active=="restaurant"?'sidebar-item':''} >Restaurant</li></Link>
              <Link to='/cart' className="no-underline"><li onClick={()=>setactive('cart')} className={active=="cart"?'sidebar-item':''} >cart</li></Link>
              <Link to='/Admin' className="no-underline"><li onClick={()=>setactive('Admin')} className={active=="Admin"?'sidebar-item':''} >Admin</li></Link>
                <li onClick={()=>setactive('Account')} className={active=="Account"?'sidebar-item':''}>Account</li>
             <Link to='yourorders' className="no-underline"><li onClick={()=>setactive('yourorders')} className={active=="yourorders"?'sidebar-item':''}>Your orders</li>
             </Link>
             <li onClick={()=>logout()} className={active=="logout"?'sidebar-item':''}>Logout</li>
            </ul>

        </div>
        </div>
    )
}
export default Sidebar