import React, { useState, useContext, useEffect } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { UserContext } from '../contexts/userContext';
import { AuthContext } from '../contexts/authContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Settings = () => {
    const {user, getUser, changeUser} = useContext(UserContext);
    const {updateToken} = useContext(AuthContext)
    const [values, setValues] = useState("");
    const handleInputValue = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    function handleLogOut(){
        updateToken("");
        Navigate("/home")
    }
    useEffect(() => {
       const a = async () =>{
          const temp = await getUser();
          setValues({...temp, password:""});
       } 
       a();

      }, []);

      const handleFormSubmit = async(e) => {
        e.preventDefault();
        changeUser(values);
      }


    return (  
        <div>
            <form onSubmit={handleFormSubmit} >
                    <TextField
                        name="image"
                        label="IMAGE"
                        value={values.image || ""}
                        onChange={handleInputValue}
                        required
                        fullWidth
                        style={{margin: '3px'}}
                   
                     />
                     <TextField
                        name="username"
                        label=" USERNAME"
                        value={values.username || ""}
                        onChange={handleInputValue}
                        fullWidth
                        style={{margin: '3px'}}
                   
                     />
                    <TextField
                        name="bio"
                        label="BIO"
                        value={values.bio || ""} 
                        onChange={handleInputValue}
                        fullWidth
                        style={{margin: '3px'}}
                   
                     />
                     <TextField
                        name="email"
                        label="EMAIL"
                        value={values.email || ""}
                        onChange={handleInputValue}
                        fullWidth
                        style={{margin: '3px'}}
                   
                     />
                      <TextField
                        name="password"
                        value={values.password}
                        onChange={handleInputValue}
                        type="password"
                        label="Password"
                        fullWidth
                        variant="filled"
                        defaultValue="Success"
                        style={{margin: '3px', color:"green"}}

                       />

                 
                 <Button color="primary" variant="contained" type="submit"  style={{margin: '3px'}}>
                    Update Settings
                 </Button>
            </form>
            <Button onClick={handleLogOut}>
                Log OUT
            </Button>
        </div>
    );
}
 
export default Settings;
                   