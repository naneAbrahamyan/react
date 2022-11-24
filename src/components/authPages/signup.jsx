import React, { Component, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText"
import './auth.css'
import { AuthContext } from '../contexts/authContext';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
   
    const {updateToken, signUp} = useContext(AuthContext);

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await signUp(values);
            localStorage.setItem("token", response.data.token);

            updateToken(response.data.token)

            navigate('/main');

        } catch (ex) {
            setErrorMessage(e.response?.data?.message || "Something went wrong");
        }
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
                    <h1>Sign Up</h1>
                  
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
                        name="username"
                        label="UserName"
                        value={values.username}
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
                        style={{margin: '3px'}}
                        required
                        fullWidth
                    />


                        <Button color="primary" variant="contained" type="submit"  style={{margin: '3px'}}>
                            Sign Up
                        </Button>
                </form>
    </div> );
}
 
export default SignUp;