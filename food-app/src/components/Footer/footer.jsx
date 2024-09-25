import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer(){
    return(
        <>
        <div className='footer-container'>
            <div className='footer-items-details'>
                <div className='footer-company-name'><h1>zomato</h1></div>
                <div className='footer-items'>
                    <div className='footer-item'>
                    <div className='footer-item-header'>Categories</div>
                    <div className='footer-item-links'>
                        <p>Biryani</p>
                        <p>Pizza</p>
                        <p>Chicken</p>
                        <p>Burger</p>
                        <p>Dosa</p>
                        </div>
                    </div>
                    <div className='footer-item'>
                    <div className='footer-item-header'>Get to know us</div>
                    <div className='footer-item-links'>
                        <p>Company</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Help Center</p>
                        </div>
                    </div>
                    <div className='footer'></div>
                    <div className='footer-item'>
                        <div>SOCIAL LINKS</div>
                        <div className='footer-links'>
                             <div><FaFacebook className='social-icons' /></div>
                             <div><FaSquareInstagram  className='social-icons'/></div>
                             <div><AiFillTwitterCircle   className='social-icons'/></div>
                        </div>
                    </div>
                    
                    </div>
                    <hr />
                    <div className='footer-copyright-descripton'> 
                        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p></div>
                     </div>
            
        </div>
        </>

    )
}
export default Footer