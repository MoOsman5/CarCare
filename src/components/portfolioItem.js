import React from 'react';
import '../style/portfolioItem.css'

const PortfolioItem = (props) => {
  return (
    <div className={props.portfolioItem}>
      <img src={props.image} alt='' />
      <div className='layer-content'>
        <div className='layer-info'>
          <span className='category'>category</span>
          <h3 className='layer-content-title'>Lorem,ipsum dolor.</h3>
          <a href='#'><i className='fa fa-edit fa-lg'></i></a>
          <a href='#'><i className='fa fa-search fa-lg'></i></a>
        </div>
      </div>

    </div>
  );
}

export default PortfolioItem;
