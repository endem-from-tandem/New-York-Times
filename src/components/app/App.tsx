import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {fapp} from '../../firebase'
import useRoutes from '../routes/use-routes'

const _ = require('./App.module.scss')


const App:React.FC= () =>{
  const dispatch = useDispatch()
  const [auth, setAuth] = useState<string | boolean>('prefer')
  useEffect(()=>{
    fapp.auth().onAuthStateChanged(user => {
      if(user){
          console.log(user)
          dispatch({type:'SET_USER', payload:user})
          setAuth(true)
      }else{
        dispatch({type:'SET_USER', payload:user})
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

export default App
