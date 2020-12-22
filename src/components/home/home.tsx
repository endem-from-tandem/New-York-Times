import React from 'react'

import Article from './article'
import ArticlesList from './articles-list'

const _ = require('./home.module.scss')

const Home: React.FC = () => {
    return(
        <div className = {_.home}>
            <div className = {_.content}>
                <ArticlesList/>
                {
                <Article/>
                }
            </div>
        </div>
    )
}

export default Home