import React from 'react';
import '../style/servicesItem.css'

const ServicesItem = (props) => {
  return (
    <div className={props.servicesItem} >
      <div className='head-contaner'>
        <i className={props.icon} style={{color: 'gold'}}></i>
        <h2 className='services-item-title'>{props.title}</h2>
        <div className='clear'></div>
      </div>
      <p className='services-item-desc'>
        {props.description}
      </p>
    </div>
  );
}

export default ServicesItem;
