import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import Header from '../header/header'
import { withFirebaseService } from '../hoc';
const _ = require('./App.module.scss')

function App(props:any){
  console.log(props)
  return (
    <div className = {_.container}>
      <Header/>
    </div>
  )
}

export default compose(
  withFirebaseService(),
  connect()
)
 (App)
