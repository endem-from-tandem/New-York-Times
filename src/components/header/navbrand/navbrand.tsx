import React from 'react'
import { NavLink } from 'react-router-dom'

const _ = require('./navbrand.module.scss')

const NavBrand: React.FC = () => {
    return(
        <NavLink 
          to ='/'
          className = {_.navBrand}
        >
            The New York Times
        </NavLink>
    )
}

export default NavBrand