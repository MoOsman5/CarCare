import React from 'react';
import SectionHeadar from './sectionHeadar';
import '../style/choose.css'
import '../style/all.min.css'

const Choose = () => {
  return (
    <div className='choose pd-y'>
      <div className='container'>
        <div className='choose-item'>
          <SectionHeadar sectionHeader={'section-header-left'} variable={"why choose us"}/>
          <p className='item-desc'>
            dsfdafd dfjdsfkj ddfsdj fiff df jdsf d kfjsdfjdf dfjsdlkfjdskfj dkjfkldjf  dkjfldksjf fkjasfj dfjasdlkfj fjdsklf dfjdslkfjsdfjdifj dflkasjdfjsdjfdsjf dlfskadjf kdsjflkadjf dsdjflksjfldsjf jfdslkfj klfdjsld
          </p>
          <ul className='choose-list'>
            <li><i class="fa fa-circle-check" style={{color:'gold'}}></i> sdfdsffd dsfdsfewf jtjtjjy efreve evergr </li>
            <li><i class="fa fa-circle-check" style={{color:'gold'}}></i> sdfdsffd dsfdsfewf jtjtjjy efreve evergr </li>
            <li><i class="fa fa-circle-check" style={{color:'gold'}}></i> sdfdsffd dsfdsfewf jtjtjjy efreve evergr </li>
            <li><i class="fa fa-circle-check" style={{color:'gold'}}></i> sdfdsffd dsfdsfewf jtjtjjy efreve evergr </li>
          </ul>
        </div>
        <div className='choose-item'>
          <div className='choose-item-img'>
            <img src="https://w.wallhaven.cc/full/j5/wallhaven-j5krmq.jpg" alt="" />
          </div>
          <ul className='choose-bollets'>
            <li className='active'></li>
            <li></li>
            <li></li>
          </ul>

        </div>
        <div className='clear'></div>

      </div>
      
    </div>
  );
}

export default Choose;
