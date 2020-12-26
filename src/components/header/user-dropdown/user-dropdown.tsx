import React, { useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'

import default_avatar from '../../../img/default_avatar.png'
import { withFirebaseService } from '../../hoc'
const user_avatar = null
const _ = require('./user-dropdown.module.scss')


const UserDropdown:React.FC<{fbs:any}>  = ({fbs}) => {
    const [drop, setDrop] = useState(false)
    const dropHandler = () => {
        setDrop(!drop)
    }
    const avatar = user_avatar ||  default_avatar
   
    const signOutHandler = () => {
        fbs.userSignOut()
    }
    return(
        <>
            <input 
                onClick = {dropHandler}
                alt = '.'
                src = {avatar} type = 'image' 
                className = {_.avatar}>    
            </input>
            {drop ?
            <div 
                onClick = {dropHandler}
                className = {_.dropdown}>
                <NavLink to = '/profile'>Profile</NavLink>
                <button onClick ={signOutHandler}>
                    Log out
                </button>
            </div>
            : null}
        </>
    )
}

export default withFirebaseService() (UserDropdown)