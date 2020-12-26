import React from 'react'
import { NavLink } from 'react-router-dom'

const _ = require('./articles-list-item.module.scss')

interface IArticlesListItem{
    data:any,
    id:string
}

const ArticlesListItem: React.FC<IArticlesListItem> = (props) => {
    const {
        data,
        id
    }= props

    return(
        <NavLink 
          to = {`/article/${id}`}
          className = {_.listItem}
        >
           {data.headline.main}
        </NavLink>
    )
}




export default ArticlesListItem