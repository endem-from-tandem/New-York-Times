import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Header from '../header'
import Profile from '../profile'
import Home from '../home'
import SignUp from '../sign-up'
//import Loader from '../loader'

const useRoutes = (auth) => {
    if(auth === 'prefer'){
        return(
            null
        )
    }

    return(
        <>
        <Header auth ={auth}/>
            <Switch>
                <Route path = {['/', '/article/:id']}  exact>
                    <Home auth = {auth}/>
                </Route>
                <Route path = {['/sign-up', '/profile']}  exact>
                    { auth 
                        ?
                        <>
                    <Redirect to = 'profile'/>
                    <Profile/>
                        </>
                        :
                        <>
                    <Redirect to ='/sign-up'/>
                    <SignUp/>
                        </>
                    }
                </Route>
                <Redirect to = '/'/>
            </Switch>
        </>
    )
  
}

export default useRoutes