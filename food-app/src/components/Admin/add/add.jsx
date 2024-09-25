import { useState } from 'react';
import './add.css'




function Addadmin(){
    
    const [file, setFile] = useState(
        {  "id":"",
          "file":"",
          "name":"",
          "restaurant":"",
          "text" :"",
          "catogery" :"Biryani", 
          "price":"",
          

        }
    )
   

    const handleFileChange = (e) => {
        setFile({...file,file:e.target.files[0]});
       // console.log(file)
      };
    

    const handleSubmit = (event) => {
        console.log(file)

        event.preventDefault()
        const formdata =new FormData()
        formdata.append('id',file.id)
        formdata.append('file',file.file)
        formdata.append('name',file.name)
        formdata.append('restaurant',file.restaurant)
        formdata.append('text',file.text)
        formdata.append('catogery',file.catogery)
        formdata.append('price',file.price)
        
        console.log(formdata)
       fetch('http://127.0.0.1:5000/add_data', {
            method: 'POST',
           // mode:"no-cors",
           //headers: { 'Content-Type': 'multipart/formdata' },
          
            body:formdata
            
              /* other product data */
            
          })
          .then(res => res.text())
           .then(data=>{ alert(data)
            setFile( {  "id":"",
                "file":"",
                "name":"",
                "restaurant":"",
                "text" :"",
                "catogery" :"Biryani",
                "price":"",
                
      
             })
     } )
           .catch(error => console.error('Error fetching data:', error));
            
            
        
          
        }


    return(
        
        <div className='admin'>
        <form className='admin-form' onSubmit={handleSubmit} >
            <label htmlFor="">id</label>
            <input type="number" id='id' name='id' value={file.id} onChange={(e)=>setFile({...file,id:e.target.value})} placeholder='id' required />
            <label htmlFor="file">Image</label>
            <input type="file" id='file' name='file'  onChange={handleFileChange} required />
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' value={file.name} onChange={(e)=>setFile({...file,name:e.target.value})} placeholder='Enter Food Name'/>
            <label htmlFor="restaurant">Restaurant</label>
            <input type="text" id='restaurant'  value={file.restaurant} onChange={(e)=>setFile({...file,restaurant:e.target.value})} name='restaurant' placeholder='restaurant name'/>
            <label htmlFor="text">Text</label>
            <textarea name="text" id="text"  value={file.text} onChange={(e)=>setFile({...file,text:e.target.value})}  placeholder='Text'></textarea>
            <label htmlFor="catogery" >Catogery</label>
               <select id="catogery" name="catogery"  value={file.catogery} onChange={(e)=>setFile({...file,catogery:e.target.value})}>
                   <option value="Biryani">Biryani</option>
                   <option value="Pizza">Pizza</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Burger">Burger</option>
                    <option value="Dosa">Dosa</option>
                 </select>
            <label htmlFor="price">Price</label>
            <input type="text" name="price"placeholder='price'  value={file.price} onChange={(e)=>setFile({...file,price:e.target.value})} required/>
            <input type="submit" />     

        </form>
        
        </div>
        
    )

}
export default Addadmin