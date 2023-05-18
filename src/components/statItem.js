import React from 'react';
import '../style/statItem.css'

const StatItem = (props) => {
  return (
    <div className='stat-item'>
      <i class="fa-solid fa-users fa-2xl" style={{color:'gold'}}></i>
      <h3 className='stat-number'>{props.number}</h3>
      <span className='stat-text'>{props.text}</span>
      
    </div>
  );
}

export default StatItem;
