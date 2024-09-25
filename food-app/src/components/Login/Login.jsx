import { useContext, useState } from 'react'
import './Login.css'
import { MyContext } from '../context/context'

function Login(){
    const{ itemdata,setitemdata} =useContext(MyContext)
    
    const[ user,setUser] =useState({
        "name":"",
        "email":"",
        "password":""
    })

    const handleSubmitsignup = (event) => {
        console.log(user)

        event.preventDefault()
        const formData = new FormData();
        formData.append('name',user.name);
        formData.append('email',user.email);
        formData.append('password', user.password);
      
        console.log(formData)
    
        fetch('http://127.0.0.1:5000/signup', {
            method:'POST',
           // headers: { 'Content-Type': 'multipart/formdata' },
            body:formData
            
              /* other product data */
            
          })
          .then(res => res.text())
          .then(data=>{alert(data)
            setUser({
                "name":"",
                "email":"",
                "password":""})
          });
        }
        const handleSubmitlogin = (event) => {
            console.log(user)
    
            event.preventDefault()
           
            const formData = new FormData();
            formData.append('email',user.email);
            formData.append('password', user.password);
          
            console.log(formData)
        
            fetch('http://127.0.0.1:5000/login', {
                method:'POST',
               // headers: { 'Content-Type': 'multipart/formdata' },
                body:formData
                
                  /* other product data */
                
              })
              .then(res => res.text())
              .then(data=>{
                if (data==='logged in'){alert(data)
                setitemdata(false)
                setUser({
                    "name":"",
                    "email":"",
                    "password":""})
                }else if(data==='Invalid ceredentials'){
                    alert(data)
                    setUser({
                        "name":"",
                        "email":"",
                        "password":""})
                }
              });
            } 
            


             




   
    return(
        <>
           {itemdata===true?
          <div className='login-container'>
            <div className='login-container-table'>
                <form className='login-form' onSubmit={handleSubmitlogin}   >
                    <p onClick={()=>setitemdata(false)} >x</p>
                <label >Name</label>
                <input type="text" placeholder='Enter your email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} name='email'required/>
                <label >Password</label>
                <input type="text" placeholder='Password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}name='password' required/>
                <button  className='btn' type='submit'>LOGIN</button>
                
                </form>
                <div className='signup'>
                    
                <p>new user?</p>
                <p onClick={()=>setitemdata("signup")}>SignUp</p>
                </div>
                
                 </div>

          </div>:""} 
          {itemdata==="signup"?<div className='login-container'>
            <div className='login-container-table'>
                <form className='login-form' onSubmit={handleSubmitsignup}  >
                    <p onClick={()=>setitemdata(false)} >x</p>
                <label >Name</label>
                <input type="text" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} placeholder='Enter your name' name='name' required/>
                <label >Email</label>
                <input type="email" value={user.email} placeholder='Enter your email' name='email' required onChange={(e)=>setUser({...user,email:e.target.value})} />
                <label >Password</label>
                <input type="password" value={user.password} placeholder='Password' name='password' required onChange={(e)=>setUser({...user,password:e.target.value})}/>
                <button  className='btn' type='submit'>SIGN UP</button>
                
                </form>
                <div className='signup'>
                <p>Already user?</p>
                <p onClick={()=>setitemdata(true)}>Login</p>
                </div>
                
                 </div></div>:""}
        
        </>

    )
}
export default Login