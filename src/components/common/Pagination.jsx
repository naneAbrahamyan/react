import React, { Component, useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import { ArticleContext } from '../contexts/articleContext';


const Paginat= () => {
    const {articleCount, limit, handlePaginationClick }= useContext(ArticleContext)

    const numberOfPagination = Math.ceil(articleCount/limit);
    return ( 
        <Pagination count={numberOfPagination} variant="outlined" shape="rounded" color= "success" style={{color:"green", margin: "20px"}} onChange= {handlePaginationClick}/>

     );
}
 
export default Paginat;