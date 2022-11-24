import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ArticleContextProvider from './components/contexts/articleContext';
import AuthContextProvider from './components/contexts/authContext';
import UserContextProvider from './components/contexts/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider >
  <AuthContextProvider>
      <ArticleContextProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </ArticleContextProvider>
    </AuthContextProvider>
  </UserContextProvider>
  


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
