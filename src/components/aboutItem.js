import React from 'react';
import '../style/all.min.css'
import '../style/aboutItem.css'

const AboutItem = (props) => {
  return (
      <div className={props.aboutItem} >
        <i className={props.icon} style={{color: 'gold'}}></i>
        <h2 className='about-item-title'>{props.title}</h2>
        <p className='about-item-desc'>
          {props.description}
        </p>
        <a href="#" className='about-item-link'>read more</a>
      </div>
  );
}

export default AboutItem;
