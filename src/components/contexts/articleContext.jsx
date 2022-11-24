import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import { path_URL } from '../../variables';

export const ArticleContext = createContext({
    favorite: " ",
    page:1,
    page2: 1,
    limit:9,
    tag: " ",
    clickedTag: "",
    articles: [],
    articleCount: " ",
    filteredData: [],
    setPage: ()=> "",
    serArticleCount: () => "",
    setArticles: () => [],
    setFavorite:() => "",
    setTag:() => "",
    setFilteredData: () => "",
    getData: () => "",
    handleFavoriteClick: () => "",
    handleFeedClick: () => "",

})

const ArticleContextProvider = (props) => {
    const limit = 9;
    const [favorite, setFavorite] = useState(" ");
    const [tag, setTag] = useState("");
    const [articles, setArticles] = useState([]);
    const [filteredData , setFilteredData] = useState([]);
    const [articleCount, setArticleCount] = useState("");
    const [clickedTag, setClickedTag] = useState("");
    const [page, setPage] = useState(1);
    const [page2, setPage2] = useState(1);

    const offset = (page-1) * limit
    const offset2 = (page2-1) * limit
    const getData = async() =>{
        const article = await (await (axios.get(`${path_URL}/articles?offset=${offset}&limit=${limit}`))).data;
        setArticleCount(article.articlesCount);
        setArticles(article.articles);
    }

    const handleFavoriteClick = async (value) => {
        const filtered = await (await (axios.get(`${path_URL}/articles?tag=${value}&offset=${offset2}&limit=${limit}`))).data;
        setClickedTag(value);
        setFilteredData(filtered.articles);
        setArticleCount(filtered.articlesCount);
   }

   const handleFeedClick = () => {
       setClickedTag("");
       setFilteredData([]);
       getData();
   }
    const handlePaginationClick = async(e, pagik) => {
        window.scrollTo({
            top: 0,
            left: 0,
          });
          clickedTag ?   setPage2(pagik) : setPage(pagik);
    }
    useEffect(() => {
        getData();
      }, [page]);
  
    useEffect(() => {
      handleFavoriteClick(clickedTag);
    }, [page2]);
    return (
      <ArticleContext.Provider
        value={{ tag, setFilteredData , getData, articles, handleFavoriteClick, limit, articleCount, clickedTag, filteredData, handlePaginationClick, handleFeedClick}}
      >
        {props.children}
      </ArticleContext.Provider>
    );
  };
  
  export default ArticleContextProvider;