import React from 'react';
import TeamItem from './teamItem';
import SectionHeadar from './sectionHeadar';

const Team = () => {
  return (
    <div className='team pd-y'>
      <div className='container'>
      <SectionHeadar sectionHeader={'section-header'} variable={"our team"} />
      <div className='team-content'>
        <TeamItem teamItem={'team-item'}/>
        <TeamItem teamItem={'team-item-mg'}/>
        <TeamItem teamItem={'team-item'}/>
        <div className='clear'></div>
      </div>

      </div>
      
    </div>
  );
}

export default Team;
