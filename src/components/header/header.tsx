import React from 'react'
const _ = require('./header.module.scss')

const Header : React.FC = () => {
    return(
        <div className = {_.header}>
            <div className = {_.container}>
                <a href = '/' className = {_.navBrand}>The New York Times</a>
                <nav className = {_.nav} >
                    <ul>
                        <button className = {_.loginButton}>
                            Login
                        </button>
                        {/*
                        <li>
                            <a href="/profile">
                                Profile
                            </a>
                        </li>
                        */ }
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header