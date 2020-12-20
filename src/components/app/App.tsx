import React from 'react';
import Header from '../header/header'
const _ = require('./App.module.scss')


function App() {
  return (
    <div className = {_.container}>
      <Header/>
    </div>
  )
}

export default App
