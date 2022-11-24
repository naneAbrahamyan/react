import React, { useContext } from 'react';
import PopularTags from './popularTags/popularTags';
import GlobalFeed from './globalFeed/globalFeed';
import './mainPart.css'
import { AuthContext } from '../contexts/authContext';
const MainPart = () => {
    const { token } = useContext(AuthContext)
    return (   
        <div className='main-part'>
           <GlobalFeed />
           <PopularTags /> 
        </div>
    );
}
 
export default MainPart;