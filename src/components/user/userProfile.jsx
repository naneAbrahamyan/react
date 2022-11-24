import { Button } from '@mui/material';
import React, { Component, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';
import { Link } from 'react-router-dom';

import './userProfile.css'
import { useState } from 'react';
import Articles from '../mainPart/globalFeed/articles/articles';
const UserProfile = () => {
    const [clicked, setClicked] = useState(true)
    const {user, userArticles, getFavorited, favoriteArticles} = useContext(UserContext);

    function handleClick(){
        setClicked(!clicked)
    }
    return (
        <React.Fragment>
  <div className='user'>
        <div className= "user-profile">
            <div>
                <div className = "user-profiler-img">
                     <img src = {user.image} alt="no image"/>
                </div>
                <div className="user-profile-text">
                    <h6>  
                    {user.username}
                    </h6>
                    
                    <p>
                    {user.bio}
                    </p> 
                </div>
                
            </div>
            
        </div> 
        <div class="user-profile-button">
            <Link to="/settings">
                Edit Profile Settings
            </Link>
        </div>
        </div>

        <div>
            <button className={`button ${clicked ? 'button1' : ""}`} onClick={handleClick} >  My Articles </button>
            <button className={`button ${!clicked ? 'button1' : ""}`} onClick={handleClick}>  Favorited Articles </button>
        </div>
           <Articles  art = {userArticles}/> 
        </React.Fragment>
      
         );
}
 
export default UserProfile;