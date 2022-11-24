import React, { useState, useContext} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { UserContext } from '../contexts/userContext';
const NewPost = () => {

    const {createArticle} = useContext(UserContext)
    const [values, setValues] = useState({
        body: "",
        description: "",
        title: "",
        tagList: ""
    });


    const handleFormSubmit = async(e) => {
        e.preventDefault();
        createArticle(values);
      }
    
    const handleInputValue = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    
    return (
        <div>
        <form onSubmit={handleFormSubmit} >
         
                 <TextField
                    name="title"
                    label="TITLE"
                    value={values.title || ""}
                    onChange={handleInputValue}
                    fullWidth
                    style={{margin: '10px'}}
               
                 />
                <TextField
                    name="description"
                    label="What's the article about?"
                    value={values.description || ""} 
                    onChange={handleInputValue}
                    fullWidth
                    style={{margin: '10px', height:'100px'}}
                    size='small'               
                 />
                <TextField
                    name="body"
                    label="Write your article (in markdown)"
                    value={values.body || ""}
                    onChange={handleInputValue}
                    fullWidth
                    style={{margin: '10px'}}
                    size="small"
               
                 />

                <TextField
                    name="tagList"
                    label="Enter tags"
                    value={values.tagList || ""}
                    onChange={handleInputValue}
                    fullWidth
                    style={{margin: '10px'}}
                    size = "small"
               
                 />

             <Button color="primary" variant="contained" type="submit"  style={{margin: '3px'}}>
               Post Article
             </Button>
        </form>
     
    </div>
    );
}
 
export default NewPost;