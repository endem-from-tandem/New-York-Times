import React from 'react'

const _ = require('./navbrand.module.scss')

const NavBrand: React.FC = () => {
    return(
        <a 
          href = '/'
          className = {_.navBrand}
        >
            The New York Times
        </a>
    )
}

export default NavBrand