import React from 'react'
import ArticlesListItem from '../articles-list-item'

const _ = require('./articles-list.module.scss')

const fakeDataArticlesList:Array<string> = ['1', '2', '3','4']
const articlesListMap = fakeDataArticlesList.map((art)=> {
    return(
        <ArticlesListItem 
            key = {art}
        />
    )
})

const ArticlesList : React.FC = () => {
    return(
        <div className = {_.list}>
           {articlesListMap}
        </div>
    )
}

export default ArticlesList