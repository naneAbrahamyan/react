import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

import { path_URL } from "../../variables";

export const AuthContext = createContext({
    token: "",
    setToken: () => "",
    updateToken: () => "",
    getToken: () => "",
    signUp: () => "",
})

const AuthContextProvider = (props) => {
    const [token, setToken] = useState("");

    function getToken() {
        setToken(localStorage.getItem("token"));
    }

    const updateToken = (userToken) => {
        setToken(userToken);
        if (userToken === "") {
            localStorage.removeItem("token");
        } else {
            localStorage.setItem("token", userToken);
        }
    };

    const signIn = async (values) => {
        return axios.post(`${path_URL}/users/login`, {
            "user": values
        });
    };

    const signUp = async(values) => {
        return axios.post(`${path_URL}/users`, {
            "user": values
        });
       
    }

    useEffect( () => {
        getToken()
      }, []);


    return (
        <AuthContext.Provider value={{token, updateToken, signIn, signUp}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;