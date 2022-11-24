import React,  { useState, useEffect, useContext }  from 'react';
import axios from 'axios';
import Article from './article/article';
import { ArticleContext } from '../../../contexts/articleContext';
import './articles.css'
import { UserContext } from '../../../contexts/userContext';


const Articles = (props) => {
    let {articles, filteredData, clickedTag, getData} = useContext(ArticleContext)
    let data = clickedTag ? filteredData : articles;
    const {art} = props

    // if(art){
    //     data = art;
    // }
    useEffect(()=>{
    }, [data] )
    return (  
       <div>
        {data.map((val, index) => (
           
            <div key={index}>
                <Article article = {val} />
            </div>
        )) }
       </div>
    );
}
 
export default Articles;