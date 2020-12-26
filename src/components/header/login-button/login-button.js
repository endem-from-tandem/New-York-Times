import React, { useState } from 'react'
import LoginModal from '../login-modal'

const _  = require('./login-button.module.scss')

const LoginButton = () => {
    const [showModal, setShowModal] = useState(false)
    return(
        <>
            <button
              className = {_.loginButton}
              onClick = {()=>setShowModal(true)}
            >
                Sign In
            </button>
            { showModal ? <LoginModal closeModal = {() =>setShowModal(false)}/> : null}
        </>
    )
}

export default LoginButton