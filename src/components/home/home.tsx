import React from 'react'

import { Route } from 'react-router-dom'

import Article from './article'
import ArticleBlock from './article-block'
import ArticlesList from './articles-list'

const _ = require('./home.module.scss')

const Home: React.FC<{auth:boolean}> = ({auth}) => {
    return(
        <div className = {_.home}>
            <div className = {_.content}>
                <ArticlesList/>
                {auth?
                <Route 
                  path = '/article/:id' 
                  render = {({match}) => 
                    <Article id={match.params.id}/>
                  }
                />
                :
                <ArticleBlock/>
                }
            </div>
        </div>
    )
}

export default Home