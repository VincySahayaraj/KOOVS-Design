import React from 'react';
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import TopBrandsHome from '../Components/TopBrandsHome/TopBrandsHome';
import StoriesHome from '../Components/StoriesHome/StoriesHome';
import Collaboration from '../Components/Collaboration/Collaboration';
import WomenSection from '../Components/Products/WomenSection';

import MenSection from '../Components/Products/MenSection';
import SliderBrands from '../Components/SliderBrands/SliderBrands';
class Home extends React.Component {
    render()
    {
    return (
      <div className="home">
        
        <HomeBanner/>
        <SliderBrands/>
        <WomenSection/>
        <MenSection/>  
        <TopBrandsHome/>
        <StoriesHome/>
        <Collaboration/>

      </div>
    );
   }
  }
  
  export default Home;