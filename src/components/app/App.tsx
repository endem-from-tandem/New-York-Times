import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withFirebaseService } from '../hoc';

import Header from '../header/header'
import Home from '../home';

const _ = require('./App.module.scss')

function App(props:any){
  console.log(props)
  console.log(props.fbs.echo)
  return (
    <div className = {_.app}>
      <Header/>
      <Home/>
    </div>
  )
}

export default compose(
  withFirebaseService(),
  connect()
)
 (App)
