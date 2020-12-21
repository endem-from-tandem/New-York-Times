import React from 'react'
import _ from './error-indicator.module.scss'

const ErrorIndicator = () => {
    return(
        <div className = {_.container}>
            <div className = {_.errorText}> E R R O R </div>
            <div> Something wrong... Try again...</div>
        </div>
    )
}

export default ErrorIndicator