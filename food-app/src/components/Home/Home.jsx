


import Selectioncart from '../selectioncart'
import Populardishes from './Home popular dishes/popular dishes'

import './Home.css'

function Home(){
    return (
        <>
          <div>
            <div className='home-img'>
                <div><h1>Welcome</h1><h3>Wide Range of Food</h3></div>
            </div>
            <div className='home-catogery'>
                <div className='home-catogery-header'>Categories</div>
                <Selectioncart/>

                <div className='home-product'>
                    <div className='home-product-item'><img src="/cd6ce0f63cbf06f343de64700ee68ffe_o2_featured_v2.avif" alt="" /></div>
                    <div className='home-product-item'><img src="/5092c6b0d8980fc9a41576e6d46db585_o2_featured_v2.webp" alt="" /></div>
                </div>
                <div className='home-description'></div>
                <Populardishes/>
            </div>
          </div>
          
        </>
    )
}
export default Home