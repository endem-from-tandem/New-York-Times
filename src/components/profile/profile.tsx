import React from 'react'

import default_avatar from '../../img/default_avatar.png'

const _ = require('./profile.module.scss')

const Profile: React.FC = (props:any) => {
    const avatar = props.avatar || default_avatar
    return(
        <div className ={_.profile}>
            <div 
                className = {_.avatar}
                style = {{backgroundImage: `url(${avatar})`}}
            >
                <button className = {_.addAvatarButton}>
                    +
                </button>
            </div>
            <div className = {_.name}>Pavel Bero</div>
        </div>
    )
}

export default Profile