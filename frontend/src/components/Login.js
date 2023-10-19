import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    //     useEffect(() => {
    //         fetch("/api/get-lsn?lang=" + lang)
    //         .then((response) => response.json())
    //         .then((responseData) => {
    //             setData(responseData);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         });
    //     }, []);
    }
    return (
        <>
        <center>
            <h1>Login</h1>
            <div className='login-bubble'>
            <form>
                <div className="form-group">
                    <label htmlFor="username"><h5>Username: </h5></label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password"><h5>Password: </h5></label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={ handleLogin }>Login</button>
            </form>
            </div>
        </center>
        </>
    )
};

export default Login;