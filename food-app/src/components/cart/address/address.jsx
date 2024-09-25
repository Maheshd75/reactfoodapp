import './address.css'

function Address ({address,setaddress}) {
    
        return (
            <div className='address-container'>
                <div className='address-information'>
                    <div className='address-header'><p>Deliver Information</p></div>
                    <div className='address-details'>
                        <div className='user-name user'>
                            <input type="text" value={address.firstname} onChange={(e)=>setaddress({...address,firstname:e.target.value})} placeholder='First name' />
                            <input type="text" value={address.lastname} onChange={(e)=>setaddress({...address,lastname:e.target.value})} placeholder='Last name' />
                        </div>
                        <div className='user-email'>
                            <input type="text" value={address.email} onChange={(e)=>setaddress({...address,email:e.target.value})} placeholder='Email address' />
                        </div>
                        <div className='user-street'>
                            <input type="text" value={address.street} onChange={(e)=>setaddress({...address,street:e.target.value})} placeholder='Street' />
                        </div>
                        <div className='user-locality user' >
                            <input type="text" value={address.city} onChange={(e)=>setaddress({...address,city:e.target.value})} placeholder='City' />
                            <input type="text" value={address.state} onChange={(e)=>setaddress({...address,state:e.target.value})} placeholder='State' />
                        </div>
                        <div className='user-country user'>
                            <input type="text" value={address.pincode} onChange={(e)=>setaddress({...address,pincode:e.target.value})} placeholder='Pin code' />
                            <input type="text" value={address.country} onChange={(e)=>setaddress({...address,country:e.target.value})} placeholder='Country' />
                        </div>
                        <div className='user-phone'>
                            <input type="text" value={address.phonenumber
                                
                            } onChange={(e)=>setaddress({...address,phonenumber:e.target.value})} placeholder='Phone'/>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    
}

export default Address;
   
