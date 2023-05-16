import React from 'react';
import '../style/Nav.css'
import CarCareLogo from '../images/CarCareLogo.png';

const Nav = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <img className='logoImg' src={CarCareLogo} alt='logo' />  
      </div>  
      <ul className='nav'>
        <li><a href='#' className='active'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>contact</a></li>
        <li className='control-dropdown'>
          <a href='#'>Controls</a>
          <ul className='control-dropdown-menu'>
            <li><a href='#'>Volkswagen</a></li>
            <li><a href='#'>Skoda</a></li>
            <li><a href='#'>Mercedes</a></li>
            <li><a href='#'>BMW</a></li>
          </ul>
        </li>
        <li className='key-dropdown'>
          <a href='#'>Keys</a>
          <ul className='key-dropdown-menu'>
            <li><a href='#'>Volkswagen</a></li>
            <li><a href='#'>Skoda</a></li>
            <li><a href='#'>Mercedes</a></li>
            <li><a href='#'>BMW</a></li>
          </ul>
        </li>
      </ul>  

      <div className='clear'></div>
    </div>
  );
}

export default Nav;
