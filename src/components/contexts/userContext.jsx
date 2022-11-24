import React, {createContext, useEffect, useState, useContext} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";


import { path_URL } from "../../variables";
import { AuthContext } from './authContext';

export const UserContext = createContext({
    user: "boxk",
    userArticles: "",
    favoriteArticles: "",
    setUserArticles: ()=> "",
    getUser: () => "",
    setUser: () => "",
    changeUser: () => "",
    createArticle:() => "",
    favoriteArticle: () => "",
    unFavoriteArticle: () => "",
    getFavorited: () => "",
 
})

const UserContextProvider = (props) => {
    const {updateToken, token} = useContext(AuthContext);
    const [favoriteArticles, setFavoriteArticles] = useState("");
    const [user, setUser] = useState("");
    const [userArticles, setUserArticles] = useState("");
    

    async function getUser(){
        try {
            const userData = await (await axios.get(`${path_URL}/user`)).data.user;
            setUser(userData);
            return userData

        } catch (error) {
            setUser("");
        }
       
    }

    async function changeUser(values){
        const userData  = await (await axios.put(`${path_URL}/user`, {
            "user": values
        }));
        setUser(userData);
        updateToken(values.token);
    }

    async function createArticle(values){
        const articleData  = await (await axios.post(`${path_URL}/articles`, {
            "article": values
        }));
    }

   async function getUserArticle(){
          const token = localStorage.getItem('token')
          const value = jwt_decode(token);
          const userArticleData = await (await axios.get(`${path_URL}/articles?author=${value.username}&limit=10&offset=0`)).data.articles;
          setUserArticles(userArticleData);
    }

    async function favoriteArticle(slug){
        try{
            const result = await (await axios.post(`${path_URL}/articles/${slug}/favorite`));
            console.log(result, 'favorite')
        }
        catch(e){
           console.error(e);
        }
    }


    async function unFavoriteArticle(slug){
        try{
           const result =  await (await axios.delete(`${path_URL}/articles/${slug}/favorite`));
           console.log(result, 'unfavorite')

        }
        catch(e){
           console.error(e);
        }
    }

    async function getFavorited(){
        try {
            const token = localStorage.getItem('token')
            const value = jwt_decode(token);
            const favoritedData = await (await axios.get(`${path_URL}/articles?favorited=${value.username}`)).data.articles;
            setFavoriteArticles(favoritedData);
            return favoritedData;
        } catch (error) {
            console.error("You're not authorized to like please login")
        }
        
    }
   
    useEffect( () => {
        getUser();
        getUserArticle();
        getFavorited();
      }, [token]);


    return (
        <UserContext.Provider value={{getUser, user, changeUser, createArticle, userArticles, favoriteArticles, unFavoriteArticle, getFavorited, favoriteArticle }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;