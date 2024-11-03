import React from 'react'
import {Outlet , Link} from 'react-router-dom'
 

const Root = () => {
  return (
     <div>
          <div class="head">
                 <h1>Inquiry Mart</h1>
    
          </div>
<header>


    <nav>
        <ul>
             
        <li><Link to='/react-productinquiryform/home'>Home</Link></li>
       <li><Link to='/react-productinquiryform/about'>About Us</Link></li>
  
        <li><Link to='/react-productinquiryform/product'>ProductInquiry Form</Link></li>
           
        </ul>
    </nav>
</header>
<main>
    <Outlet/>
</main>
<footer>@2024 My Website</footer>


    </div>
  )
}

export default Root