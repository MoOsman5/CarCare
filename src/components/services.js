import React from 'react';
import SectionHeadar from './sectionHeadar';
import ServicesItem from './servicesItem';


const Services = () => {
  return (
    <div className='services pd-y'>
      <div className='container'>  
        <SectionHeadar sectionHeader={'section-header'} variable={"what we offer"} />
        <div className='services-content'>
          <ServicesItem title={'hiiiiii'} servicesItem={'services-item'} icon={'fa fa-cogs fa-2xl'} description={'jnsafjadfnsja sdfjdfsjd jhfdjkhfdsjf fsdkjfhsdf nfjfnajf ndajf'}/>
          <ServicesItem title={'hiiiiii'} servicesItem={'services-item-mg'} icon={'fa-solid fa-car-rear fa-2xl'} description={'jnsafjadf dsjdsfdsfsdfjd kjdfkdsjfkjdfsd nsjanfjfnajfnd'}/>
          <ServicesItem title={'hiiiiii'} servicesItem={'services-item'} icon={'fa-solid fa-key fa-2xl'} description={'jnsafjadfnsdv ndsnjksdnvsdkjvn vjsdnvjk janfjfnajfndajfn'}/>
          <ServicesItem title={'hiiiiii'} servicesItem={'services-item'} icon={'fa fa-cogs fa-2xl'} description={'jnsafjadfnsja sdfjdfsjd jhfdjkhfdsjf fsdkjfhsdf nfjfnajf ndajf'}/>
          <ServicesItem title={'hiiiiii'} servicesItem={'services-item-mg'} icon={'fa-solid fa-car-rear fa-2xl'} description={'jnsafjadf dsjdsfdsfsdfjd kjdfkdsjfkjdfsd nsjanfjfnajfnd'}/>
          <ServicesItem title={'hiiiiii'} servicesItem={'services-item'} icon={'fa-solid fa-key fa-2xl'} description={'jnsafjadfnsdv ndsnjksdnvsdkjvn vjsdnvjk janfjfnajfndajfn'}/>
          <div className='clear'></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
