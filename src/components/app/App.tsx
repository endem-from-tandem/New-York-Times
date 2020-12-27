import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import compose from '../../utils/compose'
import { withFirebaseService } from '../hoc'

import {fapp} from '../../firebase'
import useRoutes from '../routes/use-routes'
import { setUser } from '../../actions'

const _ = require('./App.module.scss')

interface IApp{
  user:any,
  setUser:any
}

const App:React.FC<IApp> = ({setUser}) =>{
  const [auth, setAuth] = useState<string | boolean>('prefer')
  useEffect(()=>{
    //Установить прослушку на статус юзи
    fapp.auth().onAuthStateChanged(user => {
      if(user){
          console.log(user)
          setUser(user)
          setAuth(true)
      }else{
        setUser(user)
        setAuth(false)
        
      }
    })
    
  },[])

  return (
    <div className = {_.app}>
      {useRoutes(auth)}
    </div>
  )
}

const mapStateToProps = (state:any) => {
  return{
    user: state.user
  }
}

const mapDispatchToProps = {
  setUser
}

export default compose(
  withFirebaseService(),
  connect(mapStateToProps, mapDispatchToProps)
)(App)
