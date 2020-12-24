import React from 'react'

import Article from './article'
import ArticleBlock from './article-block'
import ArticlesList from './articles-list'

const _ = require('./home.module.scss')

const Home: React.FC = (props) => {
    return(
        <div className = {_.home}>
            <div className = {_.content}>
                <ArticlesList/>
                {false?
                <ArticleBlock/>
                :
                <Article/>
                }
            </div>
        </div>
    )
}

export default Home