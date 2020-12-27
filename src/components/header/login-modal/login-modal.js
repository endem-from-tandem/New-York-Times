import React, {useState, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import { withFirebaseService } from '../../hoc'
import Portal from '../../portal'

const _ = require('./login-modal.module.scss')

const LoginModal = ({stopPropagationHandler, closeModal, fbs}) =>{
    const [error, setError] = useState(null)
    const [form, setForm] = useState({
        email:'', password:''
    })
    const submitRef = useRef(null)
    const googleRef = useRef(null)
    const facebookRef = useRef(null)

    const refs = [submitRef, googleRef, facebookRef]

    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const signInWithEmail = (e) => {
        e.preventDefault()    
        setError(null)
        refs.forEach(r => {
            r.current.disabled = true
        })
        fbs.userLoginWithEmail(form.email, form.password)
        .then(() => {
            closeModal()
        })
        .catch(e => {
            refs.forEach(r => {
                r.current.disabled = false
            })
            setError(e.message)
        })
    }

    const signInWithGoogle = () => {
        setError(null)
        refs.forEach(r=> {
            r.current.disabled = true
        })
        fbs.userSignWithGoogle()
        .then(() => {
            closeModal()
        })
        .catch(e => {
            refs.forEach(r => {
                r.current.disabled = false
            })
            setError(e.message)
        })

    }

    stopPropagationHandler = (e) => {
        e.stopPropagation()
    }
    return(
            <Portal>
                <div
                    className = {_.overlay}
                    onClick ={closeModal}
                >
                        <div 
                            className ={_.modal}
                            onClick = {stopPropagationHandler}
                        >
                        <div className = {_.header}>
                            <h2>Sign in</h2>
                            <button 
                                className = {_.closeButton}
                                onClick = {closeModal}
                            >
                                    x
                            </button>
                        </div>
                        <div className = {_.body}>
                            <form onSubmit = {signInWithEmail}>
                                <label>Email
                                <input 
                                  name = 'email'
                                  type = 'text'
                                  onChange ={changeHandler}
                                >
                                </input>
                                </label>

                                <br/>
                                <label>Password
                                <input
                                  name = 'password' 
                                  type = 'password'
                                  onChange ={changeHandler}
                                >
                                </input>
                                </label>
                                <div className = {_.buttons}>
                                    <div>
                                        <button ref ={submitRef} className ={_.submit} type = 'submit'>Sign in</button>
                                        <NavLink onClick = {closeModal} className= {_.signUp} to = '/sign-up'>Sign Up</NavLink>
                                    </div>
                                
                                    <div>
                                        <button onClick = {signInWithGoogle} ref ={googleRef} type = 'button' className ={`${_.google} ${_.providerButton}`}></button>
                                        <button ref ={facebookRef} type = 'button' className ={`${_.facebook} ${_.providerButton}`}></button>
                                    </div>
                                </div>
                            </form>
                            <div className = {_.notification}>{error}</div>
                        </div>
                    </div>
                </div>
            </Portal>
        )
    }
   

export default withFirebaseService()(LoginModal)