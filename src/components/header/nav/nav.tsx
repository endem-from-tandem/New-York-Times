import React from 'react'
import LoginButton from '../login-button'

const _ = require('./nav.module.scss')

const Nav: React.FC = () => {
    return(
        <nav className = {_.nav}>
            <ul>
            { 
              true
                ?
            <LoginButton/>
                :
            <li>
                <a href="/profile">
                    Profile
                </a>
            </li>
            }
            </ul>
        </nav>
    )
}

export default Nav