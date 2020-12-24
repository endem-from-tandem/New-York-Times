import Portal from '../../portal'

const _ = require('./login-modal.module.scss')

const LoginModal = ({stopPropagationHandler, closeModal}) =>{
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
                            <form>
                                <label>Email
                                <input type = 'text'></input>
                                </label>
                                <br/>
                                <label>Password
                                <input type = 'password'></input>
                                </label>
                                <div className = {_.buttons}>
                                    <div>
                                        <button className ={_.submit} type = 'submit'>Sign in</button>
                                        <button type = 'button' className= {_.signUp}>Sign Up</button>
                                    </div>
                                
                                    <div>
                                        <button type = 'button' className ={`${_.google} ${_.providerButton}`}></button>
                                        <button type = 'button' className ={`${_.facebook} ${_.providerButton}`}></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Portal>
        )
    }
   

export default LoginModal