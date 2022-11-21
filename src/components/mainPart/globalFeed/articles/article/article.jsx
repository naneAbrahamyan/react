import React, { Component } from 'react';
import Chip from '@mui/material/Chip';
import './article.css';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import Button from '@mui/material/Button';



const Article = (props) => {
    const value = props.article;
   let date1 = new Date(value.createdAt)+" ";
   date1= date1.slice(0,16);

    return (
        <div class="article">
            <div class="article-first-part">
                <div class="avatar">
                    <div class="image"> 
                    <img src="https://api.realworld.io/images/demo-avatar.png"  alt = "no img"/>
                    </div>
                    <div class = "text">
                        <h4> {value.author.username} </h4>
                        <p style = {{color:'grey'}}> {date1} </p>
                    </div>
                </div>
                <div class = "favorites">
                      <Button variant = "outlined" color = "success" > 
                        <FavoriteBorderSharpIcon style = {{color: "green"}}/>
                        {value.favoritesCount}
                     </Button>
                </div>
            </div>

            <div className="article-second-part">
                <h4> {value.title.slice(0,400)} </h4>
                <p> {value.description.slice(0,200)} </p>
            </div>

            <div className = "article-third-part">
                <div>
                    <p> Read More ... </p> 
                </div>
                <div>
                    {value.tagList.map((tag, index )=> (
                         <Chip key = {index} label={tag} />
                    ))}
                </div>
            </div>
        </div>
      );
}
 
export default Article;