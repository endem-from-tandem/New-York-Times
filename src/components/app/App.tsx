import React from 'react'
import { connect } from 'react-redux'
import compose from '../../utils/compose'
import { withFirebaseService } from '../hoc'

import Header from '../header/header'
import Home from '../home'
import SignUp from '../sign-up'
import Profile from '../profile'

const _ = require('./App.module.scss')


function App(){
  return (
    <div className = {_.app}>
     <Header/>
     <Home/>
    
      <SignUp/>
     <Profile/>
    </div>
  )
}

export default compose(
  withFirebaseService(),
  connect()
)
 (App)
