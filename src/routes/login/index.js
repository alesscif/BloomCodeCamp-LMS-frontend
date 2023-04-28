import './login.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useLocalState } from './../../utils/useLocalState';

function Login() {
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [badCredentials, setBadCredentials] = useState("");
    const reqBody = { "username": username, "password": password};
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        fetch("api/auth/login", 
            {"headers": {"Content-Type": "application/json"}, 
            method: "post", 
            body: JSON.stringify(reqBody)})
        .then(async (res) => {
            let jwt = await res.text();
            if (res.status == '200') {
                setJwt(jwt);
                setTimeout( () => { navigate('/auth') }, 400);
            }
            if (res.status == '401') setBadCredentials(true);
        })
    }


    return (
        <div id="box">
            <h1 id="hd1">Log in</h1>
            <form>
                <input type="text" placeholder="username" onChangeCapture={(e) => setUsername(e.target.value)}></input><br></br>
                <input type="password" placeholder="password" onChangeCapture={(e) => setPassword(e.target.value)}></input><br></br>
                <button id="bt1" onClick={ handleClick }>submit</button>
            </form>
            { badCredentials && <p>invalid credentials</p>} 
        </div>
    );
}

export default Login;