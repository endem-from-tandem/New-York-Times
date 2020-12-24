import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import default_avatar from '../../../img/default_avatar.png'
const user_avatar = 'https://sun9-35.userapi.com/impg/ELDHPHdBQgo-uldZlhGdhqmTNjR6xzTEfAi1_g/bi5RlxX8XvU.jpg?size=874x1080&quality=96&proxy=1&sign=3178b898fa8a443b2d59f340d528b3be&type=album'
const _ = require('./user-dropdown.module.scss')


const UserDropdown  = () => {
    const [drop, setDrop] = useState(false)
    const dropHandler = () => {
        setDrop(!drop)
    }
    const avatar = user_avatar ||  default_avatar
   
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
                <NavLink to = 'profile'>Profile</NavLink>
                <button>
                    Log out
                </button>
            </div>
            : null}
        </>
    )
}

export default UserDropdown