import React from 'react'
import LoginButton from '../login-button'
import UserDropdown from '../user-dropdown'

const _ = require('./nav.module.scss')

const Nav: React.FC = () => {
    return(
        <nav className = {_.nav}>
            <ul>
            { 
              false
                ?
            <LoginButton/>
                :
            <UserDropdown/>
            }
            </ul>
        </nav>
    )
}

export default Nav