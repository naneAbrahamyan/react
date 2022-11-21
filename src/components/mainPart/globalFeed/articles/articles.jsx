import React,  { useState, useEffect, useContext }  from 'react';
import axios from 'axios';
import Article from './article/article';
import { ArticleContext } from '../../../contexts/articleContext';
import './articles.css'


const Articles = () => {
   
    let {articles, filteredData, clickedTag} = useContext(ArticleContext)
    const data = clickedTag ? filteredData : articles;
    return (  
       <div>
        {data.map(val => (
            <div>
                <Article article = {val} />
            </div>
        )) }
       </div>
    );
}
 
export default Articles;