import React, { Component, useState, useContext } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText"
import './auth.css'
import { AuthContext } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const {updateToken, signIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        const response = await signIn(values);
        localStorage.setItem("token", response.data.user.token);
        updateToken(response.data.user.token)

        navigate('/main');

    }

    const handleInputValue = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return ( 
    <div className='auth-form'>
         
                <form onSubmit={handleFormSubmit} className = "form">
                <FormHelperText error={true}>{errorMessage || " "}</FormHelperText>
                    <h1>Sign In</h1>
                  
                    <TextField
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputValue}
                        required
                        fullWidth
                        style={{margin: '3px'}}
                    />
                 
                    <TextField
                        name="password"
                        value={values.password}
                        onChange={handleInputValue}
                        type="password"
                        label="Password"
                        required
                        fullWidth
                        variant="filled"
                        defaultValue="Success"

                        style={{margin: '3px', color:"green"}}

                    />

                    
                        <Button color="primary" variant="contained" type="submit" style={{margin: '3px'}}>
                            Sign In
                        </Button>
                </form>
    </div> );
}
 
export default SignIn;