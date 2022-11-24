import React, { useContext, useState, useEffect} from 'react';
import Chip from '@mui/material/Chip';
import './article.css';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import Button from '@mui/material/Button';
import { UserContext } from '../../../../contexts/userContext';
import { AuthContext } from '../../../../contexts/authContext';
import { ArticleContext } from '../../../../contexts/articleContext';

const Article = (props) => {
   const value = props.article;
   const [a, setValue] = useState("");
   let date1 = new Date(value.createdAt)+" ";
   date1= date1.slice(0,16);
   const [clicked, setClicked] = useState(value.favorited);
   console.log(clicked);
   const {favoriteArticle, unFavoriteArticle, getFavorited} = useContext(UserContext)
   const {token} = useContext(AuthContext);
   const handleClick = (val) =>{
        if(token){
            setClicked(!clicked);

            if(clicked){
                setValue(a-1);
                unFavoriteArticle(val)
            }else{
                setValue(a+1);
               favoriteArticle(val);
            }
            getFavorited();
       }
   }
   useEffect( () => {
    setValue(value.favoritesCount)
    setClicked(value.favorited);
  }, [props.article]);
    return (
        <div className="article">
            <div className="article-first-part">
                <div className="avatar">
                    <div className="image"> 
                    <img src="https://api.realworld.io/images/demo-avatar.png"  alt = "no img"/>
                    </div>
                    <div className = "text">
                        <h4> {value.author.username} </h4>
                        <p style = {{color:'grey'}}> {date1} </p>
                    </div>
                </div>
                <div className = "favorites">
                      <Button variant = {`${!clicked ? "outlined" : "contained" }`} color = "success" onClick = {() => handleClick(value.slug)}> 
                        <FavoriteBorderSharpIcon style = {{color: `${!clicked ? "green" : "white"}`}}/>
                        {a}
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