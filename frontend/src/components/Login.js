import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const csrfToken = window.CSRF_TOKEN;

    const handleLogin = async () => {
        const data = {
            username: username,
            password: password,
        };
    
        const response = await fetch('/api/ling_login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("successful login!");
        } else {
            console.log("unsuccessful login :(");
        }
    }
    
    return (
        <>
        <center>
            <h1>Log In</h1>
            <br/>
            <form>
                <div className="form-group">
                    <label htmlFor="username"><h5 className="w5">Username: </h5></label>
                    <br/>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password"><h5 className="w5">Password: </h5></label>
                    <br/>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" className="btn btn-db" onClick={ handleLogin }><h5 className="w5">Log In</h5></button>
            </form>
        </center>
        </>
    )
};

export default Login;