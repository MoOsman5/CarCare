import React from 'react';
import '../style/sectionHeader.css'

const SectionHeadar = (props) => {
  return (
    <div className={props.sectionHeader}>
      <h2 className='section-title'>{props.variable}</h2>
      <span className='line'></span>
    </div>
  );
}

export default SectionHeadar;
