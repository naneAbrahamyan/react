import React, {useContext} from 'react';
import './App.css';
import MainPart from './components/mainPart/mainPart';
import MiddlePart from './components/middlePart/middlePart';
import Navbar from './components/navBar';
import SignUp from './components/authPages/signup';
import { Route,Routes } from "react-router-dom";
import SignIn from './components/authPages/singIn';
import Accumulator from './components/accumulator/accumulator';
import { AuthContext } from './components/contexts/authContext';
import UserPage from './components/user/userPage';
import axios from 'axios';
import Settings from './components/user/settings';
import NewPost from './components/user/newPost';
import UserProfile from './components/user/userProfile';

function App() {
  // const {token} = useContext(AuthContext)
  const token = localStorage.getItem('token');
  if(token){
    axios.defaults.headers.common["authorization"] = `Token `+token;
  }
  return (
    <div>
      <React.Fragment>
      <Navbar />
      <main>
          <Routes>
          <Route  path="/main"
             element =  {token ? <UserPage /> : <Accumulator />}
              />
              <Route  path="/settings"
             element =  {token ? <Settings /> : <Accumulator />}
              />
               <Route  path="/new-post"
             element =  {token ? <NewPost /> : <Accumulator />}
              />
                <Route  path="/profile/:id"
             element =  {token ? <UserProfile /> : <Accumulator />}
              />
            <Route path="/sign-in" element={ <SignIn/>} />
            <Route path = "/sign-up" element={ <SignUp />} />
            <Route path = "/home" element = {<Accumulator/>} />
            <Route path = "/" element = {<Accumulator/>} />
          </Routes>
            
       </main>
   
      </React.Fragment>
    
    </div>
  );
}

export default App;
