import React from 'react'
import LoginButton from '../login-button'
import UserDropdown from '../user-dropdown'

const _ = require('./nav.module.scss')

const Nav:React.FC<{auth:boolean}> = ({auth}) => {
    return(
        <nav className = {_.nav}>
            <ul>
            { 
              auth
                ?
            <UserDropdown/>
                :
            <LoginButton/>
            }
            </ul>
        </nav>
    )
}

export default Nav