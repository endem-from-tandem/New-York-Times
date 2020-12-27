import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import compose from '../../../utils/compose'
import {fetchArticles} from '../../../actions'

import { withNyapiService } from '../../hoc'

import Loader from '../../loader'
import ArticlesListItem from '../articles-list-item'
import ErrorIndicator from '../../error-indicator'

const _ = require('./articles-list.module.scss')

interface IArticleListProps{
    articles:any,
    loading:boolean,
    fetchArticles: any,
    error:any
}

/*
*/
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

class ArticlesListContainer extends Component<IArticleListProps>{
    componentDidMount(){
        this.props.fetchArticles()
    }

    render(){
        const{loading, error, articles} = this.props
        if(loading){
            return <Loader/>
        }
        if(error){
            return <ErrorIndicator/>
        }
        return <ArticlesList articles = {articles}/>
    }
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