import React from 'react';
import CarCareLogo from '../images/CarCareLogo.png';
import '../style/all.min.css'
import '../style/footer.css'




const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img className='footer-logoImg' src={CarCareLogo} alt='logo' />  
      </div> 
      <ul className='footer-links'>
        <li><a href='#' className='hover-opacity'><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href='#' className='hover-opacity'><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href='#'className='hover-opacity'><i class="fa-solid fa-phone"></i></a></li>
        <li><a href='#' className='hover-opacity'><i class="fa-brands fa-linkedin"></i></a></li>
        <li><a href='#' className='hover-opacity'><i class="fa-brands fa-google-plus"></i></a></li>
        <li><a href='#' className='hover-opacity'><i class="fa-brands fa-instagram"></i></a></li>
      </ul>
      <p className='copyright'>copyright &copy; 2023 . all right reserved by colorlib</p>

      
    </div>
  );
}

export default Footer;
