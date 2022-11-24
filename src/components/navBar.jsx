import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'
import { AuthContext } from './contexts/authContext';
const Navbar = () => {

    const {token } = useContext(AuthContext);
    return ( 
  
    <nav className='navigation'>
        <div  className='logo'>
            <Link to = "/home">
              Conduit
            </Link>
          
        </div>
        {token ? (
            <div>
                <ul>
                    <li>
                            <Link to = "/home"> Home </Link>
                        </li>

                        <li>
                            <Link to = "/new-post"> New Post </Link>
                        </li>
                    
                        <li>
                            <Link to="/settings"> Settings </Link>
                        </li>

                        <li>
                            <Link to="/profile/:id"> Profile </Link>
                        </li>
                    </ul>
            </div>
        ): 
        (   
            <div className='navigation'>
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
       )}
     
    </nav>
  );
}
 
export default Navbar;