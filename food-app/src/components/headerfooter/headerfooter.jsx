import { Outlet } from "react-router-dom"
import Footer from "../Footer/footer"
import Header from "../Header/Header"
import Login from "../Login/Login"

function Headerfooter(){
    return(
        <>
        
        <Login/>
        <Header/>
        
        <Outlet/>
        <Footer/>
        </>

    )
}
export default Headerfooter