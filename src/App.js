import React from 'react';
import './App.css';
import MainPart from './components/mainPart/mainPart';
import MiddlePart from './components/middlePart/middlePart';
import Navbar from './components/navBar';
import SignUp from './components/authPages/signup';
import { Route,Routes } from "react-router-dom";
import SignIn from './components/authPages/singIn';
import Accumulator from './components/accumulator/accumulator';


function App() {
  return (
    <div>
      <React.Fragment>
      <Navbar />
      <main>
          <Routes>
            <Route  path="/sign-in" element={ <SignIn/>} />
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
