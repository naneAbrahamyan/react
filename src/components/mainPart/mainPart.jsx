import React, { Component } from 'react';
import PopularTags from './popularTags/popularTags';
import GlobalFeed from './globalFeed/globalFeed';
import './mainPart.css'
const MainPart = () => {
    return (  
        <div className='main-part'>
           <GlobalFeed />
           <PopularTags /> 
        </div>
    );
}
 
export default MainPart;