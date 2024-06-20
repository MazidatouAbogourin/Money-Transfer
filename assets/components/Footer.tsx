import React from 'react'
import '../styles/footer.css'
import { FaInstagram, FaTwitter,  FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='footer-el '>
        <div>
          <h4> Company </h4>
          <ul>
            <li ><a href='/'> About Us</a></li>
            <li><a href='/'> Our Services  </a></li>
            <li><a href='/'>Privacy Policy</a></li>
        
          </ul>
        </div>
        <div>
          <h4> Get Help </h4>
          <ul>
            <li><a href='/'>FAQ</a></li>
            <li><a > Transfer </a></li>
            <li><a>Pending</a></li>
           

          </ul>
        </div>
        
        <div>
          <h4> Follow Us </h4>
          <div className='sociallinks'>
          <a href='/'><FaInstagram  size={30} /></a>
          <a href='/'> <FaTwitter size={25} className='twitter'/> </a>
          <a href='/'><FaFacebookF  size={25}/></a>

          </div>
        </div> 
      </div>
      <div className='footer-last'>  &copy; 2024 by Mazidatou Abogourin. All rights reserved </div>
    </footer>
  )
}

export default Footer
