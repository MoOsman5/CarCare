import React from 'react';
import StatItem from './statItem';
import '../style/stat.css'

const Stat = () => {
  return (
    <div className='stat'>
      <div className='overlay'>
        <div className='container'>
          <div className='stat-items'>
            <StatItem text={'happy'} number={'450'} />
            <StatItem text={'happy'} number={'450'} />
            <StatItem text={'happy'} number={'450'} />
            <StatItem text={'happy'} number={'450'} />


          </div>
        </div>

      </div>
      
    </div>
  );
}

export default Stat;
