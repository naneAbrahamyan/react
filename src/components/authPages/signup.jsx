import React, { Component, useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText"
import './auth.css'

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");

    
    const [values, setValues] = useState({
        email: "",
        userName: "",
        password: "",
    });

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        console.log('I work')
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
                        name="userName"
                        label="UserName"
                        value={values.userName}
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