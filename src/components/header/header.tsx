import React from 'react'
import Nav from './nav'
import NavBrand from './navbrand/navbrand'

const _ = require('./header.module.scss')

const Header:React.FC<{auth:boolean}> = ({auth}) => {
    return(
        <div className = {_.header}>
            <div className = {_.content}>
                <NavBrand/>
                <Nav auth = {auth}/>
            </div>
        </div>
    )
}

export default Header