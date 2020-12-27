import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import default_avatar from '../../img/default_avatar.png'

const _ = require('./profile.module.scss')

interface IProfile{
    user: any
}

const Profile: React.FC<IProfile> = ({user}) => {

    if(!user){
        return null
    }

    const avatar = user.photoURL || default_avatar
    
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
            <div className = {_.name}>{user.displayName}</div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        user: state.user
    }
}


export default connect(mapStateToProps) (Profile)