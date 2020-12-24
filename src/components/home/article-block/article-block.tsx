import React from 'react'

const _ = require('./article-block.module.scss')

const ArticleBlock: React.FC = () => {
    return(
        <div>
            <h2 className= {_.blockText}>
                You need sign in for watch article details
            </h2>
            <div className = {_.blockImg}></div>
        </div>
    )
} 

export default ArticleBlock