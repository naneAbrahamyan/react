import React, { Component, useContext } from 'react';
import Paginat from '../../common/Pagination';
import Articles from './articles/articles';
import Button from '@mui/material/Button';


import './globalFeed.css'
import { ArticleContext } from '../../contexts/articleContext';
const GlobalFeed = () => {

    const {clickedTag, handleFeedClick} = useContext(ArticleContext);
    return (  
        <div className='global-feed'>
            <div>
            <Button variant="text" color="success" onClick={handleFeedClick}>Global Feed</Button>
            {clickedTag ? <Button variant="contained" color="success"> # {clickedTag} </Button> : ""}
            </div>

           <Articles />
           <Paginat />
        </div>
    );
}
 
export default GlobalFeed;