import React from 'react'
import { NavLink } from 'react-router-dom'

const _ = require('./articles-list-item.module.scss')

const ArticlesListItem: React.FC = () => {
    return(
        <NavLink 
          to = '/article/3'
          className = {_.listItem}
        >
            New Coronavirus Variant Causes Alarm Around the World
        </NavLink>
    )
}

export default ArticlesListItem