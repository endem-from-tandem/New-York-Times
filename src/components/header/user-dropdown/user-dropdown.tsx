import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import default_avatar from '../../../img/default_avatar.png'
import compose from '../../../utils/compose'
import { withFirebaseService } from '../../hoc'
const _ = require('./user-dropdown.module.scss')

interface IUserDropdown{
    fbs:any,
    user:any
}

const UserDropdown:React.FC<IUserDropdown>  = ({fbs, user}) => {
    const [drop, setDrop] = useState(false)
    const dropHandler = () => {
        setDrop(!drop)
    }
    
    if(!user){
        return null
    }
    const avatar = user.photoURL ||  default_avatar
   
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

const mapStateToProps = (state) => {
    return{
        user:state.user
    }
}

export default
compose(
     withFirebaseService(),
     connect(mapStateToProps)
) (UserDropdown)