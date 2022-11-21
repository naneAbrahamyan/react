import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'
const Navbar = () => {
    return ( 
  
    <nav className='navigation'>
        <div  className='logo'>
            <Link to = "/home">
              Conduit
            </Link>
          
        </div>
        <div>
            <ul>
               <li>
                    <Link to = "/home"> Home </Link>
                </li>

                <li>
                    <Link to = "/sign-in"> Sign in</Link>
                </li>
            
                <li>
                    <Link to="/sign-up"> Sign Up</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}
 
export default Navbar;