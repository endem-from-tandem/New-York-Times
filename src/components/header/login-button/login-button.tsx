import React from 'react'

const _  = require('./login-button.module.scss')

const LoginButton: React.FC = () => {
    return(
        <button className = {_.loginButton}>
            Login
        </button>
    )
}

export default LoginButton