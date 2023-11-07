import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserOrLogin({ username }) {
    const loggedIn = !username == '';
    return (
        <>
        { loggedIn ? (
            <h5>Hi, { username }</h5>
        ) : (
            <Link to="/login">
                <h5 className="w5">Log In</h5>
            </Link>
        ) }
        </>
    )
}

export default UserOrLogin;


