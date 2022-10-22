import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <ul>
                <li><button className="login-btn">Sign In</button></li>
                <li><button className="logout-btn">Sign Out</button></li>
            </ul>
        </div>
    )
}

export default Login