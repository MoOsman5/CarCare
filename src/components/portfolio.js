import React from 'react';
import SectionHeadar from './sectionHeadar';
import PortfolioItem from './portfolioItem';

const Portfolio = () => {
  return (
    <div className='container'>
      <div className='portfolio pd-y'>
        <SectionHeadar sectionHeader={'section-header'} variable={"featured works"} />
        <div className='portfolio-content'>
          <PortfolioItem portfolioItem={'portfolio-item'} image={'https://1.bp.blogspot.com/-7yuQKAETQ5E/XmqSPwnOF0I/AAAAAAAAaA8/Yn2Ww8bNy1g3s92yhp6PFfK2cDbXqmrjwCLcBGAsYHQ/s1600/%25D8%25AE%25D9%2584%25D9%2581%25D9%258A%25D8%25A7%25D8%25AA_%25D8%25B3%25D9%258A%25D8%25A7%25D8%25B1%25D8%25A7%25D8%25AA_%25D8%25B1%25D9%258A%25D8%25A7%25D8%25B6%25D9%258A%25D8%25A9.jpg'}/>
          <PortfolioItem portfolioItem={'portfolio-item-mg'} image={'https://i.pinimg.com/originals/ee/b3/f3/eeb3f33fb61c8d6482502049a44cfd14.jpg'}/>
          <PortfolioItem portfolioItem={'portfolio-item'} image={'https://th.bing.com/th/id/OIP.AqlWavc86D3LiRJQcFfBeQHaHa?pid=ImgDet&w=736&h=736&rs=1'}/>
          <PortfolioItem portfolioItem={'portfolio-item'} image={'https://th.bing.com/th/id/OIP.02LSpJTOYGDAEI_k6LHsnwHaHa?pid=ImgDet&rs=1'}/>
          <PortfolioItem portfolioItem={'portfolio-item-mg'} image={'https://i.pinimg.com/originals/58/57/5d/58575d39d7ee32f90d834a0e6066af8c.jpg'}/>
          <PortfolioItem portfolioItem={'portfolio-item'} image={'https://i.pinimg.com/originals/a4/9e/96/a49e96f5c94838494417516fa9f51494.jpg'}/>
          <div className='clear'></div>
        </div>
      </div>

    </div>
  );
}

export default Portfolio;
