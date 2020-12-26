import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import compose from '../../utils/compose'
import { withFirebaseService } from '../hoc'

import {fapp} from '../../firebase'
import useRoutes from '../routes/use-routes'

const _ = require('./App.module.scss')


const App:React.FC = () =>{
  const [auth, setAuth] = useState<string | boolean>('prefer')
  useEffect(()=>{
    //Установить прослушку на статус юзи
    fapp.auth().onAuthStateChanged(user => {
      if(user){
          console.log(user)
          // и дудсоить редакс при изменинии
          setAuth(true)
      }else{
          // и дудсоить редакс при изменинии
        setAuth(false)
        console.log('not auth')
      }
    })
    
    

  },[])

  return (
    <div className = {_.app}>
      {/* Сюды роутыр впихнуть вида router(auth) */}
      {useRoutes(auth)}
    </div>
  )
}

const mapStateToProps = (state:any) => {
  return{
    user: state.user
  }
}

export default compose(
  withFirebaseService(),
  connect(mapStateToProps)
)
 (App)
