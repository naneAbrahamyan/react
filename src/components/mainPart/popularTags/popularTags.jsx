import React,  { useState, useEffect, useContext }  from 'react';
import axios from 'axios';
import './popularTags.css'
import Chip from '@mui/material/Chip';
import { ArticleContext } from '../../contexts/articleContext';


const PopularTags = () => {
    const [tags, setTags] = useState([]);
  
    async function  fetchTagsFromServer(){
        const tag = await (await axios.get('https://api.realworld.io/api/tags')).data.tags;
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