import React,  { useState, useEffect, useContext }  from 'react';
import axios from 'axios';
import './popularTags.css'
import Chip from '@mui/material/Chip';
import { ArticleContext } from '../../contexts/articleContext';
import { path_URL } from '../../../variables';


const PopularTags = () => {
    const [tags, setTags] = useState([]);
  
    async function  fetchTagsFromServer(){
        const tag = await (await axios.get(`${path_URL}/tags`)).data.tags;
        setTags(tag);
    }

  const {handleFavoriteClick} = useContext(ArticleContext);


    useEffect(() => {
        fetchTagsFromServer();
      }, []);
    

    return ( 
        <div className="popular-tags">
          <p> Popular Tags </p>
          <br />
          {tags.map((tag, index) => (
                <Chip label={tag} key={index} style = {{margin: '2px'}} onClick={() => handleFavoriteClick(tag)}/>
  
          ))}
        </div>
     );
}
 
export default PopularTags;