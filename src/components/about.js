import React from 'react';
import SectionHeadar from './sectionHeadar';
import AboutItem from './aboutItem';

const About = () => {
  return (
    <div className='about pd-y'>
      <div className='container'>  
        <SectionHeadar sectionHeader={'section-header'} variable={"welcome to website"} />
        <div className='about-content'>
          <AboutItem title={'hiiiiii'} aboutItem={'about-item'} icon={'fa fa-cogs fa-2xl'} description={'jnsafjadfnsja sdfjdfsjd jhfdjkhfdsjf fsdkjfhsdf nfjfnajf ndajf'}/>
          <AboutItem title={'hiiiiii'} aboutItem={'about-item-mg'} icon={'fa-solid fa-car-rear fa-2xl'} description={'jnsafjadf dsjdsfdsfsdfjd kjdfkdsjfkjdfsd nsjanfjfnajfnd'}/>
          <AboutItem title={'hiiiiii'} aboutItem={'about-item'} icon={'fa-solid fa-key fa-2xl'} description={'jnsafjadfnsdv ndsnjksdnvsdkjvn vjsdnvjk janfjfnajfndajfn'}/>
          <div className='clear'></div>
        </div>
      </div>
    </div>
  );
}

export default About;
