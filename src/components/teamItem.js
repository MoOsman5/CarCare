import React from 'react';
import '../style/all.min.css'
import '../style/teamItem.css'
import koti from '../images/koti.png';


const TeamItem = (props) => {
  return (
    <div className={props.teamItem}>
      <div className='team-img'>
        <img src={koti} alt="" />
    
        <div className='team-overlay'>
          <a><i className="fa-brands fa-facebook"></i></a>
          <a><i className="fa-brands fa-whatsapp"></i></a>
          <a><i className="fa-duotone fa-at"></i></a>
        </div>
      </div>
      
      <div className='team-info'>
        <h3 className='team-info-title'>Mohamed Adel</h3>
        <span className='team-info-text'>engineer</span>
      </div>
      
    </div>
  );
}

export default TeamItem;
