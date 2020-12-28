import React, { useState, useRef } from 'react'
import { withFirebaseService } from '../hoc'
import formValid from '../../utils/form-valid'
const _ = require('./sign-up.module.scss')

const SignUp: React.FC<{fbs:any}> = ({fbs}) => {
    const [error, setError] = useState<any>(null)
    const [form, setForm] = useState({
        email:'',
        password:'',
        name: '',
        lastName:''
    })
    const submitRef = useRef(null)
    const googleRef = useRef(null)
    const facebookRef = useRef(null)


    const refs:Array<any> = [submitRef, googleRef, facebookRef]

    const changeHandler = (e:any) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const signUpWithEmail = (e) => {
        e.preventDefault()    
        setError(null)
    
        refs.forEach(r => {
            r.current.disabled = true
        })
        
        const validAnswer = formValid(form)
        if(validAnswer.value === false){
            setError(validAnswer.message)
            refs.forEach(r => {
                r.current.disabled = false
            })
        }

        if(validAnswer.value){
            console.log(validAnswer.value)
            fbs.userSignUpWithEmail(form.email, form.password)
            .then(() => {
               fbs.updateUserAfterSignUp(form)
            })
            .catch ((e) => {
                refs.forEach(r => {
                    r.current.disabled = false
                })
                setError(e.message)
            })
        }
       
    }

    const signUpWithGoogle = () => {
        fbs.userSignWithGoogle()
    }
    return(
        <div className = {_.signUp}>
            <h1>Create a New York Times account</h1>
            <form onSubmit = {signUpWithEmail} className = {_.form}>
                <label>
                <div className ={_.label}>Name</div>
                <input required onChange ={changeHandler} name = 'name' type ='text'/>
                </label>
                <label>
                <div className ={_.label}>Last Name</div>
                <input required onChange ={changeHandler} name = 'lastName' type ='text'/>
                </label>
                <label>
                <div className ={_.label}>Email</div>
                <input required onChange ={changeHandler} name ='email' type ='text'/>
                </label>
                <label>
                <div className ={_.label}>Password</div>
                <input required onChange ={changeHandler} name ='password'  type ='password'/>
                </label>
                <br/>
                <button ref ={submitRef} className = {_.submit} type = 'submit'>Sign Up</button>
            </form>
            <div className ={_.notification}>{error}</div>
            <h2>Or sign in with:</h2>
            <button onClick = {signUpWithGoogle} ref ={googleRef} type = 'button' className ={`${_.google} ${_.providerButton}`}></button>
            <button ref = {facebookRef} type = 'button' className ={`${_.facebook} ${_.providerButton}`}></button>
        </div>
    )
}

export default withFirebaseService() (SignUp)