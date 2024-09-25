import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Cartitems from './components/cart/cart.jsx';
import MyApp from './components/context/context.jsx';
import Restaurant from './components/restaurant/reastaurant.jsx';
import Admin from './components/Admin/admin.jsx';
import Home from './components/Home/Home.jsx';
import Userorders from './components/userorders/userorders.jsx';
import Headerfooter from './components/headerfooter/headerfooter.jsx';






const router = createBrowserRouter([
  {
    path: "/", element : <MyApp><Headerfooter/></MyApp>,
    children:[
  
  {
    path: "Home", element : <MyApp><Home/></MyApp>
  },
  {
    path: "menu", element : <MyApp><App/></MyApp>
  },
  {
    path: "restaurant", element : <MyApp><Restaurant/></MyApp>
  },
  {
    path: "cart", element : <MyApp><Cartitems/></MyApp>
  },
  {
    path: "Admin", element : <MyApp><Admin/></MyApp>
  },
  {
    path: "yourorders", element : <MyApp><Userorders/></MyApp>
  },]}
 
  

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>
)
