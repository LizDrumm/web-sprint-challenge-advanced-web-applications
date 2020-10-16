import React, {useState} from "react";
import {useHistory} from 'react-router';
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  
        username: "",
        password:"",
    
};

const Login = (props)=>{
    const [credentials, setCredentials] =useState(initialState);
    //const [ error, setError ] = useState(initialError);
   const history = useHistory();
   //make a post request to retrieve a token from the api
   // when you have handled the token, navigate to the BubblePage route

    const handleChange= (e)=>{
        setCredentials({
            
                ...credentials,
                [e.target.name]:e.target.value,
            
        })
    }


    const login = (e) =>{
        e.preventDefault();
        axiosWithAuth()
        .post("/api/login", credentials)
        .then((res)=>{
            window.localStorage.setItem ("token", res.data.payload);
           props.history.push("/protected");
        })
        .catch((err)=>{
            console.log(err)
        })
    };
    


    return (
        <div>
            <form onSubmit = {login}>
                <label>
                    Username:
                <input
                type = "text"
                name = "username"
                value = {credentials.username}
                onChange = {handleChange}

                />
               </label>
               <label>
                    Password:
                 <input
                    type = "text"
                    name = "password"
                    value = {credentials.password}
                    onChange = {handleChange}
                />
                </label>
                <button>Log in</button>
        </form>
        </div>
    )

}

export default Login;
