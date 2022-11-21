import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

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
        const article = await (await (axios.get(`https://api.realworld.io/api/articles?offset=${offset}&limit=${limit}`))).data;
        setArticleCount(article.articlesCount);
        setArticles(article.articles);
    }

    const handleFavoriteClick = async (value) => {
        const filtered = await (await (axios.get(`https://api.realworld.io/api/articles?tag=${value}&offset=${offset2}&limit=${limit}`))).data;
        setClickedTag(value);
        setFilteredData(filtered.articles);
        setArticleCount(filtered.articlesCount);
        console.log(filtered.articles)
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
      }, []);
      useEffect(() => {
        getData();
        console.log('get Data Worked')
      }, [page]);

      useEffect(() => {
        handleFavoriteClick(clickedTag);
        console.log('handle favorite worked')
      }, [page2]);
    return (
      <ArticleContext.Provider
        value={{ tag, setFilteredData, favorite , getData, articles, handleFavoriteClick, limit, articleCount, clickedTag, filteredData, handlePaginationClick, handleFeedClick}}
      >
        {props.children}
      </ArticleContext.Provider>
    );
  };
  
  export default ArticleContextProvider;