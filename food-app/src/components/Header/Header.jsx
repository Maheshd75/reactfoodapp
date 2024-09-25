import { useContext,  useEffect,  useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/context'
import { IoCartOutline } from "react-icons/io5";
import Sidebar from '../sidebar/sidebar';




function Header(){
   const{ setitemdata} =useContext(MyContext)
   const [username, setUsername] = useState([]);
  
   const[sidebarstate,setsidebarstate]=useState(false)
     useEffect(()=>{
      
        fetch('http://127.0.0.1:5000/get_session'
                 // headers: { 'Content-Type': 'multipart/formdata' },
        
        
          /* other product data */
        
      )
      .then(res => res.json())
      .then(data=>setUsername(data))
     },[])
   
   
   
    return (
        <>

        {sidebarstate?<Sidebar sidebarstate={sidebarstate} setsidebarstate={setsidebarstate}/>:""}
        
          <div className='navbar'>
              <div></div>
              <div className='navbar-items'>
              <Link className="no-underline" to="Home"  ><p>Home</p></Link>
                <Link className="no-underline" to="/menu"><p>menu</p></Link>
              <Link className="no-underline" to="/restaurant" > <p>Restaurant</p></Link>
              </div>
              <div className='navbar-item'><input type="text" placeholder='search'></input></div>
              <div><Link className="no-underline" to="/cart"><IoCartOutline className='cart-outline'/></Link></div>
             
              {username.length===0?<div><p onClick={()=>setitemdata(true)}>Login</p></div>:""}
                <div className='user-name'> <div className='profile-image'><img onClick={()=>setsidebarstate(true)} src="default_profile_image.png" alt="" /></div>
               {username?.map((item,index)=>{
                  return(
                    <div key={index}><p>{item.username}</p></div>
                  )
                })}</div>
               <div className='header-admin'> <Link className="no-underline" to="/Admin"><p>Admin</p></Link></div>
                
                
            
          </div>
          
        
        
        </>

    )
}
export default Header