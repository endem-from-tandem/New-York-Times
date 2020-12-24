import React from 'react'

const _ = require('./sign-up.module.scss')

const SignUp: React.FC = () => {
    return(
        <div className = {_.signUp}>
            <h1>Create a New York Times account</h1>
            <form className = {_.form}>
                <label>
                <div className ={_.label}>Name</div>
                <input  type ='text'/>
                </label>
                <label>
                <div className ={_.label}>Last Name</div>
                <input  type ='text'/>
                </label>
                <label>
                <div className ={_.label}>Email</div>
                <input  type ='text'/>
                </label>
                <label>
                <div className ={_.label}>Password</div>
                <input  type ='password'/>
                </label>
                <br/>
                <button className = {_.submit} type = 'submit'>Sign Up</button>
            </form>
            <h2>Or sign in with:</h2>
            <button type = 'button' className ={`${_.google} ${_.providerButton}`}></button>
            <button type = 'button' className ={`${_.facebook} ${_.providerButton}`}></button>
        </div>
    )
}

export default SignUp