import React from 'react'

const _ = require('./articles-list-item.module.scss')

const ArticlesListItem: React.FC = () => {
    return(
        <a href = '/article/3' className = {_.listItem}>
            New Coronavirus Variant Causes Alarm Around the World
        </a>
    )
}

export default ArticlesListItem