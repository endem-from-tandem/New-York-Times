import React from 'react'

const _ = require('./article.module.scss')

const Article:React.FC = () =>{
    return(
        <div>
            <div className = {_.article}>
            <h3>
            New Coronavirus Variant Causes Alarm Around the World
            </h3>
            <div className = {_.description}>
            Working together with the president-elect, bipartisan groups in the Senate and House helped push feuding leaders to compromise.
            </div>
            <button className = {_.moreButton}>
                Read more
            </button>
            </div>
        </div>
    )
} 

export default Article