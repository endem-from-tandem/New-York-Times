import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import compose from '../../../utils/compose'
import {fetchArticles} from '../../../actions'

import { withNyapiService } from '../../hoc'

import Loader from '../../loader'
import ArticlesListItem from '../articles-list-item'
import ErrorIndicator from '../../error-indicator'

const _ = require('./articles-list.module.scss')

interface IArticleList{
    articles:any,
    loading:boolean,
    fetchArticles: any,
    error:any
}


const ArticlesList = ({articles}) => {
    return(
        <div className = {_.list}>
           {
                articles.map((art:any)=> {
                    const index = art._id.lastIndexOf('/') + 1
                    const id = art._id.substr(index, art._id.length)
                    return(
                        <ArticlesListItem 
                            key = {id}
                            id = {id}
                            data = {art}
                        />
                    )
                })
            }
        </div>
    )
}

const ArticlesListContainer:React.FC<IArticleList> = (props) => {
    const {
        fetchArticles,
        articles,
        loading,
        error
    } = props

    // сомнительное решение мелькания articles-list при переходе с profile на главную
    const [loadingCastil, setLoadingCastil] = useState(true)

    useEffect(()=> {
       setLoadingCastil(true)
       fetchArticles()
       setLoadingCastil(false)
    }, [])

    if(loadingCastil){
        return <Loader/>
    }

    if(loading){
        return <Loader/>
    }
    if(error){
        return <ErrorIndicator/>
    }
    return <ArticlesList articles = {articles}/>
}


const mapStateToProps = ({articles, loading, error}) => {
    return {articles, loading, error}
}

const mapDispatchToProps = (dispatch, {nys}) => {
    return {
        fetchArticles: fetchArticles(nys, dispatch)
    }
}

export default compose(
    withNyapiService(),
    connect(mapStateToProps, mapDispatchToProps)
    
)(ArticlesListContainer)